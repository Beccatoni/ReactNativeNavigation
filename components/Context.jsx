import { View, Text } from 'react-native'
import React, {createContext, useState} from 'react'



const darkMode = createContext();

const Context = ({children}) => {
    const [dark, setDark] = useState(false);

    const trigger = () => {
        const newDark = !darkMode;
        setDarkMode(newDark);
    }
    return (
        <darkMode.Provider value={{dark, setDark, trigger}}>
            {children}
        </darkMode.Provider>
    )
}

export default Context