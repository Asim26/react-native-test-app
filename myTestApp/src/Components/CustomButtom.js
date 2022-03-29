//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

// create a component
const CustomButton = ({title, style, ...props}) => {
  return (
    <Pressable
      {...props}
      android_ripple={{color: '#fff'}}
      style={{...styles.defaultButton, ...style}}>
      <Text style={{color: 'white', fontSize: 18}}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: '#918FE1',
    // width: '100%',
    alignSelf: 'stretch',
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default CustomButton;
