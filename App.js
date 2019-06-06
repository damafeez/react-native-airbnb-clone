/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';
import Saved from './screens/Saved';
import Trips from './screens/Trips';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: "EXPLORE",
      tabBarIcon: ({tintColor}) => (<Feather name="search" color={tintColor} size={22} />)
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: "SAVED",
      tabBarIcon: ({tintColor}) => (<Feather name="heart" color={tintColor} size={22} />)
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: "TRIPS",
      tabBarIcon: ({tintColor}) => (<FontAwesome name="tripadvisor" color={tintColor} size={22} />)
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: "INBOX",
      tabBarIcon: ({tintColor}) => (<Feather name="message-square" color={tintColor} size={22} />)
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "PROFILE",
      tabBarIcon: ({tintColor}) => (<Feather name="user" color={tintColor} size={22} />)
    }
  },
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
    }
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
