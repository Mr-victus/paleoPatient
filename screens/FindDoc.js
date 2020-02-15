import React, { Component } from 'react';
import { View, Text,StyleSheet ,ScrollView,Image,TextInput} from 'react-native';
import hospitalImage from '../Assets/hospital.jpg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchBar from 'react-native-search-bar';
import {
  Container,
  Content,
  List,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Left,
  ListItem,
  Right,
  TouchableOpacity,
} from 'native-base';
import ViewMoreText from 'react-native-view-more-text';
// import { TextInput } from 'react-native-paper';

class FindDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var items = [
      {
        image: hospitalImage,
        name: 'Apolo Hospital',
        location:
          'Near Tarini Mandir Saleshree Vihar Chandrashekharpur Bhubaneswar Odisha 752411',
        phone: 8917324901,
        title: 'model1',
      },
      {
        image: hospitalImage,
        name: 'Apolo Hospital',
        location:
          'Near Tarini Mandir Saleshree Vihar Chandrashekharpur Bhubaneswar Odisha 752411',
        phone: 8917324901,
        title: 'model2',
      },
      {
        image: hospitalImage,
        name: 'Apolo Hospital',
        location:
          'Near Tarini Mandir Saleshree Vihar Chandrashekharpur Bhubaneswar Odisha 752411',
        phone: 8917324901,
        title: 'model3',
      },
      {
        image: hospitalImage,
        name: 'Apolo Hospital',
        location:
          'Near Tarini Mandir Saleshree Vihar Chandrashekharpur Bhubaneswar Odisha 752411',
        phone: 8917324901,
        title: 'model4',
      },
      {
        image: hospitalImage,
        name: 'Apolo Hospital',
        location:
          'Near Tarini Mandir Saleshree Vihar Chandrashekharpur Bhubaneswar Odisha 752411',
        phone: 8917324901,
        title: 'model5',
      },
      {
        image: hospitalImage,
        name: 'Apolo Hospital',
        location:
          'Near Tarini Mandir Saleshree Vihar Chandrashekharpur Bhubaneswar Odisha 752411',
        phone: 8917324901,
        title: 'model5',
      },
      {
        image: hospitalImage,
        name: 'Apolo Hospital',
        location:
          'Near Tarini Mandir Saleshree Vihar Chandrashekharpur Bhubaneswar Odisha 752411',
        phone: 8917324901,
        title: 'model5',
      },
      {
        image: hospitalImage,
        name: 'Apolo Hospital',
        descripton:
          'Near Tarini Mandir Saleshree Vihar Chandrashekharpur Bhubaneswar Odisha 752411',
        phone: 8917324901,
        title: 'model5',
      },
      {
        image: hospitalImage,
        name: 'Apolo Hospital',
        descripton:
          'Near Tarini Mandir Saleshree Vihar Chandrashekharpur Bhubaneswar Odisha 752411',
        phone: 8917324901,
        title: 'model5',
      },
    ];
    return (
      <Container>
        
          <View >

          {/* <SearchBar
          searchBarStyle="prominent"
          barStyle="black"
          
         
  ref="searchBar"
  placeholder="Search"
  // onChangeText={}
  // onSearchButtonPress={}
  // onCancelButtonPress={}
/> */}
          </View>
          <View style={{flexDirection:"row",borderRadius:2,borderWidth:1,borderColor:"white",width:wp("90%"),marginLeft:hp("3%"), backgroundColor: 'white',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,
                       marginTop:hp("1%"),

                            elevation: 9,}}>
            <View style={{borderBottomWidth:0,borderBottomColor:"grey",marginBottom:hp("1%"),marginLeft:hp("2%")}} >
            <Icon name='search' type='FontAwesome' style={{fontSize:20,marginTop:hp("2.5%"),color:"grey"}} />
            </View>
            <View style={{width:wp("75%"),marginBottom:hp("1%"),justifyContent:"center"}}>
              <TextInput placeholder="Search" style={{borderBottomWidth:0,borderBottomColor:"grey",marginLeft:hp("1.5%"),fontSize:20,marginTop:hp("1%")}}/>
            </View>
          </View>
          <Content>
      <ScrollView style={styles.container}>
      <List
        dataArray={items}
        renderRow={item => (
          <ListItem noBorder style={{marginBottom: hp('-3%')}}>
            <Card style={{width: hp('45%')}}>
              <CardItem
                button
                // onPress={() => {
                //   this.props.navigation.navigate('DetailScreen');
                // }}
                >
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Left style={{flex: 0.5}}>
                    <View>
                      <Image
                        source={item.image}
                        style={{height: 100, width: 150}}
                      />
                    </View>
                  </Left>
                  <View style={{flex: 0.5}}>
                    <Text>{item.name}</Text>
                    <ViewMoreText
                      numberOfLines={1}
                      renderViewMore={this.renderViewMore}
                      renderViewLess={this.renderViewLess}>
                      <Text style={{fontSize: 12, color: 'grey'}}>
                        {item.location}
                      </Text>
                    </ViewMoreText>
                    <Text style={{fontSize: 10}}>{item.phone}</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 0.5,padding:1,borderWidth:1,borderStyle:"solid",borderColor:"black"}}>
                        <Text style={{fontSize: 10,marginLeft:hp("1%"),color:"grey"}}>Cardiologist</Text>
                      </View>
                      <View style={{flex: 0.5,padding:1,borderWidth:1,borderStyle:"solid",borderColor:"black",marginLeft:hp("1%")}}>
                        <Text style={{fontSize: 10,color:"grey"}}>
                          Book Now
                        </Text>
                      </View>
                      {/* <View style={{flex:0.3}}>
                    <Text>Cardiologist</Text>
                    </View> */}
                    </View>
                    <Right>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          marginLeft: hp('8%'),
                        }}>
                        <View style={{flex: 0.2}}>
                          <Icon type="FontAwesome" name="star" />
                        </View>
                        <View style={{flex: 0.3, marginLeft: hp('1%')}}>
                          <Text style={{color:"grey"}}>3.5</Text>
                        </View>
                      </View>
                    </Right>
                    {/* <View style={{flex:1,flexDirection:"row",marginLeft:hp("8%")}}>
                    <View style={{flex:0.2,marginLeft:hp("1%")}}>
                    <Icon type="FontAwesome" name="star" />
                    </View>
                    <View style={{flex:0.3,marginLeft:hp("2%")}}>
                    <Text>3.5</Text>
                    </View>
                    </View> */}
                  </View>
                </View>
              </CardItem>
            </Card>
          </ListItem>
        )}
      />
    </ScrollView>
    </Content>
    </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 5,

    backgroundColor: '#FFF',
  },
  itemSubHeader: {
    fontSize: 12,
    width: wp('90%'),
  },
  boxStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});

export default FindDoc;
