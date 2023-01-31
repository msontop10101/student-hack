import React, {createContext, useMemo, useReducer} from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL || '';

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
    //eslint-disable-next-line
    const [contextState, dispatch] = useReducer(reducer, initialState);


    // Other Method

    const contextData = useMemo(()=>(
        {
            ...contextState,
            isAuthenticated: Boolean(contextState.user),
            logInUser: async (authData)=>{
                console.log("Sign in user:", authData);

                let res;

                try{
                    res = await axios({
                        method: "POST",
                        url: `${baseUrl}/api/auth/login`,
                        data: authData,
                    })
                }catch(err){
                    // console.log(err)
                    const {response} = err;

                    if (!response){
                        //eslint-disable-next-line
                        throw(
                            {
                                message:"Could not authenticate"
                            }
                        )
                    }

                    const {error} = response.data;

                    throw(error);
                }


                console.log(res);
            },
            signUpUser: async (userData)=>{
                console.log("Sign up user:", userData);
                let res;

                try{
                    res = await axios({
                        method: "POST",
                        url: `${baseUrl}/api/auth/register`,
                        data: userData,
                    })
                }catch(err){
                    // console.log(err)
                    const {response} = err;

                    if (!response){
                        //eslint-disable-next-line
                        throw(
                            {
                                message:"Could not create account"
                            }
                        )
                    }

                    const {error} = response.data;

                    throw(error);
                }


                console.log(res);
            },
        }
    ), [contextState])

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


