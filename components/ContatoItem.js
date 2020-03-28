import React,{useState} from 'react';
import {View,TextInput,Text,Button, StyleSheet, TouchableOpacity} from 'react-native'

const ContatoItem = (props)=> {
    return (
        <TouchableOpacity 
        onPress={props.onDelete.bind(this, props.chave, props.chave2)}>
        <View style = { styles.itemNaLista}>
        <View style = { styles.Titulo}>
        <Text style ={{color:'#FFFAFA', fontSize:18}}>   {props.contato}</Text>
        </View>

        <Text  style = { styles.Nome}
        > {props.telefone} </Text>
        <Text style={{fontSize:10}}>  Celular</Text>

        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemNaLista:{
        paddingTop: 20,
        paddingBottom:20,
        padding: 12,
        backgroundColor: '#FFFAFA',
        borderBottomColor: '#000',
        borderWidth: 1,
        marginBottom:10,
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
    Nome:{
        paddingTop:30,
        fontSize:16
    }
});

export default ContatoItem;
