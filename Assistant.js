'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Image,
  Text,
  TextInput,
  Animated,
  View,
  ScrollView
} = ReactNative;

var TouchableWithoutFeedback  = require('TouchableWithoutFeedback');
var TouchableHighlight  = require('TouchableHighlight');
var EmptyPage = require ('./EmptyPage');
var Config = require ('./__config');
var ScrollViewTest = require ('./ScrollViewTest');

const avatarImageSize = 40
const avatorMarginRight = 5

class Assistant extends React.Component {

  state = {
    showBorder: true,
    counter: 0,
    messages: [
      {
        source: 'bot',
        type: 'message',
        content: 'Here are some things I can help with',
        target: false
      },
      {
        source: 'bot',
        type: 'link',
        content: 'Welcome to Ritchie Bros. This is the Registration desk ...',
        target: 'show-bid'
      }
    ]
  };

    _handlePress (target) {
      let component;

      switch(target) {

        // case 'show-dozer-preview':
        //   this.setState({
        //     messages: this.state.messages.concat([{
        //       source: 'bot',
        //       type: 'component',
        //       content: <ScrollViewTest/>,
        //       target: false
        //     },
        //     {
        //       source: 'bot',
        //       type: 'link',
        //       content: 'Show me some dozers',
        //       target: 'show-dozer-preview'
        //     }
        //   ])
        // })
        // break;

        default:
          component = EmptyPage
          break;
      }

      if( component !== undefined) {
        this.props.navigator.push({
          title: 'Registration Desk',
          component: component,
          // passProps: {listings: 'rober'}
        });
      }
   }

  render() {

    /*
    <TouchableHighlight style={styles.button}
        underlayColor='#99d9f4'>
      <Text
        style={styles.buttonText}
        onPress={this._handlePress.bind(this)}>
        Go
      </Text>
    </TouchableHighlight>
    */

    let self = this
    this._handlePress = this._handlePress.bind(this)

    return (
    <View style={[styles.container]}>

      <ScrollView>

      {this.state.messages.map(function(message, index){

        let onPressFunction = (message.target === '' || !message.target)
          ? function(){}
          :  self._handlePress.bind(self, message.target)

        // message with chat icon
        if(message.type === 'message') {
          return (
            <View key={index} style={[styles2.flowRight, styles.bubble]}>
              <TouchableWithoutFeedback onPress={() => {
                  let counter = (self.state.counter + 1)

                  switch(self.state.counter) {

                    case 2:
                      self.setState({
                        counter,
                        messages: self.state.messages.concat([{
                          source: 'bot',
                          type: 'link',
                          content: 'How to bid',
                          target: false
                        }])
                      })
                      break;

                      case 4:
                        self.setState({
                          counter,
                          messages: self.state.messages.concat([
                            {
                              source: 'bot',
                              type: 'component',
                              content: <ScrollViewTest/>,
                              target: false
                            },
                            {
                              source: 'bot',
                              type: 'link',
                              content: 'Look at more dozers from this auction',
                              target: false
                            }
                        ])
                        })
                        break;

                    default:
                      self.setState({
                        counter
                      })
                  }

              }}>
                <Image style={[styles2.searchInput], {width: avatarImageSize, height: avatarImageSize}} source={require('./Resources/bot@2x.png')} />
              </TouchableWithoutFeedback>


              <View style={styles2.buttonParent}>
                <Text style={[styles.bubbleContent,styles2.button]}>
                  {message.content}
                </Text>
              </View>

            </View>
          )
        }

        // message without chat icon
        if(message.type === 'link') {
          return (
            <View key={index}>
              <TouchableWithoutFeedback onPress={onPressFunction}>
                  <View style={[styles.buttonParent, styles.bubble, styles.replaceImage]}>
                    <Text style={[styles.link, styles.bubbleContent]}>
                      {message.content}
                    </Text>
                  </View>
              </TouchableWithoutFeedback>
            </View>
          )
        }

        // message without chat icon
        if(message.type === 'component') {
          return (
            <View key={index}>
              {message.content}
            </View>
          )
        }

      })}

      </ScrollView>

      {/* Question input field */}
      <View style={styles.flowRight}>
        <TextInput
          style={styles.searchInput}
          placeholder='Ask me something ...'/>
      </View>
      {/* END Question input field */}
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
buttonParent: {
  backgroundColor: Config.colors.lightblue,
  borderColor: Config.colors.lightblue,
  borderRadius: 5,
  borderWidth: 3,
  marginLeft: 10
},
button: {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: Config.colors.lightblue,
  color: 'white',
  borderWidth: 0,
  margin: avatorMarginRight,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  padding: 20,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderRadius: 8,
}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 120
    // alignItems: 'center'
  },
  replaceImage: {
    marginLeft: 60
  },
  link: {
    color: Config.colors.lightblue,
    textDecorationColor: Config.colors.lightblue,
    textDecorationLine: 'underline',
    // textAlign: 'center',
    lineHeight: 20
  },
  headline: {
    fontSize: 40,
    textAlign: 'center'
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
    backgroundColor: Config.colors.lightgrey,
    padding: 5
  },
  buttonParent: {
    backgroundColor: Config.colors.lightgrey,
    borderColor: Config.colors.lightgrey,
    borderRadius: 5,
    borderWidth: 3
  },
  flowRight: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 65,
      flexDirection:'row',
      height:40,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: Config.colors.lightgrey,
      margin: 20
  },
  buttonText: {
    fontSize: 18,
    color: 'grey',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 10,
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

module.exports = Assistant;
