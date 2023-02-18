import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import AuthState, { AuthStateDefault, User } from '../reducers/UserReducer/AuthState'
import AuthStateReducer, { AuthStateAction } from '../reducers/UserReducer/AuthStateReducer'

type Props = {
  children: React.ReactNode,
}

interface StateDispatch {
  state: AuthState,
  dispatch: React.Dispatch<AuthStateAction>
}

const StateDispatchDefault : StateDispatch = {
  state: AuthStateDefault,
  dispatch: () => {}
}

const authStateContext = createContext(StateDispatchDefault);

const TestUser: User = {
  username: "@Nancy~2314",
  email: "nancy@perfect-evolution.com",
  fullname: "Nancy NLast",
  avatar: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-1/80010946_453143652291358_4772336001664155648_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Ud6OAmTqNJwAX8gMkDz&_nc_ht=scontent-vie1-1.xx&oh=00_AfCMtNvd4ltkHV3M9RjtUSkS5yYiHBZUi6bxMlRbtrLtkw&oe=640B3A64",
  roles: [],
  groups: [],
  superuser: true,
  gender: "female",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  phonenumber: "000123456789"
} 

/**
 * 
 * @param props 
 * @returns 
 */
const AuthStateContextProvider = (props: Props) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [state, dispatch] = useReducer(AuthStateReducer, AuthStateDefault);

  useEffect(() => {
    dispatch({  type: "SET_AUTHSTATE", payload: { user: TestUser, notifications: [], unread_notifications: 2, messages: 2 }  })
    setTimeout(() => setLoading(false), 500)
  }, [])

  if(loading) return <p>loading...</p>
  return (
    <authStateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </authStateContext.Provider>
  )
}

const useAuth = () => {
  const state = useContext<StateDispatch>(authStateContext);
  return state;
}

export {
  AuthStateContextProvider
}

export default useAuth;