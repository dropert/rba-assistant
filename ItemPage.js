'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class ItemPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Type: {this.props.type}</Text>
      </View>
    );
  }
}

ItemPage.defaultProps = {
  type: 'dummy'
}

var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
})

module.exports = ItemPage;
