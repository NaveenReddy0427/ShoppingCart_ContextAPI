import { createContext } from "react";
import { useState } from "react";

export const ItemContext = createContext();

function CustomContext(props){

    const [ total, setTotal ] = useState('')
    const [ item, setItem ] = useState('')
    return(
        <>
        <ItemContext.Provider value={{total, setTotal, item, setItem}}>
            {props.children}
        </ItemContext.Provider>
        
        </>
    )
}

export default CustomContext;