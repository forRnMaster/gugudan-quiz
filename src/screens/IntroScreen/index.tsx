import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const IntroScreen = () => {
  return (
    <View style={IntroStyle.introstyle}>
      <Text>ss</Text>
    </View>
  );
};

const IntroStyle = StyleSheet.create({
  introstyle: {
    backgroundColor: 'green',
    flex: 1,
  },
});

export default IntroScreen;
