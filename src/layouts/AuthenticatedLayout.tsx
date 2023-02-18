import React from 'react'
import Header from '../components/Header'
import SidebarNavigation from '../components/SidebarNavigation'

type Props = {
  children: React.ReactElement
}

const AuthenticatedLayout = (props: Props) => {
  return (
    <div className="layout-primary">
      <Header />
      <div className="h-header bg-3 w-f" style={{overflowY: "auto"}} >
        {props.children}
      </div>
    </div>
  )
}

export default AuthenticatedLayout;