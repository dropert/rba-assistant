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
    backgroundColor:Config.colors.lightgrey
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
      marginTop:10
    },
    watchcontainer:{
      marginTop:10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom:10,
      backgroundColor:Config.colors.buttonColor
    },
    detailsContainer:{
      marginLeft:10
    },
    text:{
      marginTop:10
    }
});

function watchlist(){

}

class EquipmentDetails extends Component {
 constructor(props){
   super(props);
   this.state ={

   }
 }

 componentWillMount(){
   alert(apiUrl);
   fetch(apiUrl)
     .then(response => response.json())
     .then(json => this._handleResponse(json.response))
     .catch(error =>
    alert(error));
 }

 _handleResponse(response) {
   alert("tes");
 }
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.topcontainer}>
          <Image style={[styles.itemimage], {width: avatarImageSize+50, height: avatarImageSize}} source={require('./Resources/item.jpg')} />
        </View>
        <View style = {styles.watchcontainer}>
          <Button
            title="Add to Watchlist"
            color="#345298"
            accessibilityLabel="Watchlist"
            onPress={watchlist}
          />
        </View>
        <View style = {styles.detailsContainer}>
          <Text style = {styles.text}>
            Name
          </Text>
          <Text style = {styles.text}>
            Location
          </Text>
          <Text style = {styles.text}>
            Lot #
          </Text>
          <Text style = {styles.text}>
            Estimate price      GetPro account
          </Text>
        </View>
        <View style = {styles.watchcontainer}>
          <Button
            title="Bid Now"
            color="#345298"
            accessibilityLabel="Watchlist"
            onPress={watchlist}
          />
        </View>
        <View style = {styles.detailsContainer}>
          <Text style = {styles.text}>
            More like this
          </Text>
        </View>
      </View>
    );
  }
}

module.exports = EquipmentDetails;
