import React, { createContext, useState } from "react";

const appContext = createContext()

function AppProvider(props){
    const [jet,setJet] = useState([])
    return (
        <appContext.Provider value={[jet,setJet]} >
            {props.children}
        </appContext.Provider>
    )
}

export {appContext,AppProvider}