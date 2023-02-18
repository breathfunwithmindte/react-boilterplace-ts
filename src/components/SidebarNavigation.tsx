import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const SidebarNavigation = (props: Props) => {
  return (
    <nav className="sidebar-navigation-container">
      <h1 className="f-size-3 sp-2">PerfecTEvolutioN ~ IAM</h1>
      <hr />
      <ul style={{height: "calc(100vh - 100px)", overflowY: "auto"}} className="spb-1">
        <Link to="/home" style={{textDecoration: "none"}}><li className="btn hover-4 my-4 spx-3 spy-2">
          Dashboard  
        </li></Link>
        <Link  to="/server-health" style={{textDecoration: "none"}}><li className="btn hover-4 my-4 spx-3 spy-2">
          Server Health  
        </li></Link>
        <Link  to="/user" style={{textDecoration: "none"}}><li className="btn hover-4 my-4 spx-3 spy-2">
          User Map
        </li></Link>
        <Link  to="/users" style={{textDecoration: "none"}}><li className="btn hover-4 my-4 spx-3 spy-2">
          Users  
        </li></Link>
        <Link  to="/application" style={{textDecoration: "none"}}><li className="btn hover-4 my-4 spx-3 spy-2">
          Application Map  
        </li></Link>
        <Link  to="/applications" style={{textDecoration: "none"}}><li className="btn hover-4 my-4 spx-3 spy-2">
          Applications  
        </li></Link>
        <Link  to="/log" style={{textDecoration: "none"}}><li className="btn hover-4 my-4 spx-3 spy-2">
          Logs  
        </li></Link>
        <Link  to="/logins" style={{textDecoration: "none"}}><li className="btn hover-4 my-4 spx-3 spy-2">
          Logins 
        </li></Link>
        <Link  to="/settings" style={{textDecoration: "none"}}><li className="btn hover-4 my-4 spx-3 spy-2">
          settings 
        </li></Link>
      </ul>
    </nav>
  )
}

export default SidebarNavigation;