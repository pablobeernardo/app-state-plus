import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

export default function App() {

  const [soma, setSoma] = useState(0);

  const subtrairContador = () =>{
    setSoma(soma - 1)
  };

  const resetarContador = () =>{
    setSoma(0);
  };
  
  const Contador = () =>{
    setSoma(soma + 1) 
  };

 
  const [fontCarregada, setFonteCarregada] = useState(false);

  async function loadFonts(){
      await Font.loadAsync({
        bellefair_regular: require('./assets/Bellefair/Bellefair-Regular.ttf')
      });
    }

  useEffect(() => {
    loadFonts()
    .then (() => {
      setFonteCarregada(true);
    })
    .catch((error) =>{
      console.log('Ocorreu um erro', error);
    })
  }, [])


  return (
    <View style={styles.container}>
      {fontCarregada?
      <Text style={{fontFamily:'bellefair_regular' , fontSize:50,}}>Você clicou: {soma} x</Text>
      :
      <Text>Não carregou font</Text>   
      }

      <StatusBar style="auto" />

      <View style={styles.button}>
        <Button title='Adicionar' onPress={Contador}/>
        <Button title='Retirar' onPress={subtrairContador}/>
        <Button title='Resetar' onPress={resetarContador}/>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

button: {
  flexDirection:'row',
  marginTop: 30,
  
  
  


}
  


});
