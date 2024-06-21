import React, { createContext, useReducer, useContext } from 'react';
import { isTokenValid, setAuthToken } from '../utils/tokenHelper';

const initialState = {
    user: null,
    isAuthenticated: false,
};

const GlobalStateContext = createContext(initialState);
const GlobalDispatchContext = createContext(null);

const globalReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: isTokenValid(action.payload.token),
            };
        case 'LOGOUT':
            setAuthToken(null)
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
