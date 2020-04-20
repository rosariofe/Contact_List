import React,{useState} from 'react';
import {View,TextInput,Text,Button, StyleSheet, TouchableOpacity} from 'react-native'
import Titulo from '../components/Titulo'; 
import cores from '../cores/cores';
const ContatoItem = (props)=> {
    return (
        <TouchableOpacity 
        onLongPress={props.onDelete.bind(this, props.chave, props.chave2)}>
        <View style = { styles.itemNaLista}>
        <View style = { styles.Titulo}>

        <Text style ={styles.contato}> 
       
        {props.contato}
          </Text>
        </View>
        
        <Text  style = { styles.Nome}

        >
          {props.telefone} </Text>
          <Text style={{color:'#000',fontSize:10}}>  Celular</Text>       
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   contato:{color:'#FFFAFA',
    fontSize:18,
    marginLeft:16
},
    Titulo:{
        paddingTop: 190,
        paddingBottom: 10,
        backgroundColor: cores.fundo,
        marginLeft:-12,
        marginRight:-12,
        marginTop:-20,
        marginBottom:10,        
        borderRadius: 3,
        
       
    },
    itemNaLista:{
        height:345,
        paddingTop: 20,
        paddingBottom:10,
        padding: 12,
        backgroundColor: cores.branco,
        borderBottomColor: '#000',
        borderWidth: 1,
        marginBottom:20,
        borderRadius: 3
    },
    Nome:{
        paddingTop:6,
        marginBottom:10,
        fontSize:16,
        color:'#000',
        marginLeft:4
    }
});

export default ContatoItem;
