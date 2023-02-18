import React, { useReducer } from 'react'
import { UserReaderReducerStateDefault } from '../../reducers/ReaderReducer/ReaderReducerState';
import ReaderReducerWrapper from '../../reducers/ReaderReducer/ReaderReducer';
import UserReaderType from '../../reducers/ReaderReducer/types/UserReaderType';
import { UserActionType } from '../../reducers/ReaderReducer/ActionType';

type Props = {}

const UsersPage = (props: Props) => {
  const ReaderReducer = ReaderReducerWrapper<UserReaderType, UserActionType>();
  const [state, dispatch] = useReducer(ReaderReducer, UserReaderReducerStateDefault);

  //dispatch({ type: UserActionType.SET_INITIAL_DATA, payload: {} });
  //state.list.map(i => i.)

  //const [state, dispatch] = useReducer(AuthStateReducer, AuthStateDefault);
  return (
    <div>UsersPage</div>
  )


}

const UsersPageWrapper = () => {
  
}