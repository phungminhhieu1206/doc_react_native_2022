/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={[styles.view1, {flexDirection: 'row'}]}>
        <View
          style={{
            backgroundColor: '#17b9c5',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={styles.text}>1</Text>
        </View>
        <View
          style={{
            backgroundColor: '#db0fe2',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={styles.text}>2</Text>
        </View>
        <View
          style={{
            backgroundColor: '#f3df09',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.view4, {flexDirection: 'row'}]}>
        <View
          style={{
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={styles.text}>6</Text>
        </View>
        <View
          style={{
            backgroundColor: '#3b3ca5',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch', // center, stretch
    justifyContent: 'center',
    marginTop: 35,
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 1,
    backgroundColor: '#a21212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 6,
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
