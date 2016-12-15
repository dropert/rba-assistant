import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

class ModalExample extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    // this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
