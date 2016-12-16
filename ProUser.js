'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  ScrollView
} from 'react-native';



const avatarImageSize = 140
var Config = require ('./__config');
var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container:{
    padding: 0,
    alignItems: 'stretch',
    flex:1,
    backgroundColor:Config.colors.lightgrey
  },
  topcontainer: {
    padding: 0,
    marginTop: 25,
    alignItems: 'stretch',
    height:140,
    flexDirection:'row'

  },
  midcontainer:{
    backgroundColor:Config.colors.buttonColor,
    marginTop:10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:10
  },
  bottomcontainer:{
    alignItems: 'stretch',
    height:400
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
    itemName:{
      marginTop: 1,
      marginLeft: 10,
      width:200
    },
    itemDetails:{
      marginTop: 5,
      marginLeft: 10,
      width:200,
      alignItems: 'flex-start',
    },
    rowStyle:{
        flexDirection:'row',
        paddingBottom:8,
        paddingLeft:20,
        paddingTop:8,

        borderColor: '#ffffff',
        borderBottomWidth:1
    },
    columnStyle:{
      marginTop:10,
       flexDirection: 'column'
    },
    leftColumn:{
      width: 260
    },
    textbold:{
      fontWeight:"bold",
      marginLeft: 10
    }
});


class ProUser extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.topcontainer}>
          <Image style={[styles.itemimage], {width: avatarImageSize+30, height: avatarImageSize}} source={require('./Resources/item.jpg')} />
          <View style = {styles.columnStyle}>
            <Text style={styles.itemName,styles.textbold}>
                2015 CATERPILLAR 745C
            </Text>
            <Text style={styles.itemDetails}>
              Lot # 390
            </Text>
            <Text style={styles.itemDetails}>
              Estimated Price
            </Text>
            <Text style={styles.itemDetails,styles.textbold}>
              USD 45000
            </Text>
            <Text style={styles.itemDetails}>
              Asking Price
            </Text>
            <Text style={styles.itemDetails, styles.textbold}>
              USD 15000
            </Text>
          </View>
      </View>
      <View style={styles.midcontainer}>
          <Button
            title="Bid Now"
            color="#ffffff"
            accessibilityLabel="Bid Now"
            onPress={bidNow}
          />
      </View>
      <View style={styles.bottomcontainer}>
          <ScrollView>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2003 CATERPILLAR EXCAVATOR</Text>
              <Text>Lot #354</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2015 JOHNDEER TRACTOR</Text>
              <Text>Lot #355</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2003 DUMP TRUCK</Text>
              <Text>Lot #356</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2013 CATERPILLAR EXCAVATOR SPECIAL EDITION</Text>
              <Text>Lot #357</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>UNUSED 2016 CATERPILLAR 938M Wheel Loader</Text>
              <Text>Lot #358</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2001 JOHN DEERE 624H</Text>
              <Text>Lot #359</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>UNUSED 2016 CATERPILLAR 950M Wheel Loader</Text>
              <Text>Lot #360</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2013 CATERPILLAR 908H2</Text>
              <Text>Lot #360A</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2015 VOLVO L90H Wheel Loader</Text>
              <Text>Lot #360B</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2016 VOLVO L90H Wheel Loader</Text>
              <Text>Lot #360C</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2011 KENWORTH T800 Dump Truck (Quad/A)</Text>
              <Text>Lot #361</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2010 KENWORTH T800 Dump Truck (Quad/A)</Text>
              <Text>Lot #362</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2009 KENWORTH T800 Dump Truck (Quad/A)</Text>
              <Text>Lot #363</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2009 KENWORTH T800 Dump Truck (Quad/A)</Text>
              <Text>Lot #364</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>1997 KENWORTH T800 Super</Text>
              <Text>Lot #365</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.leftColumn}>2003 CATERPILLAR EXCAVATOR</Text>
              <Text>Lot #365A</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

function bidNow(){

}
module.exports = ProUser;
