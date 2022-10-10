import React, { useState } from "react"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { FaMoon, FaSun } from 'react-icons/fa'
import { pink } from '@mui/material/colors'

import ProfesionalInformation from "./PersonalInformation"
import IconMenu from "../Navbar/LateralMenu"

import '../../App.css'

const ProfessionalPortFolio = () => {
  const [ stateTheme, setStateTheme ] = useState(false)
  const theme =  stateTheme ? <FaMoon />  : <FaSun />
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2} md={2} lg={3} align="center" className="center-column">
              <IconMenu />
            </Grid>
            <Grid item xs={8} md={8} lg={6} align="center" className="center-column">
              <ProfesionalInformation />
            </Grid>
            <Grid item xs={2} md={2} lg={3} className="center-column button-theme">
              <Button 
                  variant="outlined" 
                  startIcon={ theme }
                  sx={
                    {
                      color: pink.A400, 
                      border: pink.A400, 
                      fontSize: 'medium',
                      textTransform: 'none'
                    }
                  }
                  onClick={() => setStateTheme(!stateTheme) }
              >Theme
              </Button>
            </Grid>
          </Grid>
        </Box>
      </>
    )
}

export default ProfessionalPortFolio