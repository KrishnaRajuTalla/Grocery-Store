import React from 'react'
import './SidebarRow.css'
function SidebarRow({selected,title}) {
  return (
    <div className={`SidebarRow ${selected && 'selected'}`}>
        <h1 className='sidebarRow-title'>{title} </h1>
    </div>
  )
}

export default SidebarRow