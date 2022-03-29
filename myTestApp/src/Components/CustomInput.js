//import liraries
import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

// create a component
const CustomInput = props => {
  console.log('props', props);
  return (
    <>
      <View style={styles.textInputContainer}>
        <TextInput {...props} />
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  textInputContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginHorizontal: 25,
    // marginTop: 50,
    paddingLeft: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
  },
});

//make this component available to the app
export default CustomInput;
