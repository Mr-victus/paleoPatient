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

  const firebaseConfig = {
    apiKey: "AIzaSyBPmL1lRUkFBJPM29n8oMPnGs0-elWkMls",
    authDomain: "paleo-c7565.firebaseapp.com",
    databaseURL: "https://paleo-c7565.firebaseio.com",
    projectId: "paleo-c7565",
    storageBucket: "paleo-c7565.appspot.com",
    messagingSenderId: "517418206898",
    appId: "1:517418206898:web:5b8a32b6dd13c5027debab",
    measurementId: "G-6NYCZ90TQV"
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
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
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
      axios.get('http://172.16.7.150:8000/in-android/?in='+messages[0].text).then((response)=>{
        messages[1]= {
          _id: this.randomid(), //some random number
          text: response.data, //the text message
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
        }))
        this.setState({partialResults:[]})
      }).catch((error)=>{
        console.log(error)
      })
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
            messages[0]['image']= this.state.avatarSource.uri,
            this.onSend(messages)}}
        user={{
          _id: 1,
        }}
        alwaysShowSend={true}
        renderActions={()=>{
          if(this.state.showAttachment)
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
          return null
        
        }}
      />
      </>
    );
  }
}

export default ChatScreen;
