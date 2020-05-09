import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput,Button ,FlatList  } from 'react-native';
import Cartao from '../components/Cartao';
import ContatoItem from '../components/ContatoItem';
import InputContato from '../components/InputContato';

const AdicionarTela = (props) => {
const [contatos, setContatos] = useState([]);
const [contadorContatos,setContadorContatos] = useState(10); //falta

  //para adicionar o que foi digitado
  const adicionarContato = (contato,telefone)=> {
    setContatos(contatos => {
      console.log(contatos);
      setContadorContatos(contadorContatos +2);
      
      return [{key:contadorContatos.toString(),valueCont:contato, valueTel:telefone}, ...contatos]
      
    })
    
  }
  const removerContato= (key) => {
    setContatos (contatos => {
      return contatos.filter(contato => {
       return contato.key !==key;
    
      });
      
    }); 
  };
    return(
        <View style ={estilos.tela}>
        <View style ={estilos.Cabecalho}>
        <Text style={estilos.titulo}>Novo Contato</Text>
        </View>
        <View style={estilos.telaPrincipalView}>
        <Cartao style={estilos.itemView}>
        
        <InputContato onAdicionarContato = {adicionarContato} />
        </Cartao>
        <View style ={estilos.telaitem}>
                
<FlatList 
  data={contatos}
  renderItem={
    
    contato => (
      
    <Cartao style={estilos.itemView}>
      <ContatoItem 
      chave={contato.item.key}
      contato={contato.item.valueCont}
      telefone={contato.item.valueTel}
      onDelete={removerContato}
      />
    </Cartao> 
   
    )
    
  }
/>
</View>
</View>
        
        </View>
    )
}
    const estilos = StyleSheet.create({
      tela:{
        flex:1
      },telaitem:{
        paddingBottom:540
      },
      telaPrincipalView:{
        padding:6
      },
        Cabecalho:{
            width: '100%',
        height: 95,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
        },
        
    titulo: {
        fontSize: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
        },
        entradaView: {
        //300 pontos de largura
        width: 300,
        //mas no máximo, 80% da tela
        maxWidth: '80%',
        //alinhamento no eixo perpendicular (horizontal, neste caso)
        },
        itemView:{
          flex:1,
          padding:8

        },
        buttonsView: {
        //o padrão é column
        flexDirection: 'row',
        width: '100%',
        // alinhamento no eixo principal (horizontal, neste caso)
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        
        },
        botao: {
        width:100
        },
        
    });
export default AdicionarTela;
