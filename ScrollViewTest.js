'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} = ReactNative;

var Config = require ('./__config');

class Thumb extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
//  <Image style={styles.img} source={{uri:this.props.uri}} />

    return (
      <View style={styles.button}>
        <Image style={styles.img} source={{uri:this.props.uri}} />
      </View>
    );
  }
}

var THUMBS = [
  'https://www.rbauction.com/digital_media/2016/2016146/400x300/dc/dc908e2e-32df-49aa-bfde-f5c155d2a239.jpg',
  'https://www.rbauction.com/digital_media/2016/2016195/400x300/84/84cd0c48-d7f4-4156-a6e7-9bf027a2742f.jpg',
  'https://www.rbauction.com/digital_media/2016/2016215/400x300/5c/5c185a2e-a01a-4bd1-b7ba-17ea1825a08c.jpg'
];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;


class ScrollViewTest extends React.Component {

  render() {
    var _scrollView: ScrollView;
    return (
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: 10}}>Top recommendations</Text>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          horizontal={true}
          style={[styles.scrollView, styles.horizontalScrollView]}>
          {THUMBS.map(createThumbRow)}
        </ScrollView>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Config.colors.lightgrey,
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 3,
    padding: 0,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 120,
    height: 64,
  },
  img: {
    width: 200,
    height: 110,
  }
});

module.exports = ScrollViewTest
