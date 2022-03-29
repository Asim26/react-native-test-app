//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Layout from '../../Components/Layout';

// create a component
const DashboardScreen = () => {
  return (
    <>
      <Layout>
        <View style={styles.container}>
          <Text>Welcome to the Dashboard</Text>
        </View>
        <View style={styles.divOne}>
          <Image
            style={styles.imageArrow}
            source={require('../../assets/BackArrow.png')}
          />
          <Text style={styles.goodMorningText}>Good Morning</Text>
          <Image
            style={styles.imageClock}
            source={require('../../assets/Clock.png')}
          />
        </View>
      </Layout>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(145, 143, 225, 0.50)',
  },
  divOne: {
    flex: 2,
    backgroundColor: 'rgba(240, 244, 243, 0.05)',
  },
  imageClock: {
    alignSelf: 'center',
    marginTop: '6%',
  },
  imageArrow: {
    position: 'absolute',
    left: '2.5%',
  },
  goodMorningText: {
    position: 'absolute',
    right: '5%',
    marginTop: '3.5%',
  },
});

//make this component available to the app
export default DashboardScreen;
