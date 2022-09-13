import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View, Linking} from 'react-native';

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
        <Button title="ADD" onPress={onClickHandler} />
        <Text style={styles.text}>You clicked {timeClick} times</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
