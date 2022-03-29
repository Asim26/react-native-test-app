//import liraries
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import CustomButton from '../../Components/CustomButtom';
import Layout from '../../Components/Layout';

// create a component
const LoginScreen = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.label}>Welcome back!</Text>
        <Image
          style={styles.image}
          source={require('../../assets/Image.png')}
        />
        <TextInput style={styles.inputField} placeholder="Enter your email" />
        <TextInput
          style={styles.inputField}
          placeholder="Enter your password"
        />
        <View style={{width: '70%', marginTop: '2.5%'}}>
          <CustomButton
            title="Login"
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          />
        </View>
        <Text style={styles.signUpText}>
          Don`t have an account?{' '}
          <Text onPress={() => navigation.navigate('Register')}>Sign Up</Text>
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
    marginTop: -90,
  },
  inputField: {
    backgroundColor: '#fff',
    marginTop: 15,
    width: '70%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
  },
  signUpText: {
    marginTop: '3%',
  },
});

//make this component available to the app
export default LoginScreen;
