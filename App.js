import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);
  const [timeClick, setTimeClick] = useState(0);

  const onClickHandler = () => {
    setNumber(number + 5);
    setTimeClick(timeClick + 1);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Text style={styles.text}>{number}</Text>
        <Button title="ADD" onPress={onClickHandler} style={styles.button} />
        <Text style={styles.text}>You clicked {timeClick} times</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '50%',
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: 'orange',
    color: 'orange',
    width: 150,
    height: 60,
  },
});

export default App;
