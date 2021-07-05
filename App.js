import React, {useState} from 'react'; // TODO: look into hooks
import { View, Text, StyleSheet, Image, FlatList, Alert} from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    // setItems is a State fx
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {

    if(!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    } else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text}, ...prevItems]; // spread operator to enumerate over prev lists
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList
        data={items} renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem}/>
        )} 
      />
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} 
      style={styles.img}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60
  },
  // text: {
  //   color: 'darkslateblue', 
  //   fontSize: 20
  // },
  // img: {
  //   height: 100,
  //   width: 100,
  //   borderRadius: 100 / 2
  // }
})

export default App;