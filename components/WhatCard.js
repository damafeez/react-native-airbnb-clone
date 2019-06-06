import React, { Component } from "react";
import { 
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

class WhatCard extends Component {
  render() {
    return (
      <View style={{width: 110, height: 100,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#50555ac2',
        shadowOpacity: 0.25,
        elevation: 7,
        borderRadius: 2,
        borderColor: '#000000c2',
        borderWidth: 0.1,
        backgroundColor: "white",
        marginLeft: this.props.first ? 20 : 0}}>
          <Image style={{width: '100%', flex: 2, resizeMode: 'cover'}} source={this.props.source} />
          <Text style={{flex: 1.2, padding: 5, color: '#000000c2', fontWeight: 'bold'}}>{this.props.title}</Text>
        </View>
    );
  }
}
export default WhatCard;
