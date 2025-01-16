import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import batLogo from '../../../assets/bat-logo.png';
import styles from './style';
import signalStates from '../../hooks/sinalState';

export function MainPage(){
  const {
        setSignalStateOn, 
        signalStateOn
  } = signalStates();

    return( 
      <>
        <Image source={batLogo} style={styles.image} />
      </>    
    )
}