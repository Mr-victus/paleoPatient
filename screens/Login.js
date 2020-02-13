import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';

class Login extends Component {
    static navigationOptions = { headerShown: false }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1,justifyContent:'center' }}>
                <View >
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

                            elevation: 9,
                           
                        }}>
                            <TextInput style={{ backgroundColor: 'white', color: 'black' }} label='email' value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
                            <TextInput style={{  backgroundColor: 'white',marginTop:10 }} label='password' selectionColor='#6EF31A' value={this.state.password} onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} />
                            <Text style={{ fontSize: 10, justifyContent: 'center', alignSelf: "center",marginTop:30 }}>or sign in with other social media</Text>
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
                                    marginTop:30
                                }}>
                                    <Text style={{ color: 'purple', alignSelf: 'center' }}>SIGN IN ></Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        {/* Buttons */}
                    </View>
                    <View>
                        {/* forgot pass and shits */}
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

export default Login;
