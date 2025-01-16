import React, { useContext, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../SignalPage/style';
import SigInPage from '../SignInPage/SignInPage';
import { MyContext } from '../../context/useContext';
import { SignalPage } from '../SignalPage/SignalPage';

export function MainPage() {
  
  const {
    signalStateOn, 
    setSignalStateOn, 
    name, 
    setName, 
    email, 
    setEmail,
    local, 
    setlocal
  } = useContext(MyContext);

  return (
    <View style={ signalStateOn ? styles.container : styles.container2 }>
      
        {/* Condicional renderizado usando o estado */}
        {signalStateOn ? <SignalPage /> : <SigInPage />}
      
      
    </View>
  );
}