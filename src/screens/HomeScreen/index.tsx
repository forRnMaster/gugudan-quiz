import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={HomeStyle.homestyle}>
      <Text>ss</Text>
    </View>
  );
};

const HomeStyle = StyleSheet.create({
  homestyle: {
    backgroundColor: 'purple',
    flex: 1,
  },
});

export default HomeScreen;
