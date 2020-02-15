import React, { Component } from 'react';
import { View, Text,Button,Image,TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import ImagePicker from 'react-native-image-picker';
import { Base64 } from 'js-base64';
import Voice from 'react-native-voice';
import firebase, { Firebase } from 'react-native-firebase';
import axios from 'axios'
// import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
// import {Icon} from 'native-base'
const options = {
    title: 'Select Avatar',
    //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  // 
class ChatScreen extends Component {
  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
    this.state = {
        messages: [],
        avatarSource:'',
        showAttachment:true,
        recognized: '',
        talking:false,
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
    };
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }


  onSpeechStart = e => {
    // eslint-disable-next-line
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  onSpeechRecognized = e => {
    // eslint-disable-next-line
    console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = e => {
    // eslint-disable-next-line
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = e => {
    // eslint-disable-next-line
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };

  onSpeechPartialResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged = e => {
    // eslint-disable-next-line
    console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
      talking:true
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello, I am Baymax, your personal healthcare companion.You can ask me anything regarding your health and I will try to provide you with the best help possible.',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            //avatar: 'data:image/jpeg;base64,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',
            avatar:'https://www.onelargeprawn.co.za/wp-content/uploads/2014/12/Baymax.jpg'
          },
        },
      ],
    })
  }
  randomid = () => {
    return Math.floor(Math.random() * 100);
  };
  onSend(messages = []) {
      //call the API and then generate the chat accordingly
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
      
      if(this.state.showAttachment)
      {
        var data = new FormData();
      data.append('media',
      {
         uri:this.state.avatarSource,
         name:'newFile.jpg',
         type:'image/jpg'
      });
        axios.post('http://172.16.7.150:8000/',data,{headers:{
          'Content-Type':'image/jpg'
        }})
      }
      else{
        axios.get('http://172.16.7.150:8000/in-android/?in='+messages[0].text).then((response)=>{
          messages[0]= {
            _id: this.randomid(), //some random number
            text: response.data.response, //the text message
            //attachment:response.data.attachment,
            createdAt: new Date(), //date as a JS object if you send something else the app will work but it will show a "inavlid date" 
            //image:'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png', //image link (if any)
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
  
           
          }
          messages.reverse()
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
            partialResults:[],
            showAttachment:response.data.attachment
          }))
          // this.setState({partialResults:[]}) 
        }).catch((error)=>{
          console.log(error)
        })
      }

      
     if(messages[0].text=='hi')
     {

         messages[1]= {
            _id: this.randomid(), //some random number
            text: 'How you Doing', //the text message
            createdAt: new Date(), //date as a JS object if you send something else the app will work but it will show a "inavlid date" 
            //image:'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png', //image link (if any)
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
           
          }
     }
     else if(messages[0].text=='I am doing fine')
     {
        messages[1]= {
            _id: this.randomid(),
            text: 'Me too',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          }
     }
    
  }

  render() {
    return (
        <>
       {/* {this.state.partialResults.map((result, index) => {
          return (
            <Text key={`partial-result-${index}`} >
              {result}
            </Text>
          );
        })} */}
        {console.log(this.state.partialResults[0])}
        <GiftedChat
        isTyping={true}
        text={this.state.partialResults[0]==undefined?undefined:this.state.partialResults[0]}
        
        onInputTextChanged={(text)=>{
            // if(text!='')
            // {
            //   this.setState({partialResults:[text]})
            // }
            if(text!=this.state.partialResults[0])
            {
              this.setState({partialResults:[]})
            }
            
        }}
        messages={this.state.messages}
        onSend={messages =>{ 
            messages[0]['image']= this.state.avatarSource,
            this.onSend(messages)}}
        user={{
          _id: 1,
        }}
        alwaysShowSend={true}
        renderActions={()=>{
          if(!this.state.showAttachment)
          {
            return( <TouchableOpacity onPress={()=>{
              // ImagePicker.showImagePicker(options, (response) => {
                  
                 
              //   if (response.didCancel) {
              //     console.log('User cancelled image picker');
              //   } else if (response.error) {
              //     console.log('ImagePicker Error: ', response.error);
              //   } else if (response.customButton) {
              //     console.log('User tapped custom button: ', response.customButton);
              //   } else {
              //     //const source = { uri: response.uri };
               
              //     // You can also display the image using data:
              //     var l=Base64.encode(response.data)
              //     console.log('Response = ', l);
              //     const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    
              //     this.setState({
              //       avatarSource: source,
              //     });
              //   }
              // });
              // if(this.state.talking)
              // this._stopRecognizing()
              // else
              this._startRecognizing()
            }}>
            <Image style={{height:50,width:50}}  source={require('../Assets/sound.png')}/>
            {/* <Icon name="attach-file" type="materialIcon"/> */}
            </TouchableOpacity>
           )
          }
          else
          {
            return( <TouchableOpacity onPress={()=>{
              ImagePicker.showImagePicker(options, (response) => {
                  
                 
                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log('User tapped custom button: ', response.customButton);
                } else {
                  const source = { uri: response.uri };
               
                  // You can also display the image using data:
                  //var l=Base64.encode(response.data)
                  //console.log('Response = ', l);
                  //const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    
                  this.setState({
                    avatarSource: source.uri,
                  });

                }
              });
              // if(this.state.talking)
              // this._stopRecognizing()
              // else
              // this._startRecognizing()
            }}>
            <Image style={{height:50,width:50}}  source={require('../Assets/attach.png')}/>
            {/* <Icon name="attach-file" type="materialIcon"/> */}
            </TouchableOpacity>
           )
          }
          
          return null
        
        }}
      />
      </>
    );
  }
}

export default ChatScreen;
