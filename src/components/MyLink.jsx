import React from 'react'
import { NavLink } from 'react-router'

const MyLink = ({to,className, children}) => {
  return (
    <div>
        <NavLink to={to} className={({isActive}) => isActive ? 'border-b-2 border-green-600 py-2 px-4 rounded-lg font-bold' : `${className} font-semibold py-2 px-4`}>{children}</NavLink>
    </div>
  )
}

export default MyLink