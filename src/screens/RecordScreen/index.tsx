import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RecordScreen = () => {
  return (
    <View style={RecordStyle.recordStyle}>
      <Text>ss</Text>
    </View>
  );
};

const RecordStyle = StyleSheet.create({
  recordStyle: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default RecordScreen;
