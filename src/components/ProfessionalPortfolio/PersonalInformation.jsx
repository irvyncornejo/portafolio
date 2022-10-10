import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TechStack from './TechStack'

import './styles.css'
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
        <Card className="center-column" elevation={5}>
          <CardContent className="greeting">
            Hola, soy Irvyn
            <span className="wave hand" role="img">👋</span>
          </CardContent>
        </Card>
        <div className="description">
          Desarrollador de software con experiencia en el <strong>diseño e implementación 
          de microservicios </strong> y <strong>web apps</strong>. 
          Entusiasta del <strong>hardware</strong>, <strong>Internet de las Cosas</strong> e <strong>impresión 3D</strong>.
        </div>
        <div className='stack'>
          <TechStack />
        </div>
      </>
    )
}

export default ProfesionalInformation