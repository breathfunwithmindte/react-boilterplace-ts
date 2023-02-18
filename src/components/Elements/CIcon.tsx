import { Icon } from '@mui/material';
import React from 'react'
import SizeType from '../../enums/SizeType';


import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';

interface styles {};

type Props = { iconName: string, iconstyles: styles }

// costum icon component

const CIcon = (props: Props) => {

  switch (props.iconName) {
    case "notification":
      return (<Icon ><NotificationsIcon style={{transform: "scale(1.23)", ...props.iconstyles}} /></Icon>)
    case "message":
      return (<Icon ><SendIcon style={{transform: "scale(1.23)", ...props.iconstyles}}/></Icon>)
    case "new":
      return (<Icon ><AddIcon style={{transform: "scale(1.23)", ...props.iconstyles}}/></Icon>)
    default:
      return <p>icon not found</p>
  }
}

export default CIcon;