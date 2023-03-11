import ReaderReducerState from "./ReaderReducerState";
import ReaderElement from "./ReaderElement";

enum ActionType {

  SET_INITIAL_DATA = "SET_INITIAL_DATA"

}

interface ActionPaylod {
  type: ActionType
  payload: any
}


export { ActionType }


function ReaderReducerWrapper <T extends ReaderElement> () {
  return function ReaderReducer (state: ReaderReducerState<T>, action: ActionPaylod) :ReaderReducerState<T>
  {
    switch (action.type) {
      case "SET_INITIAL_DATA": return { ...state, list: action.payload.data  }
      default: return state;
    }
  }
}

export default ReaderReducerWrapper;
