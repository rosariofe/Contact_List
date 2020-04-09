import React,{useState} from 'react';
import {View,TextInput,Text,Button, StyleSheet, TouchableOpacity} from 'react-native'
 
const ContatoItem = (props)=> {
    return (
        <TouchableOpacity 
        onLongPress={props.onDelete.bind(this, props.chave, props.chave2)}>
        <View style = { styles.itemNaLista}>
        <View style = { styles.Titulo}>
        <View style = { styles.Inicial}>
        <Text style ={{color:'#FFFAFA', fontSize:18, marginLeft:16}}> 
            {props.contato.substring(0,1)}
        </Text>
        </View>
        <Text style ={{color:'#FFFAFA', fontSize:18, textAlign:"center"}}> 
       
        {props.contato}
          </Text>
        </View>
        <Text style={{color:'#000',fontSize:10}}>  Celular</Text>
        <Text  style = { styles.Nome}
        
        >
          {props.telefone} </Text>
        
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemNaLista:{
        paddingTop: 20,
        paddingBottom:10,
        padding: 12,
        backgroundColor: 'white',
        borderBottomColor: '#000',
        borderWidth: 1,
        marginBottom:60,
        borderRadius: 3
    },
    Titulo:{
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#1E90FF',
        marginLeft:-12,
        marginRight:-12,
        marginTop:-20,
        marginBottom:10,        
        borderRadius: 3
       
    },
    Inicial:{
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#000033',
        marginLeft:105,
        marginRight:108,
        marginTop:2,
        marginBottom:10,        
        borderRadius: 60
       
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
