'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button
} from 'react-native';
const avatarImageSize = 200;
const apiUrl= "http://dev.hawksearch.net/sites/rbauction/?output=json&catalog=ci&unique_id=8535749"
const apiUrl2 = "https://www.rbauction.com/rba-api/search/results/advanced?rbasq=Y2l8Tj00Mjk0NzQ4MTcxKzAmTnRrPUVxdWlwbWVudC5lbiZOdHQ9MTk5OCtWT0xWTytBMzVDKzZ4NitBcnRpY3VsYXRlZCtEdW1wK1RydWNrJk50eD0mTmY9TWFudWZhY3R1cmVZZWFyfEJUV04gMTk5OCAxOTk4&offset=0&count=48&ccb=USD";
const apiUrl3 = "https://www.rbauction.com/rba-api/search/results/advanced?rbasq=Y2l8Tj00Mjk0NzQzODE4KzQyOTQ3NDgwNjkrMCs0Mjk0NzM3OTM4Jk50az1FcXVpcG1lbnQuZW4mTnR0PTIwMTIrQ0FURVJQSUxMQVIrRDdFK0xHUCtDcmF3bGVyK1RyYWN0b3ImTnR4PSZOZj1NYW51ZmFjdHVyZVllYXJ8QlRXTiAyMDEyIDIwMTI%3D&offset=0&count=48&ccb=USD"

var Config = require ('./__config');
var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    marginTop: 65,
    alignItems: 'stretch',
    backgroundColor:Config.colors.lightgrey,
    flex:1
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  },
  itemimage: {
      height: 36,
      flex: 4,
      fontSize: 18,
      borderRadius: 0,
      color: 'grey'
    },
    topcontainer:{
      alignItems: 'center',
      padding:10,
      backgroundColor:'#393939'
    },
    watchcontainer:{
      marginTop:10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom:10,
      backgroundColor:Config.colors.buttonColor
    },
    watchlistcontainer:{
      marginTop:10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom:10,
      backgroundColor:'#ffffff'
    },
    buttonsContainer:{
      marginTop:0,
      marginLeft: 10,
      marginRight: 10,
      marginBottom:3,
      backgroundColor:'#ffffff'
    },
    detailsContainer:{
      marginLeft:10
    },
    text:{
      marginTop:10
    },
    textbold:{
      marginTop:10,
      fontWeight:"bold"
    }
});

function watchlist(){

}

class EquipmentDetails extends Component {
 constructor(props){
   super(props);
   this.state = {
     itemName : "",
     location : "",
     lotNo : "",
     image : ""
   };
 }
geturl(){
  //return apiUrl3; //Dozer
  return apiUrl2; //Truck
}
 componentWillMount(){
   var that = this;
   var url = this.geturl()
   fetch(url)
     .then(function(response){
       response.json().then(function(data){
           that.setState({
             //itemName :data.Results[0].itemName,
            //  location: data.Results[0].Custom.auction_name,
            //  lotNo: data.Results[0].Custom.lot_no,
            //  image: data.Results[0].ImageUrl
            itemName :data.results[0].name,
            location : data.results[0].auction.name,
            lotNo : data.results[0].lot,
            image :  data.results[0].img
           });
         });
     })
     .catch(error =>
    alert(error));
 }


  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.topcontainer}>
          <Image style={[styles.itemimage], {width: avatarImageSize+150, height: avatarImageSize}} source={{uri:'https://www.rbauction.com'+this.state.image}} />
        </View>
        <View style = {styles.watchlistcontainer}>
          <Button
            title="Add to Watchlist"
            color= {Config.colors.buttonText}
            accessibilityLabel="Watchlist"
            onPress={watchlist}
          />
        </View>
        <View style = {styles.detailsContainer}>
          <Text style = {styles.textbold}>
            {this.state.itemName}
          </Text>
          <Text style = {styles.text}>
            {this.state.location}
          </Text>
          <Text style = {styles.text}>
            Lot # {this.state.lotNo}
          </Text>
          <Text style = {styles.text}>
            Estimate price        <Text style = {styles.textbold}>GetPro account</Text>
          </Text>
        </View>
        <View style = {styles.watchcontainer}>
          <Button
            title="Bid Now"
            color={Config.colors.buttonText}
            accessibilityLabel="Watchlist"
            onPress={watchlist}
          />
        </View>
        {/* <View style = {styles.detailsContainer}>
          <Text style = {styles.text}>
            More like this
          </Text>
        </View> */}
        <View style = {styles.buttonsContainer}>
          <Button
            title="See more details about this item"
            color= {Config.colors.buttonText}
            accessibilityLabel="see more"
            onPress={watchlist}
          />
        </View>
        <View style = {styles.buttonsContainer}>
          <Button
            title="More items like this"
            color= {Config.colors.buttonText}
            accessibilityLabel="more"
            onPress={watchlist}
          />
        </View>
      </View>
    );
  }
}

module.exports = EquipmentDetails;
