import React, { useState } from 'react';
import { MainPage } from './src/pages/MainPage/MainPage';
import SigInPage from './src/pages/SignInPage/SignInPage';
import { TouchableOpacity, Text, View } from 'react-native';
import { MyContext, MyContextProvider } from './src/context/useContext';

export default function App() {
  // Usando useState para criar o estado
  const [signalStateOn, setSignalStateOn] = useState(true);

  return (
    <MyContextProvider>
      <MainPage/>
    </MyContextProvider>
    
  );
}
