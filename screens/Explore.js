import React, { Component } from "react";
import Feather from 'react-native-vector-icons/Feather';
import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import WhatCard from '../components/WhatCard';

class Explore extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <View style={styles.input}>
            <Feather style={{paddingRight: 10}} color="#50555ac2" name="search" size={16} />
            <TextInput style={{flex: 1, fontSize: 14, fontWeight: '600', letterSpacing: 3}} placeholderTextColor="#50555ac2" placeholder='Try "Nigeria"'/>
          </View>
        </View>
        <ScrollView scrollEventThrottle={15}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.headText}>What can we help you find?</Text>
            <ScrollView style={{marginHorizontal: -20, marginBottom: 20}} showsHorizontalScrollIndicator={false} horizontal={true}>
              <WhatCard first={true} source={require('../assets/bag.jpeg')} title="Home" />
              <WhatCard source={require('../assets/girl.jpeg')} title="Fashion" />
              <WhatCard source={require('../assets/jumpin.jpeg')} title="Explore" />
              <WhatCard source={require('../assets/jump.jpeg')} title="Travel" />
            </ScrollView>
            <Text style={styles.headText}>Introducing Airbnb Plus</Text>
            <Text style={{fontSize: 15, color: "#000000c2",}}>A selection of homes verified for quality and design</Text>
            <ImageBackground style={{width: '100%', height: 250, flex: 2, resizeMode: 'cover', borderRadius: 3, overflow: 'hidden', marginTop: 10, marginBottom: 20, alignItems: 'center', position: 'relative'}} source={require('../assets/jump.jpeg')} >
              <View style={{backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 3, position: 'absolute', bottom: 50}}>
                <Text style={{color: "#000000c2", fontSize: 11, fontWeight: 'bold', letterSpacing: 2.5}}>EXPLORE HOMES ></Text>
              </View>
            </ImageBackground>
            <Text style={styles.headText}>Homes around the world</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    justifyContent: "center",
    padding: 20
  },
  input: {
    flexDirection: 'row',
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#50555ac2',
    shadowOpacity: 0.25,
    elevation: 5,
    borderRadius: 2,
    backgroundColor: "white",
    height: 50,
  },
  headText: {
    fontSize: 22,
    fontWeight: '700',
    color: "#000000c2",
    marginVertical: 10,
  }
});