import React, { useEffect, useReducer } from 'react'
import { useFetch } from '../../hooks/useFetch';
import ReaderReducerWrapper, { ActionType } from '../../reducers/ReaderReducer/ReaderReducer';
import { UserReaderReducerStateDefault } from '../../reducers/ReaderReducer/ReaderReducerState';
import UserReaderElement from '../../reducers/ReaderReducer/types/UserReaderElement';

type Props = {}

const IncidentPage = (props: Props) => {
  const [response, error, loading] = useFetch<UserReaderElement[]>("http://localhost:5000/users");
  const ReaderReducer = ReaderReducerWrapper<UserReaderElement>();
  const [state, dispatch] = useReducer(ReaderReducer, UserReaderReducerStateDefault);
  
  useEffect (() => {
    if(loading === false && response != null) {
      console.log(response)
      dispatch({ type: ActionType.SET_INITIAL_DATA, payload: {data: response?.data} })
    }
  }, [loading])
  
  if(loading) return (
    <div>
      loading
    </div>
  )
  return (
    <div>
      {state.list.map((item, index) => {
        return (
          <div key={index}>
            {item.username}
          </div>
        )
      })}
    </div>
  )
}

export default IncidentPage;