import React, { useState } from 'react';
import { MainPage } from './src/pages/MainPage/MainPage';
import SigInPage from './src/pages/SignInPage/SignInPage';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './src/pages/MainPage/style';

export default function App() {
  // Usando useState para criar o estado
  const [signalStateOn, setSignalStateOn] = useState(true);

  return (
    <View style={ signalStateOn ? styles.container : styles.container2 }>
      
        {/* Condicional renderizado usando o estado */}
        {signalStateOn ? <MainPage /> : <SigInPage />}
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Alterando o estado de forma reativa
          setSignalStateOn(!signalStateOn);
          console.log(signalStateOn);
        }}
      >
        {/* Texto do botão baseado no estado */}
        <Text style={styles.buttonText}>{signalStateOn ? "Press Me" : 'Submit'}</Text>
      </TouchableOpacity>
      

      
    </View>
  );
}
