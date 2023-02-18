import React, { useEffect, useReducer } from 'react'
import FieldType from '../enums/FieldType';
import { FormProp } from '../types/GenericForm'
import {  GroupFormReducerStateDefault } from '../reducers/FormReducer/FormReducerState';
import GroupFormstate from '../reducers/FormReducer/types/GroupForm';
import FormReducerWrapper from '../reducers/FormReducer/FormReducer';
import { GroupActionType, RoleActionType } from '../reducers/FormReducer/ActionType';
import Textfield from './GenericForm/Textfield';



const GenericForm = (props: FormProp) => {
  const FormReducer = FormReducerWrapper<GroupFormstate, GroupActionType, string>();
  const [state, dispatch] = useReducer(FormReducer, GroupFormReducerStateDefault);


  useEffect(() => {

  }, []);

  function handleChangeBasicV1 (e: React.ChangeEvent<HTMLInputElement>)
  {
    dispatch({ type: GroupActionType.ONCHANGE, payload: { fieldName: e.currentTarget.name, value: e.currentTarget.value } });
  }

  return (
    <div style={{maxWidth: "693px"}}>
      <pre style={{whiteSpace: "pre-line", padding: "2rem", wordBreak: "break-all", width: "50%"}}>{JSON.stringify(state)}</pre>
      {props.title && (
        <strong>{props.title}</strong>
      )}
      <form>
        <div className="form--container">
          {props.fields.map((field, findex) => {
            switch (field.fieldType) {
              case FieldType.TEXTFIELD: 
                return <Textfield field={field} />
              case FieldType.EMAILFIELD: return <p>"email field"</p>
              default: return <p>field not found</p>
            }
          })}
        </div>
      </form>
      <button className="btn btn-primary">some button</button>
      <hr />
      <button className="btn btn-success">some button</button>
      <hr />
      <button className="btn btn-danger">some button</button>
    </div>
  )


}

export default GenericForm;