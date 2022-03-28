//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      {children}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4F3',
    flex: 1,
  },
  circle1: {
    position: 'absolute',
    backgroundColor: 'rgba(145,143,225,0.44)',
    width: 200,
    height: 200,
    left: -13,
    top: -77,
    borderRadius: 100,
  },
  circle2: {
    position: 'absolute',
    backgroundColor: 'rgba(145,143,225,0.44)',
    width: 200,
    height: 200,
    left: -75,
    top: -23,
    borderRadius: 100,
  },
});

//make this component available to the app
export default Layout;
