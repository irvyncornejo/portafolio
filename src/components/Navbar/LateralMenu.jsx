import * as React from 'react';
import Button from '@mui/material/Button'
import { SiLinkedin, SiGithub } from "react-icons/si"
import { GoProject } from "react-icons/go"
import '../../App.css'
import { pink } from '@mui/material/colors'
import Icon from '@mui/material/Icon'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
const IconMenu = () => {
  return (
    <>
      <div className='icon-bar'>
        <Button 
          variant="outlined" 
          startIcon={<SiGithub sx={{fontSize: 'large'}}/>}
          size="large"
          sx={{color: pink.A400, border: pink.A400, fontSize: 'large' }}
          href='https://mui.com/system/getting-started/the-sx-prop/'
        >
        </Button>
        <Tooltip>
          <IconButton>
            <Icon 
              sx={{color: pink.A400, border: pink.A400, fontSize: 'large' }} 
              as={ SiGithub }
              fontSize='large'>  
            </Icon>
          </IconButton>
        </Tooltip>
        <br />
        <Button 
          variant="outlined" 
          startIcon={<SiLinkedin />} 
          sx={{color: pink.A400, border: pink.A400, fontSize: 'large' }}
          href='https://mui.com/system/getting-started/the-sx-prop/'
        >
        </Button>
        <br />
        <Button 
          variant="outlined" 
          startIcon={<GoProject />} 
          sx={{color: pink.A400, border: pink.A400, fontSize: 'large' }}
          href='https://mui.com/system/getting-started/the-sx-prop/'
        >
        </Button>
        <br />
      </div>
    </>
  )
}

export default IconMenu