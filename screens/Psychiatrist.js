//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Button,TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import {Radio} from 'native-base'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';

// create a component
class Psychiatrist extends Component {
    constructor(props){
        super(props);{
            this.state={
                checked1:false,
                checked2:false,
                checked3:false,
                checked4:false,
                checked5:false,
                checked6:false,
                checked7:false,
            }
        }
    }
    render() {
        return (
            <View style={{margin:20}}>
            <View style={{marginTop:10}} >
                <View>
                <Text style={{fontSize:20}}>Do you feel that in the recent past days you get more angry than you used to?</Text>
                </View>
                <View  style={{marginLeft:hp("2%"),fontSize:20,marginTop:10,flexDirection:'row'}}>
                    <Text>Yes </Text>
                <Radio
                                      
                                      selectedColor={"#614bf9"}
                                      selected={
                                        this.state.checked1
                                      }
                                      onPress={() =>
                                        this.setState({
                                          checked1:!this.state.checked1
                                        })}
                                    />
            </View>
            
            </View>
            <View style={{marginTop:10}}>
                <View>
                <Text style={{fontSize:20}}>Do you feel tired very often?</Text>
                </View>
                <View style={{marginLeft:hp("2%"),marginTop:10,flexDirection:'row'}}>
                    <Text>Yes </Text>
                <Radio
                                      
                                      selectedColor={"#614bf9"}
                                      selected={
                                        this.state.checked2
                                      }
                                      onPress={() =>
                                        this.setState({
                                          checked2:!this.state.checked2
                                        })}
                                    />
            </View>
            
            </View>
            <View >
                <View>
                <Text style={{fontSize:20}}>Are you anxious about something happeing throught the day?</Text>
                </View>
                <View style={{marginLeft:hp("2%"),marginTop:10,flexDirection:'row'}}>
                    <Text>Yes </Text>
                <Radio
                                      
                                      selectedColor={"#614bf9"}
                                      selected={
                                        this.state.checked3
                                      }
                                      onPress={() =>
                                        this.setState({
                                          checked3:!this.state.checked3
                                        })}
                                    />
            </View>
            
            </View>
            <View >
                <View>
                <Text style={{fontSize:20}}>Do you feel tired and sleepy all day?</Text>
                </View>
                <View style={{marginLeft:hp("2%"),marginTop:10,flexDirection:'row'}}>
                    <Text>Yes </Text>
                <Radio
                                      
                                      selectedColor={"#614bf9"}
                                      selected={
                                        this.state.checked4
                                      }
                                      onPress={() =>
                                        this.setState({
                                          checked4:!this.state.checked4
                                        })}
                                    />
            </View>
            
            </View>
            <View >
                <View>
                <Text style={{fontSize:20}}>Do you feel sad or low often?</Text>
                </View>
                <View style={{marginLeft:hp("2%"),marginTop:10,flexDirection:'row'}}>
                    <Text>Yes </Text>
                <Radio
                                      
                                      selectedColor={"#614bf9"}
                                      selected={
                                        this.state.checked5
                                      }
                                      onPress={() =>
                                        this.setState({
                                          checked5:!this.state.checked5
                                        })}
                                    />
            </View>
            </View>
            <View >
                <View>
                <Text style={{fontSize:20}}>Do you see or hear things that other people don't?</Text>
                </View>
                <View style={{marginLeft:hp("2%"),marginTop:10,flexDirection:'row'}}>
                    <Text>Yes </Text>
                <Radio
                                      
                                      selectedColor={"#614bf9"}
                                      selected={
                                        this.state.checked6
                                      }
                                      onPress={() =>
                                        this.setState({
                                          checked6:!this.state.checked6
                                        })}
                                    />
            </View>
            </View>

            <View >
                <View style={{fontSize:20}}>
                <Text style={{fontSize:20}}>Are you forgetful or people around you claim that you are forgetful?</Text>
                </View>
                <View style={{marginLeft:hp("2%"),marginTop:10,flexDirection:'row'}}>
                    <Text>Yes </Text>
                <Radio
                                      
                                      selectedColor={"#614bf9"}
                                      selected={
                                        this.state.checked7
                                      }
                                      onPress={() =>
                                        this.setState({
                                          checked7:!this.state.checked7
                                        })}
                                    />
            </View>
            
            </View>

            <TouchableOpacity onPress={()=>{
                console.log('dsfdsf')
                var arr=[this.state.checked1?1:0,this.state.checked2?1:0,this.state.checked3?1:0,this.state.checked4?1:0,this.state.checked5?1:0,this.state.checked6?1:0,this.state.checked7?1:0]
                axios.get('http://192.168.43.117:8000/book-appointments-psychiatrist?questions=['+arr+']&doctor='+this.props.navigation.state.params.id).then((response)=>{
                    console.log(response.data)
                }).catch(()=>{

                })
            }}>
            <View style={{backgroundColor:'red',height:50,marginTop:20}}>
            <Text style={{color:'white',justifyContent:'center',padding:10,alignSelf:'center',fontSize:20}}>SUBMIT</Text>
            </View>
            </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Psychiatrist;
