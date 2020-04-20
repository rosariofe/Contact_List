import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button,FlatList } from 'react-native';
import TelaAdicionar from './telas/TelaAdicionar';

export default function App() {


  return (
/*    <View style={styles.container} >*/
 <TelaAdicionar />
  );

}
const styles = StyleSheet.create({
  telaPrincipalView:{
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:150,
    paddingTop:40
  }  
});
