import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { Toast } from 'native-base';
const options = {
    title: 'Select Avatar',
    //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
class Pulmonologist extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Description:'',
        date:'',
        avatarSource:'',
        avatarSource2:'',
        percentage:'',
        completed:false
    };
  }

  render() {
    return (
        <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>{
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
                  const source2 = { uri: 'data:image/jpeg;base64,' + response.data };
                    
                  this.setState({
                    avatarSource: source.uri,
                    avatarSource2:source2
                  });

                }
              });
        }}>
      <View>
        <Image style={{height:50,width:50,justifyContent:'center',alignContent:'center',alignSelf:'center'}} source={require('../Assets/attach.png')}/>
        {this.state.avatarSource2!=''?<Image style={{height:200,width:200,justifyContent:'center',alignContent:'center',alignSelf:'center'}} source={this.state.avatarSource2}/>:null}
      </View>
      </TouchableOpacity>
      <TextInput value={this.state.Description} onChangeText={(text)=>{
                this.setState({Description:text})
              }} placeholder="Description" style={{borderBottomWidth:0,borderBottomColor:"grey",marginLeft:hp("1.5%"),fontSize:20,marginTop:hp("1%")}}/>
        <TextInput value={this.state.date} onChangeText={(text)=>{
                this.setState({date:text})
              }} placeholder="Date Time" style={{borderBottomWidth:0,borderBottomColor:"grey",marginLeft:hp("1.5%"),fontSize:20,marginTop:hp("1%")}}/>
      <Button onPress={()=>{
          console.log(this.props.navigation.state.params.id)
          var data = new FormData();
          console.log('idd',this.props.navigation.state.params.id)
      data.append('media',
      {
         uri:this.state.avatarSource,
         name:'newFile.jpg',
         type:'image/jpg'
      });
      data.append('doctor',this.props.navigation.state.params.id
      )
      data.append('date',this.state.date)
      data.append('description',this.state.Description)
        axios.post('http://192.168.43.117:8000/book-appointment-pneumonia/',data,{headers:{
          'Content-Type':'image/jpg'
        },
        onUploadProgress:(progressEvent)=>{
          console.log(parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )))
          this.setState({percentage:parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ))})
        }
      }).then((response)=>{
            if(response.data)
            {
                this.setState({
                    completed:true
                })
            }
        }).catch((err)=>{
            console.log(err)
        })
          
      }} style={{marginTop:30}}>Upload</Button>
      <Text>{this.state.percentage+'%'}</Text>
      {this.state.completed?<Text sty>Complete!!</Text>:null}
      </View>
    );
  }
}

export default Pulmonologist;
