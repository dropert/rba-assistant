'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

var Config = require ('./__config');

class EmptyPage extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.headline}>This is our Registration desk</Text>

          <Text style={styles.headline2}>Registration and deposits</Text>

          <Text style={{marginBottom: 30}}>Registration to bid is free. You may be required to place a refundable bid deposit. Please be aware that you must present photo identification when you register at the auction site (e.g. identity card, passport or driver's license).
          Every auction is unreserved</Text>

          <Text style={{marginBottom: 30}}>Registration to bid is free. You may be required to place a refundable bid deposit. Please be aware that you must present photo identification when you register at the auction site (e.g. identity card, passport or driver's license).
          Every auction is unreserved</Text>

          <Text>Every item is sold to the highest bidder on auction day, with no minimum bids or reserve prices. Owners are forbidden by contract from bidding on items they are selling. Bids are irrevocable, and all sales are final. If you're the highest bidder when the auctioneer announces that an item has been sold, you're the new owner of that item.</Text>


      </View>
    );
  }
}

var styles = StyleSheet.create({
  headline: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: Config.colors.lightblue
  },
  headline2: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 20,
  },
  container: {
    padding: 20,
    marginTop: 65,
    alignItems: 'stretch',
    flex:1
  },
});

module.exports = EmptyPage;
