
// import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import React, { Component } from 'react';
import { View, Text,Dimensions,StyleSheet ,Image,TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Linking} from 'react-native'
import { Icon, Button } from 'native-base';
import ambulance from '../Assets/ambulance.png';
async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Example App',
        message: 'Example App access to your location ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('location permission denied');
      alert('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class AmbulanceEmergency extends Component {
  static navigationOptions = { headerShown: false }
  
  constructor(props) {
    
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
        {
          title: 'Appolo Ambulance',
          coordinates: {
            latitude: 20.334671,
            longitude: 85.802578,
          },
         
        },
        {
          title: 'Kims Ambulance',
          coordinates: {
            latitude: 20.334672,
            longitude: 85.822474,
          },
        
        },
        {
          title: 'Sum Ambulance',
          coordinates: {
            latitude: 20.334673,
            longitude: 85.8271,
          },
        
        },
        {
          title: 'Appolo Ambulance',
          coordinates: {
            latitude: 20.334671,
            longitude: 85.802774,
          },
         
        },
        {
          title: 'Kims Ambulance',
          coordinates: {
            latitude: 20.339771,
            longitude: 85.855449,
          },
         
        },
        {
          title: 'Sum Ambulance',
          coordinates: {
            latitude: 20.349771,
            longitude: 85.855449,
          },
         
        },
        {
          title: 'Plumber',
          coordinates: {
            latitude: 20.339756,
            longitude: 85.855449,
          },
          
        },
        {
          title: 'Plumber',
          coordinates: {
            latitude: 20.339754,
            longitude: 85.855449,
          },
          
        },
        {
          title: 'Electrician',
          coordinates: {
            latitude: 20.339771,
            longitude: 85.655449,
          },
        
        },
        {
          title: 'Mechanics',
          coordinates: {
            latitude: 20.339771,
            longitude: 85.155449,
          },
       
        },
        {
          title: 'Cleaner',
          coordinates: {
            latitude: 20.349771,
            longitude: 85.155449,
          },
        
        },
        {
          title: 'Anti Pest',
          coordinates: {
            latitude: 20.349751,
            longitude: 84.655449,
          },
          
        },
      ],
      bloodMarkers: [
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 20.314663,
            longitude: 85.802578,
          },
         
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 20.324225,
            longitude: 85.822474,
          },
        
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 22.334667,
            longitude: 85.8271,
          },
        
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 21.334660,
            longitude: 85.802774,
          },
         
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 20.539564,
            longitude: 85.855440,
          },
         
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 20.329769,
            longitude: 85.855446,
          },
         
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 20.339415,
            longitude: 85.855442,
          },
          
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 20.339354,
            longitude: 85.855444,
          },
          
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 21.339771,
            longitude: 85.655442,
          },
        
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 20.239771,
            longitude: 85.155449,
          },
       
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 20.349771,
            longitude: 85.155449,
          },
        
        },
        {
          title: 'BloodBank',
          coordinates: {
            latitude: 20.449751,
            longitude: 84.655449,
          },
          
        },
      ],
    };
  }
  async componentDidMount() {
    await requestLocationPermission();
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },

      error => console.log(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      },
    );
    console.log('position', this.state.region);
    this.watchID = Geolocation.watchPosition(position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      });
    });
  }
  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={()=>{
          Linking.openURL(`tel:${8249619206}`);
        }} style={{zIndex:1,position:'absolute',top:hp('85%'),width:wp('100%'),height:hp('10%'),backgroundColor:'red'}}>
        <View style={{backgroundColor:'red',alignItems:'center',justifyContent:'center',padding:15}}>
        <Text style={{alignSelf:'center',justifyContent:"center",color:"white",fontSize:20,}}>Emergency</Text>
        </View>
        </TouchableOpacity>
        
        <MapView
                  ref="map"
                  region={this.state.region}
                  //provider={this.props.provider}
                  style={styles.map}
                  // onPress={this.handlePress}
                  provider={PROVIDER_GOOGLE}
                  mapType="standard"
                  zoomEnabled={true}
                  pitchEnabled={true}
                  showsUserLocation={true}
                  followsUserLocation={true}
                  showsCompass={true}
                  showsBuildings={true}
                  showsTraffic={true}
                  showsIndoors={true}
                  //onRegionChange={region => this.setState({region})}
                >
                  {this.state.markers.map((marker, index) => {
                    return(
                      
                      <Marker
                        coordinate={{
                          latitude: marker.coordinates.latitude,
                          longitude: marker.coordinates.longitude,
                          
                          //longitude: marker.coordinates.longitude,
                        }}
                        title={marker.title}
                        key={index}
                      >
                        <Image source={ambulance}  style={{height:hp("9%"),width:hp("5%")}}/>
                        </Marker>
                     
                  );
                  })}
                  {this.state.bloodMarkers.map((marker, index) => {
                    return(
                      
                      <Marker
                        coordinate={{
                          latitude: marker.coordinates.latitude,
                          longitude: marker.coordinates.longitude,
                          //longitude: marker.coordinates.longitude,
                        }}
                        title={marker.title}
                        key={index}
                      
                      >
                        {/* <Icon name="hospital-o" type='FontAwesome'  style={{height:hp("9%"),width:hp("5%"),color:"#614bf9"}}/> */}
                        <Image source={require('../Assets/hospital.png')} style={{height:hp("9%"),width:hp("7%")}}/>
                        </Marker>
                     
                  );
                  })}
                  {/* <Marker
                    coordinate={{
                      latitude: this.state.region.latitude,
                      longitude: this.state.region.longitude,
                    }}
                    >
                  </Marker> */}
                </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#ffffff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonStyle: {
    marginTop: hp('2%'),
    height: hp('7%'),
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp('90%'),
    backgroundColor: '#000000',
  },
  avatar: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e6e6e6',
    width: hp('33%'),
    height: hp('43%'),
  },
  avatarContainerIcon: {
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
});


export default AmbulanceEmergency;
