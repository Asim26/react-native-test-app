//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FastImage,
} from 'react-native';

// create a component
const CustomComponent = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://images.pexels.com/photos/11500407/pexels-photo-11500407.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          }}
        />
        <Text>Custom Component Line One</Text>
        <Text>Custom Component Line Two</Text>
        <Text>Custom Component Line Three</Text>
        <View style={styles.divOne}>
          <Text>Div One</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgStyle: {
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  divOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: 300,
    height: 900,
  },
});

//make this component available to the app
export default CustomComponent;
