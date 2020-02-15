import React, { Component } from 'react';
import { View, Text,Dimensions,StyleSheet ,Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import MapView, {PROVIDER_GOOGLE, Marker} from '../Components/react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Icon } from 'native-base';
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
          title: 'carpenter',
          coordinates: {
            latitude: 20.334671,
            longitude: 85.802578,
          },
         
        },
        {
          title: 'carpenter',
          coordinates: {
            latitude: 20.334672,
            longitude: 85.822474,
          },
        
        },
        {
          title: 'carpenter',
          coordinates: {
            latitude: 20.334673,
            longitude: 85.8271,
          },
        
        },
        {
          title: 'carpenter',
          coordinates: {
            latitude: 20.334671,
            longitude: 85.802774,
          },
         
        },
        {
          title: 'Plumber',
          coordinates: {
            latitude: 20.339771,
            longitude: 85.855449,
          },
         
        },
        {
          title: 'Plumber',
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

                        key={index}
                      >
                        <Image source={ambulance}  style={{height:hp("9%"),width:hp("5%")}}/>
                        </Marker>
                     
                  );
                  })}
                  <Marker
                    coordinate={{
                      latitude: this.state.region.latitude,
                      longitude: this.state.region.longitude,
                    }}
                    title={'Trident'}
                    description={'college'}>
                    <Text>{`Latitude ${this.state.region.latitude}
          Longitude ${this.state.region.longitude}`}</Text>
                  </Marker>
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
