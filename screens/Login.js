import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import image from '../Assets/loginpage.png';
import fb from '../Assets/facebook.png';
import google from '../Assets/google.png';


class Login extends Component {
    static navigationOptions = { headerShown: false }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{flex:1 ,backgroundColor:"white"}}>
                
                <View style={{marginTop:hp("5%"),justifyContent:"center",alignItems:"center",
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
                            height:hp("5%"),

                            elevation: 9,}}>
                        <Text style={{fontSize:25,color:"#614BF9",fontStyle:"italic",}}>Paleo</Text>
                    </View>
                   
                <View style={{justifyContent:"center",alignItems:"center",marginTop:hp("10%")}} >
                    <View style={{flexDirection:"row",marginBottom:hp("2%")}}>
                <View style={{}} >
                        <Text style={{marginRight:hp("23%"),marginBottom:hp("2%"),color:"#614bf9",fontSize:20,fontStyle:"italic"}}>Sign In</Text>
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
                            height:hp("50%"),

                            elevation: 9,
                            width:hp("42%")

            
                           
                        }}>
                         
                <View style={{marginRight:hp("2%")}}>
                            <TextInput style={{ backgroundColor: 'white', color: 'black',width:wp("60%") }} label='Email' value={this.state.email} onChangeText={(text) => this.setState({ email: text })}  theme={{colors: {primary: '#614bf9'}}}/>
                            <TextInput style={{  backgroundColor: 'white',marginTop:10,width:wp("60%") }} label='Password' selectionColor='#6EF31A' value={this.state.password} onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} theme={{colors: {primary: '#614bf9'}}} />
                            <Text style={{color: '#614bf9',fontSize:10,marginTop:hp("1%")}}>
                Forgot Password?
              </Text>
                            <Text style={{ fontSize: 10,marginTop:30 }}>or sign in with other social media</Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:hp("1%")}}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SignUp")}} >
                                
                                    <Image source={fb} style={{width:wp("10%"),height:hp("5%")}}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                
                                    <Image source={google} style={{width:wp("10%"),height:hp("5%"),marginLeft:hp("1%")}}/>
                                </TouchableOpacity>
                                </View>
                          
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Home')
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
                                    <Text style={{ color: "#614BF9", alignSelf: 'center' }}>SIGN IN ></Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginLeft:hp("8%"),marginTop:hp("2%"),flex:1,flexDirection:"row"}}>
                    <View style={{flex:0.5}}>
                    <Text style={{fontSize:10}}>
                    By Signing In You Are Accepting Our 
                    </Text>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{fontSize:10,color:"#614BF9"}}>Terms And Conditions</Text>
                    </View>
                    </View>
                    <View style={{marginTop:hp("2%")}}>
                   
              <Text style={{alignSelf: 'center'}}>{'New to Paleo ?'}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SignUp');
                }}>
                <Text style={{color: '#614bf9', alignSelf: 'center'}}>
                  Register
                </Text>
              </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

export default Login;
