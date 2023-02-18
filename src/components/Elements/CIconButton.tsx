import { Icon, IconButton } from '@mui/material';
import React from 'react'
import MuiColor from '../../enums/MuiColor';
import SizeType from '../../enums/SizeType';
import CIcon from './CIcon';

interface styles {};

type Props = { 
  name: string, size?: SizeType, iconstyles?: styles, btnstyles?: styles, 
  color?: MuiColor
}

// costum icon button component

const CIconButton = (props: Props) => {

  return (
    <IconButton style={props.btnstyles || {}} color={props.color || MuiColor.INHERIT}>
      <CIcon iconName={props.name} iconstyles={props.iconstyles || {}} />
    </IconButton>
  )
}

export default CIconButton;