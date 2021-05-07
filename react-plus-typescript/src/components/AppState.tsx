import React, { createContext, useState, useContext } from 'react';

interface AppStateValue {
    cart: {
        items:{
            id: number;
            name: string;
            price: number;
            quantity: number;
        }[];
    };
    // setState: any
}

const defaultStateValue: AppStateValue = {
    cart: {
        items: [],
    },
    // setState: undefined
};

export const AppStateContext = createContext(defaultStateValue);

export const AppSetStateContext = createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const useSetState = () => {
    const setState = useContext(AppSetStateContext);
    if(!setState) {
        throw new Error('setState is undefined');
    };
    return setState;
}

export const AppStateProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(defaultStateValue);
return (
        <AppStateContext.Provider value={state}>
            <AppSetStateContext.Provider value={setState}>
                {children}
            </AppSetStateContext.Provider>
        </AppStateContext.Provider>
    )
}