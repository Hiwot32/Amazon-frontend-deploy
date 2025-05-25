import { createContext, useReducer } from "react";
// import { initialState } from "../../utilities/reducer";


export const DataContext=createContext();

export const DataProvider=({children,reducer,initialState})=>{
    return(
        <DataContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </DataContext.Provider>
    )
}