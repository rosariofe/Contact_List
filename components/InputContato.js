import React,{useState} from 'react';
import {View,Text,TextInput,Button, StyleSheet, TextInputComponent} from 'react-native';

const InputContato = (props) => {
    const[contato,setContato] = useState('');
    const capturarContato = (contato) => {
        setContato(contato);
    }
    const[telefone, setTelefone] = useState('');
    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    }
    return (
    
    <View style={styles.contatoView}>
    
    <TextInput
    
    placeholder="Nome" 
    style={styles.InputContatoText} 
    onChangeText={capturarContato}
    value={contato}/>

    <TextInput
    
    placeholder="Numero de Telefone"
    style={styles.InputContatoText} 
    onChangeText={capturarTelefone}
    value={telefone}/>
    
    <View style={styles.buttonView}>
    <View style={styles.botao}>
    <Button title="Adicionar Contato" color="#4876FF"
    onPress={() => props.onAdicionarContato(contato,telefone)}
    
    /> 
    </View>
    </View>
    </View> 
    )
}

const styles = StyleSheet.create({
    botao:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonView:{
        
        width: '100%',
        marginTop:8
    },
    InputContatoText:{
     marginBottom:20,
     marginTop:8,
    bottom:1,
    borderColor:'#ccc',
    borderBottomWidth:0.5,
    paddingTop:10,
    

    },
    contatoView:{
        padding:20,
        marginBottom:5,

      },
    

})

export default InputContato;
