import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  SafeAreaView
} from 'react-native';
import { WebBrowser, MapView } from 'expo';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = { text: '' };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              zIndex: 1000,
              position: 'absolute',
              top: 60,
              width: 337,
              paddingVertical: 20,
              borderWidth: 1,
              backgroundColor: 'rgba(100,100,100, .5)',
              borderColor: 'rgba(100,100,100, .4)',
              borderRadius: 10
            }}
          >
            <TextInput
              style={{
                marginHorizontal: 10,
                height: 40,
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor: 'rgba(255,255,255, 1)',
                paddingLeft: 35
              }}
              returnKeyType="search"
              placeholder="Search Here"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <View style={{ position: 'absolute', left: 15, top: 25 }}>
              <TouchableOpacity
                style={{
                  shadowOffset: { width: 10, height: 10 },
                  shadowColor: 'transparent',
                  shadowOpacity: 1.0
                }}
              >
                <Feather name="search" size={30} color="rgba(0,0,0, .5)" />
              </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', right: 15, top: 25 }}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    text: ''
                  })
                }
                style={{
                  shadowOffset: { width: 10, height: 10 },
                  shadowColor: 'transparent',
                  shadowOpacity: 1.0
                }}
              >
                <MaterialIcons name="clear" size={30} color="rgba(0,0,0, .5)" />
              </TouchableOpacity>
            </View>
          </View>
          {/*
        
        
         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView> 

        <View style={styles.tabBarInfoContainer}>
           <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View> 
        </View>*/}
          <MapView
            style={{ flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  _handleLearnMorePress = () => {
    //WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    // WebBrowser.openBrowserAsync(
    //   'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    // );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },

  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});
