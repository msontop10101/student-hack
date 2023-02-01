import React, {createContext, useEffect, useMemo, useReducer} from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL || '';

const AppContext = createContext();
const userStorageKey = "userTKN"

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

    useEffect(()=>{
        const bootstrap = async ()=>{
            // Load user data from local storage
            // if no data, stop it.

            let user = localStorage.getItem(userStorageKey);

            if (!user) return; // stop it.

            user = JSON.parse(user);

            return dispatch({
                type: ActionTypes.UPDATE_USER,
                payload: user,
            });
        }

        bootstrap();
    }, [])

    // Other Method

    const  saveUserData = (userData) =>{
        // Receives user data object
        // converts it to string
        // save to local storage
        const raw = JSON.stringify(userData);

        localStorage.setItem(userStorageKey, raw);
    }

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

                const {data} = res.data;
                saveUserData(data);
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


                const {data} = res.data;
                saveUserData(data);
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


