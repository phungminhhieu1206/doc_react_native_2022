import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name: </Text>
      <TextInput
        style={styles.inputText}
        placeholder="e.g. Hieu Phung"
        onChangeText={value => setName(value)}
        multiline={false}
        keyboardType="default"
        maxLength={10}
        editable={true} // false: when you don't want to edit in text input
        secureTextEntry={false} // true: when you use textinput for password
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    marginTop: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
    color: '#000000',
  },
  inputText: {
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 10,
    borderColor: '#555555',
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default App;
