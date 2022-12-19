import React, { useEffect, useState } from "react"
import Icon from '@mui/material/Icon'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'

import { 
  SiAmazonaws, 
  SiCss3, 
  SiGooglecloud, 
  SiHtml5, 
  SiJavascript, 
  SiPandas, 
  SiPytest, 
  SiPython, 
  SiReact, 
  SiFlask, 
  SiGithub, 
  SiFirebase,
  SiRaspberrypi,
  SiArduino,
  SiCplusplus,
  SiDassaultsystemes} from "react-icons/si"
import { sharingInformationService } from "../../services/shared-services/shared-information.services"

const professionalStack = {
  Javascript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  React: SiReact,
  Python: SiPython,
  Flask: SiFlask,
  Pandas: SiPandas,
  Pytest: SiPytest,
  AmazonWebServices: SiAmazonaws,
  GoogleCloud: SiGooglecloud,
  Firebase: SiFirebase,
  GitHub: SiGithub
}

const hobbieStack = {
  RaspberryPi: SiRaspberrypi,
  Arduino: SiArduino,
  'C++': SiCplusplus,
  SolidWorks: SiDassaultsystemes
}


const TechStack = () => {
    const [theme, setterTheme] = useState('#00c5b9') 
    const subscription$ = sharingInformationService.getSubject()
    useEffect(()=>{
      subscription$.subscribe(color => {
        setterTheme(color)
      })
    })
    return (
      <>
        <div>
          <Divider textAlign="left" sx={{ color: theme, borderColor: theme }}>
            <Chip label="Stack" sx={{ color: theme, fontWeight: 'bold' , backgroundColor: 'rgba(26, 33, 46, 0.975)' }}/>
          </Divider>
          {
            Object.keys(professionalStack).map(tech => 
            <Tooltip title={tech} key={tech}>
              <IconButton>
                <Icon 
                  sx={{ color: theme, paddingRight: 5, paddingTop: 3 }} 
                  as={ professionalStack[tech] }
                  fontSize='large'>  
                </Icon>
              </IconButton>
            </Tooltip>
            )
          }
          <Divider textAlign="left" sx={{ color: theme, borderColor: theme, paddingTop: '30px' }}>
            <Chip label="Hobby" sx={{ color: theme, fontWeight: 'bold' , backgroundColor: 'rgba(26, 33, 46, 0.975)' }}/>
          </Divider>
          {
            Object.keys(hobbieStack).map(tech => 
            <Tooltip title={tech} key={tech}>
              <IconButton>
                <Icon 
                  sx={{ color: theme, paddingRight: 5, paddingTop: 3, paddingBottom: '30px' }} 
                  as={ hobbieStack[tech] }
                  fontSize='large'>  
                </Icon>
              </IconButton>
            </Tooltip>
            )
          }
        </div>
      </>
    )
}

export default TechStack