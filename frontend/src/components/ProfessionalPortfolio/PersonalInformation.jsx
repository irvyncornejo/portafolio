import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TechStack from './TechStack'

import './styles.css'
const photo = `${process.env.REACT_APP_URL_GOOGLE_DRIVE}1pFvChviUsg7e0jNXZrcSkQRPBuzB6Oos`
const robelio = `${process.env.REACT_APP_URL_GOOGLE_DRIVE}10YzzcCV8WTA_uoSc_dNxjdndNmGGCnHC`

const ProfesionalInformation = () => {
  const [ avatar, setAvatar ] = useState(robelio)

    return (
      <>
        <div style={
          { 
            paddingTop: '20px', 
            paddingBottom: '20px'
          }
        }>
          <Avatar
            alt="Irvyn Cornejo" 
            src={ avatar } 
            sx={{ width: 250, height: 250 }}
            onMouseEnter={ () => setAvatar(photo) }
            onMouseLeave={ () => setAvatar(robelio) }
          />
        </div>
        <Card className="center-column" elevation={5}>
          <CardContent className="greeting">
            Hola, soy Irvyn
            <span className="wave hand" role="img">👋</span>
          </CardContent>
        </Card>
        <div className="description">
          Desarrollador fullstack con experiencia en el desarrollo 
          de microservicios y web apps. 
          Entusiasta del hardware, Internet de las Cosas e impresión 3D.
        </div>
        <div className='stack'>
          <TechStack />
        </div>
      </>
    )
}

export default ProfesionalInformation