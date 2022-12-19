import { Grid, Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import ProfesionalInformation from "./PersonalInformation"
import LateralMenu from "../Bars/LateralBar"
import SuperiorMenu from '../Bars/SuperiorBar'
import Footer from "../Footer"
import ReferencesLinks from "../ReferencesLinks"

import '../../App.css'
import { sharingInformationService } from "../../services/shared-services/shared-information.services"

const ProfessionalPortFolio = () => {

  const matches = useMediaQuery('(min-width:900px)')

    return (
      <> 
        {/* <nav>
          { <SuperiorMenu /> }
        </nav> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={1} md={2} lg={3} align="center" className="center-column">
            { matches ? <LateralMenu /> : '' }
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