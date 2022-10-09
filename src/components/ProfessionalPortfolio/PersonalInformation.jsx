import React from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TechStack from './TechStack'

import './styles.css'
const avatar = require('../../robelio.png')

const ProfesionalInformation = () => {
    return (
        <>
          <Avatar
            alt="Irvyn Cornejo" 
            src={ avatar } 
            sx={{ width: 200, height: 200, paddingTop: '20px', paddingBottom: '20px' }}
          />
          <Card className="center-column" elevation={5}>
            <CardContent className="greeting">
              <Typography variant="h4">
                Hola, soy Irvyn
                <span className="wave hand" role="img">👋</span>
              </Typography>
            </CardContent>
          </Card>
          <div className="description">
            Desarrollador de software con experiencia en el <strong>diseño e implementación de microservicios </strong>
            y <strong>web apps</strong>. Entusiasta del <strong>hardware</strong>, <strong>Internet de las Cosas</strong> e <strong>impresión 3D</strong>.
          </div>
          <div className='stack'>
            <TechStack />
          </div>
        </>
    )
}

export default ProfesionalInformation