import * as React from 'react'
import { SiLinkedin, SiGithub } from "react-icons/si"
import { MdFolder } from "react-icons/md"
import Icon from '@mui/material/Icon'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

import { pink } from '@mui/material/colors'

const iconsLateralMenu = {
  'Ver Github': [SiGithub, 'https://github.com/irvyncornejo'],
  'Ver LinkedIn': [SiLinkedin, 'https://www.linkedin.com/in/irvyn-s%C3%A1nchez-cornejo-2a2593191/'],
  'Ver Proyectos': [MdFolder, '/proyectos']
}

const theme = {
  color: pink.A400, 
  border: pink.A400
}

const IconButtonLateral = (props) => {
  return (
    <>
      <Tooltip title={ props.title } key={ props.key } placement="right-end">
        <IconButton href={ props.value[1] }>
          <Icon
            sx={ theme }
            as={ props.value[0] }
            fontSize='large'
          >
          </Icon>
        </IconButton>
      </Tooltip>
      <br />
    </>   
  )
}

const ReferencesLinks = () => {
    return (
      <>
        { 
          Object.keys(iconsLateralMenu).map((item) => 
            <IconButtonLateral 
              title={item} 
              key={item} 
              value={iconsLateralMenu[item]} 
            />) 
        }
      </>
    )
}

export default ReferencesLinks
