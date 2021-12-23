import React, { createContext } from 'react';
import useData from './useData';

export const AuthContext = createContext();

const DataProvider = ({ children }) => {

    const allContext = useData();

    return (
        <AuthContext.Provider value={allContext}>
            { children }
        </AuthContext.Provider>
    );
};

export default DataProvider;