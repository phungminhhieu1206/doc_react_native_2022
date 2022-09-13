import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 10'},
    {name: 'Item 11'},
    {name: 'Item 12'},
    {name: 'Item 13'},
    {name: 'Item 14'},
    {name: 'Item 15'},
    {name: 'Item 16'},
    {name: 'Item 17'},
    {name: 'Item 18'},
  ]);

  const [lastItem, setLastItem] = useState(items.length);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    let temp = lastItem + 1;
    setLastItem(temp);
    setItems([...items, {name: 'Item ' + temp}]);

    setRefreshing(false);
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()} // khoa ?
      numColumns={1} // so luong cot hien thi ?
      horizontal={false} // xoay ngang ?
      inverted={false} // dao nguoc ds ?
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          color={['#ff0fff']}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    marginTop: 35,
  },
  item: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
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
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
