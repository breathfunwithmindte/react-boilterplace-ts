import React from 'react'
import { Field } from '../../types/GenericForm';

type Props = {
  field: Field,
  
}

const Textfield = (props: Props) => {

  return (
    <div className="sp-4">
      <input className="inp-primary" placeholder={props.field.label || ""} />
      <hr />
      <input className="inp-success" placeholder={props.field.label || ""} />
      <hr />
      <input className="inp-danger" placeholder={props.field.label || ""} />
    </div>
  )

}


export default Textfield;