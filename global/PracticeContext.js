import React, {createContext, useState} from 'react'


const PracticeContext = createContext();

const PracticeProvider = ({children}) => {
    const [val, setVal] = useState(false);
    const [val1, setVal1] = useState(1);
    const [val2, setVal2] = useState(2);

    const darker = ( ) => {
        setVal(!val);
    }
    return (
        <PracticeContext.Provider value={{
            val,
            setVal,
            val1,
            setVal1,
            val2,
            setVal2,
            darker
        }}>
            {children}
        </PracticeContext.Provider>
    )
}

export  {PracticeContext, PracticeProvider} ;
