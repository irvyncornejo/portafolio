import * as React from 'react'
import { SiLinkedin, SiGithub } from "react-icons/si"
import { MdFolder } from "react-icons/md"
import Icon from '@mui/material/Icon'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

import '../../App.css'
import { pink } from '@mui/material/colors'

const iconsLateralMenu = {
  'Ver Github': [SiGithub, 'https://github.com/irvyncornejo'],
  'Ver LinkedIn': [SiLinkedin, 'https://www.linkedin.com/in/irvyn-s%C3%A1nchez-cornejo-2a2593191/'],
  'Ver Proyectos': [MdFolder, '#']
}

const IconButtonLateral = (props) => {
  return (
    <>
      <Tooltip title={ props.title }>
        <IconButton href={ props.value[1] }>
          <Icon
            sx={{ color: pink.A400, border: pink.A400 }}
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

const IconMenu = () => {
  return (
    <>
      <div className='icon-bar'>
        { 
          Object.keys(iconsLateralMenu).map((item) => 
            <IconButtonLateral title={item} value={iconsLateralMenu[item]} />) 
        }
      </div>
    </>
  )
}

export default IconMenu