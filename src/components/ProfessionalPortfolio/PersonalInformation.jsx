import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TechStack from './TechStack'

import './styles.css'
import { red } from '@mui/material/colors'
const photo = require('../../photo.png')
const robelio = require('../../robelio.png') 

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
            sx={{ width: 200, height: 200 }}
            onMouseEnter={ () => setAvatar(photo) }
            onMouseLeave={ () => setAvatar(robelio) }
          />
        </div>
        <Card className="center-column" elevation={3}>
          <CardContent className="greeting">
            Hola, soy Irvyn
            <span className="wave hand" role="img">👋</span>
          </CardContent>
        </Card>
        <div className="description">
          Desarrollador de software con experiencia en el desarrollo 
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