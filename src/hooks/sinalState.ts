import { useState } from "react";

const signalStates = () =>{
    const [signalStateOn, setSignalStateOn] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return {
        setSignalStateOn,
        setName,
        setEmail,
        setPassword,
        signalStateOn, 
        name, 
        email,
        password
    }

}

export default signalStates;