import React from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('screen'); // Correct usage

const MyComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: width / 2, height: height / 2, backgroundColor: 'blue' }} />
    </SafeAreaView>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});