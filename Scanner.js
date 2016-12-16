'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput
} from 'react-native';


var Config = require ('./__config');
var TouchableWithoutFeedback  = require('TouchableWithoutFeedback');
var TouchableHighlight  = require('TouchableHighlight');
var EmptyPage = require ('./EmptyPage');
var EquipmentDetails = require ('./EquipmentDetails');

const avatarImageSize = 300

const bgColor = '#2a2826'

class Scanner extends Component {

  onSearchPressed(equipment) {
    this.props.navigator.push({
      title: 'Item Detail Page',
      component: EquipmentDetails,
      passProps: {type: equipment}
    });
  }

  render() {

    return (
      <View style={[styles.container]}>

        <View style={styles.container}>
         <Text style={[styles.headline]}>Scanning equipment</Text>
         <Image source={require('./Resources/spinner/spinner2.gif')} style={[{width: avatarImageSize, height: avatarImageSize}]} />
       </View>

       <View style={styles.flowRight}>
         <TouchableHighlight style={styles.button}
             underlayColor={bgColor} onPress={this.onSearchPressed.bind(this, 'dozer')}>
           <View><Text style={styles.buttonText}></Text></View>
         </TouchableHighlight>
           <TouchableHighlight underlayColor={bgColor} style={styles.button} onPress={this.onSearchPressed.bind(this, 'truck')}>
             <View><Text style={styles.buttonText}></Text></View>
           </TouchableHighlight>
       </View>
      </View>
    );
  }
}

var styles2 = StyleSheet.create({
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
  flex: 1,
  flexDirection: 'row',
  backgroundColor: Config.colors.lightblue,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  padding: 20,
  flex: 4,
  fontSize: 18,
}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    marginTop: 0,
    alignItems: 'center',
    backgroundColor: bgColor
  },
  replaceImage: {
  },
  link: {
    color: Config.colors.lightblue,
    textDecorationColor: Config.colors.lightblue,
    textDecorationLine: 'underline',
    // textAlign: 'center',
    lineHeight: 20
  },
  headline: {
    fontSize: 30,
    padding: 20,
    fontFamily: Config.fonts.light,
    textAlign: 'center',
    color: Config.colors.lightblue
  },
  paddingBottom: {
    paddingBottom: 20
  },
  bubble : {
    margin: 10,
    borderRadius: 5,
    maxWidth: 300,
  },
  bubbleContent :  {
    padding: 10,
    backgroundColor: Config.colors.lightgrey,
    borderRadius: 5,
  },
  flowRight: {
    position: 'absolute',
      left: 0,
      right: 0,
      bottom: 315,
      flexDirection:'row',
      height:40,
      borderWidth: 0,
      margin: 0
  },
  buttonText: {
    fontSize: 18,
    color: 'grey',
    alignSelf: 'center'
  },
  button: {
    height: 300,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0, // imporant
    borderRadius: 0,
    marginBottom: 0,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    flex: 4,
    fontSize: 18,
    borderRadius: 0,
    color: 'grey'
  },
  image: {
    width: 217,
    height: 138
  }
});

module.exports = Scanner;
