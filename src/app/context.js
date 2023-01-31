import React, {createContext, useMemo, useReducer} from 'react';

const AppContext = createContext();

export default AppContext;

export const AppContextProvider = ({children}) =>{
        
    const initialState = {
        user: null, // includes user data and token
    }

    const ActionTypes = {
        UPDATE_USER: "UPDATE_USER"
    }

    const  reducer = (previousState, action)=>{

        switch (action.type){
            case ActionTypes.UPDATE_USER:
                return {
                    ...previousState,
                    user: action.payload
                }
            default:
                return {...previousState}
        }
    }

    const [contextState, dispatch] = useReducer(reducer, initialState);


    // Other Method

    const contextData = useMemo(()=>(
        {
            ...contextState,
            logInUser: async (authData)=>{
                console.log("Sign in user:", authData);
                // 
            },
            signUpUser: async (userData)=>{
                console.log("Sign up user:", userData);
            },
        }
    ))

    return (
        <AppContext.Provider value={contextData}>
            <AppContext.Consumer>
                {
                    ()=>(
                        <>
                            {children}
                        </>
                    )
                }
            </AppContext.Consumer>
        </AppContext.Provider>
    )

}


