import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './components/Header';

const App = () => {

  const [items, setItems] = useState([
    {id: }
  ])

  return (
    <View style={styles.container}>
      <Header/>
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