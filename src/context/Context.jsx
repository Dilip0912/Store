import { createContext, useState } from "react";

const Context=createContext()
export default Context;

export const ContextProvider=({children})=>{
    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        if(theme==="light"){
            setTheme("dark")
            document.body.style.backgroundColor="rgb(17,24,39)"
        }
        else{
            setTheme("light")
            document.body.style.backgroundColor="white"
        }
    }

    const [loading,setLoading]=useState(false);
    return(
        <Context.Provider value={{theme,toggleTheme,loading,setLoading}}>
            {children}
        </Context.Provider >
    )
}