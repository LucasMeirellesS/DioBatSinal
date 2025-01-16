import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import signalStates from '../../hooks/sinalState';
import { MyContext } from '../../context/useContext';
export default function SigInPage() {
  
  const {
    setSignalStateOn,
        setName,
        setEmail,
        setLocal,
        signalStateOn, 
        name, 
        email,
        local
  } = useContext(MyContext);
  const handleSubmit = () => {
    setSignalStateOn(true);
  };

  return (
    <>
      <Text style={styles.title}>Simple Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      {/* Input for Email */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua localização"
        value={local}
        onChangeText={setLocal}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Alterando o estado de forma reativa

          if(name != '' && email != '' && local !== ''){
            setSignalStateOn(!signalStateOn);
            console.log(signalStateOn);
          }
          else{
            Alert.alert(
              "Título Erro", 
              "Preencha os campos.", 
              [
                { text: "Cancelar", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
            );
          }
        }}
      >
        {/* Texto do botão baseado no estado */}
        <Text style={styles.buttonText}>{'Submit'}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
