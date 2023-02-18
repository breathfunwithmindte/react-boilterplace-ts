import ReaderAction, { ReaderActionTypes, UserActionType } from "./ActionType";
import ReaderReducerState from "./ReaderReducerState";
import ReaderState from "./ReaderState";
import UserReaderType from "./types/UserReaderType";


function ReaderReducerWrapper <T extends ReaderState, A extends ReaderActionTypes> () {
  return (state: ReaderReducerState<T>, action: ReaderAction<A>) : ReaderReducerState<T> =>  {
  
    switch (action.type) {
      case "SET_INITIAL_DATA": return { ...state, list: {...state.list, [action.payload.fieldName]: action.payload.value }  }
      case "ONCHANGE_FORM_GROUP": return { ...state, list: {...state.list, [action.payload.fieldName]: action.payload.value }  }
      case "ONCHANGE_FORM_ROLE": return { ...state }
      default: return state;
    }
  
  }
}

export default ReaderReducerWrapper;