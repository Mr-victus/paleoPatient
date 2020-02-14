import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import image from '../Assets/loginpage.png';
import fb from '../Assets/facebook.png';
import google from '../Assets/google.png';
import {Icon} from 'native-base';

class SignUp extends Component {
    static navigationOptions = { headerShown: false }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{flex:1 ,backgroundColor:"white"}}>
                
                <View style={{marginTop:hp("3%"),justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:25,color:"#614BF9",fontStyle:"italic",}}>Paleo Patient</Text>
                    </View>
                   
                <View style={{justifyContent:"center",alignItems:"center",marginTop:hp("5%")}} >
                    <View style={{flexDirection:"row",marginBottom:hp("2%")}}>
                <View style={{}} >
                        <Text style={{marginRight:hp("23%"),marginBottom:hp("2%"),color:"#614bf9",fontSize:20,fontStyle:"italic"}}>Sign Up</Text>
                    </View>
                    <View style={{height:hp("6.5%"),width:wp("19%")}} >
                        <Image source={image} style={{height:hp("5.5%"),width:wp("14%")}}/>
                    </View>
                    </View>
                    
                    <View style={{ alignContent: 'space-around', justifyContent: 'center' }} >
                        {/* for treetor logo */}
                        {/* <Image style={{alignSelf:'center',marginBottom:60}} source={require('../assets/treetorlogo.png')}/> */}
                        <View style={{
                            alignContent:'space-between',
                            borderRadius:20,
                            marginHorizontal:50,
                            paddingHorizontal:50,
                            paddingVertical:50,
                            backgroundColor: 'white',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,
                            height:hp("60%"),

                            elevation: 9,
                            width:hp("42%")

            
                           
                        }}>
                         
                <View>
                <TextInput style={{ backgroundColor: 'white', color: 'black' }} label='Full Name' value={this.state.email} onChangeText={(text) => this.setState({ email: text })}  theme={{colors: {primary: '#614bf9'}}}/>
                            <TextInput style={{ backgroundColor: 'white', color: 'black' }} label='Email' value={this.state.email} onChangeText={(text) => this.setState({ email: text })}  theme={{colors: {primary: '#614bf9'}}}/>
                            <TextInput style={{  backgroundColor: 'white',marginTop:10 }} label='Password' selectionColor='#6EF31A' value={this.state.password} onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} theme={{colors: {primary: '#614bf9'}}} />
                            <TextInput style={{  backgroundColor: 'white',marginTop:10 }} label='Conform Password' selectionColor='#6EF31A' value={this.state.password} onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} theme={{colors: {primary: '#614bf9'}}} />
                           
                            </View>
                          
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Login')
                            }}>
                                <View style={{
                                    backgroundColor: 'white', borderRadius: 30, height: 20, width: 80, justifyContent: 'center', shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 9,
                                    },
                                    shadowOpacity: 0.50,
                                    shadowRadius: 12.35,

                                    elevation: 19,
                                    marginTop:30,
                                    marginLeft:hp("7%"),
                                    height:hp("5%"),
                                    width:wp("30%"),
                                }}>
                                    <Text style={{ color: "#614BF9", alignSelf: 'center' }}>SIGN UP ></Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginRight:hp("19%")}}>
                    <Text style={{ fontSize: 10,marginTop:30 }}>or sign in with other social media</Text>
                    <View style={{flexDirection:"row",marginTop:hp("1%")}}>
                  
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SignUP")}} >
                                
                                    <Image source={fb} style={{width:wp("10%"),height:hp("5%")}}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                
                                    <Image source={google} style={{width:wp("10%"),height:hp("5%"),marginLeft:hp("1%")}}/>
                                </TouchableOpacity>
                                </View>
                        {/* forgot pass and shits */}
                        </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default SignUp;
