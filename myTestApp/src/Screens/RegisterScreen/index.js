//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Linking} from 'react-native';
import CustomButton from '../../Components/CustomButtom';
import Layout from '../../Components/Layout';

// create a component
const RegisterScreen = ({navigation}) => {
  const url = 'https://google.com';
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.label}>Welcome! Let’s get you started</Text>
        <Text style={styles.description}>
          Let DO Pro be your daily assistant to help you achieve more
        </Text>
        <TextInput style={styles.inputField} placeholder="Enter your name" />
        <TextInput style={styles.inputField} placeholder="Enter your email" />
        <TextInput
          style={styles.inputField}
          placeholder="Enter your password"
        />
        <TextInput style={styles.inputField} placeholder="Confirm Password" />
        <View style={{width: '70%', marginTop: 12}}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Login');
            }}
            title="Register"
          />
        </View>
        <Text style={styles.signInText}>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Login')}>Sign in</Text>
        </Text>
      </View>
    </Layout>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'rgba(6,6,6,0.85)',
    fontSize: 18,
    marginTop: 50,
  },
  description: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 13,
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    textAlign: 'center',
  },
  inputField: {
    backgroundColor: '#fff',
    marginTop: 10,
    width: '70%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
  },
  signInText: {
    marginTop: '3%',
  },
});

//make this component available to the app
export default RegisterScreen;
