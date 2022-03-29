//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, Pressable} from 'react-native';
import CustomButton from '../../Components/CustomButtom';
import Layout from '../../Components/Layout';

// create a component
const SplashScreen = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/Image.png')}
        />
        <Text style={styles.label}>Get things done with DO Pro</Text>
        <Text style={styles.description}>
          Do Pro is a small personal assistance that helps millions of people
          all over the world to boost their productivity
        </Text>

        <View
          style={{
            paddingLeft: 25,
            paddingRight: 25,
            width: '100%',
            marginTop: 10,
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 20,
          }}>
          <CustomButton
            onPress={() => {
              console.log('pressed');
              navigation.navigate('Register');
            }}
            title="Get Started"
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    marginTop: 200,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    color: 'rgba(6,6,6,0.85)',
    fontSize: 18,
    marginTop: 40,
  },
  description: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 13,
    marginTop: 42,
    marginLeft: 60,
    marginRight: 30,
    textAlign: 'center',
  },
});

//make this component available to the app
export default SplashScreen;
