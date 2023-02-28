import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyPageScreen = () => {
  return (
    <View style={MyPageStyle.myPageStyle}>
      <Text>ss</Text>
    </View>
  );
};

const MyPageStyle = StyleSheet.create({
  myPageStyle: {
    backgroundColor: 'yellow',
    flex: 1,
  },
});

export default MyPageScreen;
