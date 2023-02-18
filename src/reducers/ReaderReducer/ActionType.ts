enum PrimaryActionType {
  SET_INITIAL_DATA = "SET_INITIAL_DATA"
}

// define enum types

enum UserActionType {
  SET_INITIAL_DATA = "SET_INITIAL_DATA",
  ONCHANGE_FORM_ROLE = "ONCHANGE_FORM_ROLE"
}

enum ApplicationActionType {
  SET_INITIAL_DATA = "SET_INITIAL_DATA",
  ON_CHANGE_GROUP = "ONCHANGE_FORM_GROUP"
}


// export like that, simulate extends for enums;

export {
  UserActionType, ApplicationActionType
}

export type ReaderActionTypes = UserActionType | ApplicationActionType;


export default interface ReaderAction <A extends ReaderActionTypes> {
  type: A,
  payload: any
}
