import React from "react"
import BottomNavigation from '@mui/material/BottomNavigation'

import '../../App.css'

import ReferencesLinks from "../ReferencesLinks"

const Footer = () => {

  return (
    <>
      <div className="footer-contact">
      <BottomNavigation 
        sx={{ 
          backgroundColor:'transparent', 
          paddingTop: '12px' 
        }}>
        <ReferencesLinks />
      </BottomNavigation>
      </div>
    </>
  )

}

export default Footer