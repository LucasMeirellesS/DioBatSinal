import React, { createContext, useState } from 'react';

interface MyContextInterface{
    signalStateOn: boolean;
    name: string;
    email: string;
    local: string;
}

// Criação do contexto
export const MyContext = React.createContext<any>({} as MyContextInterface); 

// Provedor do contexto
export const MyContextProvider = ({ children }:any) => {
    const [signalStateOn, setSignalStateOn] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [local, setLocal] = useState('');


  return (
    <MyContext.Provider value={{ 
        signalStateOn, 
        setSignalStateOn, 
        name, 
        setName, 
        email, 
        setEmail,
        local, 
        setLocal
    }}>

      {children}
    </MyContext.Provider>
  );
};
