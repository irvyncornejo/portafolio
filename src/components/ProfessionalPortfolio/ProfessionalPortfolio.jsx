import React, { useState } from "react"
import { Grid, Box, Button } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { FaMoon, FaSun } from 'react-icons/fa'
import { pink } from '@mui/material/colors'

import ProfesionalInformation from "./PersonalInformation"
import IconMenu from "../Navbar/LateralMenu"
import Footer from "../Footer"
import ReferencesLinks from "../ReferencesLinks"

import '../../App.css'
import { sharingInformationService } from "../../services/shared-services/shared-information.services"

const ProfessionalPortFolio = () => {
  const [ stateTheme, setStateTheme ] = useState(false)
  const theme =  stateTheme ?  <FaSun /> : <FaMoon />
  const handleTheme = () => {
    const color =  stateTheme ? '#f50057' : '#00c5b9'
    sharingInformationService.setSubject(color)
  }
  const matches = useMediaQuery('(min-width:900px)')

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <div className="center-column button-theme">
            {/* <Button
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
              onClick={ () => {
                  setStateTheme(!stateTheme)
                  handleTheme()
                }
              }
              >Theme
            </Button> */}
          </div>
          <Grid container spacing={2}>
            <Grid item xs={1} md={2} lg={3} align="center" className="center-column">
            { matches ? <IconMenu /> : '' }
            </Grid>
            <Grid item xs={10} md={8} lg={6} align="center" className="center-column">
              <ProfesionalInformation />
            </Grid>
            <Grid item xs={1} md={2} lg={3}>
            </Grid>
          </Grid>
          { !matches ? <Footer children={<ReferencesLinks/>}/>  : '' }
        </Box>
      </>
    )
}

export default ProfessionalPortFolio