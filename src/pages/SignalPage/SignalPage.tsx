import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import batLogo from '../../../assets/bat-logo.png';
import styles from './style';
import signalStates from '../../hooks/sinalState';
import { MyContext } from '../../context/useContext';

export function SignalPage(){

    const {
        signalStateOn, 
        setSignalStateOn, 
      } = useContext(MyContext);
      
    return( 
      <>
        <Image source={batLogo} style={styles.image} />
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Alterando o estado de forma reativa
          setSignalStateOn(!signalStateOn);
          console.log(signalStateOn);
        }}
      >
        {/* Texto do botão baseado no estado */}
        <Text style={styles.buttonText}>{"Press Me"}</Text>
      </TouchableOpacity>
      </>    
    )
}