import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import React from 'react';
import LearnFlexbox from '@/components/learn_flexbox/LearnFlexbox';

export default function HomeScreen() {
  return (
      <View style={style.container}> 
        <View>
          <Text style={style.text}>Home</Text>
        </View>
        <View></View>
        <View></View>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});