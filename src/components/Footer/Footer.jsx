import React from "react"
import BottomNavigation from '@mui/material/BottomNavigation'

import '../../App.css'


const Footer = (props) => {

  return (
    <>
      <div className="footer-contact">
      <BottomNavigation 
        sx={{ 
          backgroundColor:'transparent', 
          paddingTop: '12px' 
        }}>
        { props.children }
      </BottomNavigation>
      </div>
    </>
  )

}

export default Footer