import { createContext, useContext } from "react";
import { useState } from "react";

export const ItemContext = createContext();

export function useValue(){
    const value = useContext(ItemContext)
    return value
}

function CustomContext(props){

    const [ total, setTotal ] = useState('')
    const [ item, setItem ] = useState('')
    
    const handleAdd = (price) => {
        setTotal(total + price)
        setItem(item + 1)
      };
    
      const handleRemove = (price) => {
        if(total<=0){
          return
        }
    
        setTotal(total-price)
        setItem(item-1)
      };


    return(
        <>
        <ItemContext.Provider value={{total, item, handleAdd, handleRemove}}>
            {props.children}
        </ItemContext.Provider>
        
        </>
    )
}

export default CustomContext;