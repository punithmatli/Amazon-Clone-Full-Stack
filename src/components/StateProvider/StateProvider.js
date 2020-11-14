import React, {useContext, createContext, useReducer} from 'react';

//Prepares data layer
const StateContext = createContext();

//Wraps and provides data layer
export const StateProvider = ({reducer, initialState, children}) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

//Pulls data
export const useStateValue = () => useContext(StateContext);