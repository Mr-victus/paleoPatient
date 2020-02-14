import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import ImagePicker from 'react-native-image-picker';
import { Base64 } from 'js-base64';
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        messages: [],
        avatarSource:''
    };
  }
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
     if(messages[0].text=='hi')
     {

         messages[1]= {
            _id: this.randomid(), //some random number
            text: 'How you Doing', //the text message
            createdAt: new Date(), //date as a JS object if you send something else the app will work but it will show a "inavlid date" 
            image:'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png' //image link (if any)
           
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
     messages.reverse()
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    
    return (
        <>
        <Button title="click" onPress={()=>{
            ImagePicker.showImagePicker(options, (response) => {
                
               
                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log('User tapped custom button: ', response.customButton);
                } else {
                  //const source = { uri: response.uri };
               
                  // You can also display the image using data:
                  var l=Base64.encode(response.data)
                  console.log('Response = ', l);
                  const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    
                  this.setState({
                    avatarSource: source,
                  });
                }
              });
        }}/>
        <GiftedChat
        messages={this.state.messages}
        onSend={messages =>{ 
            messages[0]['image']= this.state.avatarSource.uri,
            this.onSend(messages)}}
        user={{
          _id: 1,
        }}
        alwaysShowSend={true}
      />
      </>
    );
  }
}

export default ChatScreen;
