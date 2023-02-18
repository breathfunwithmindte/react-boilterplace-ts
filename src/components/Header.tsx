import { Avatar, Icon, IconButton } from '@mui/material';
import React from 'react'
import useAuth from '../contexts/AuthStateContextProvider';
import BtnVariant from '../enums/MuiBtnVariant';
import MuiColor from '../enums/MuiColor';
import SizeType from '../enums/SizeType';
import CIconButton from './Elements/CIconButton';


type Props = {}

const Header = (props: Props) => {
  const auth = useAuth();

  return ( <header className="header d-flex a-i-center j-c-between spx-3">
      <h3 className="f-size-3">Perfegram</h3>
      <section>
        <button></button>
        {/* <CIconButtonNoCicle iconName="new" variant={BtnVariant.CONTAINED} color={MuiColor.DEFAULT} />
        <CIconButtonNoCicle iconName="notification" variant={BtnVariant.CONTAINED} color={MuiColor.DEFAULT} />
        <CIconButtonNoCicle iconName="message" variant={BtnVariant.CONTAINED} color={MuiColor.DEFAULT} /> */}
      </section>
      <section className="d-flex a-i-center">
        <CIconButton name="new" btnstyles={{marginRight: "0.69rem"}} />
        <CIconButton name="notification" btnstyles={{marginRight: "0.69rem"}} />
        <CIconButton name="message" btnstyles={{marginRight: "0.69rem"}} />
        <IconButton><Avatar src={auth.state.user?.avatar} sx={{ width: "2.3rem", height: "2.3rem" }} /></IconButton> 
      </section>
    </header>
  )
}

export default Header;