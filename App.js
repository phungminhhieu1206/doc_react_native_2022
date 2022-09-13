import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View, Linking} from 'react-native';

const App = () => {
  const [name, setName] = useState('The default name');

  const [session, setSession] = useState({number: 6, title: 'state'});

  const onClickHandler = () => {
    setName('This is the new name');
    setSession({number: 7, title: 'style'});
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>
          This is session number {session.number} and about {session.title}
        </Text>
        <Button title="Update name" onPress={onClickHandler} />
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
