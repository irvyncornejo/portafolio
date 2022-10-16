import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { pink } from '@mui/material/colors'

import '../ProfessionalPortfolio/styles.css'

const theme = {
  background: 'rgba(26, 33, 46, 0.975)',
  color: '#efefefff',
  fontFamily: 'Oswald'
}

const FormContact = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button 
        variant="outlined"
        sx={{ color: pink.A400, border: pink.A400 }} 
        onClick={ () => setOpen(!open) }
      >
        Contactar
      </Button>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <DialogTitle sx={{...theme}} >Contactar</DialogTitle>
        <DialogContent sx={{...theme}}>
          <DialogContentText sx={{color: '#efefefff', fontFamily: 'Oswald'}}>
            Hola, por favor ingresa tu email, 
            número teléfonico y alguna descripción 
            para poder entender la razón de contacto.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Correo Electrónico"
            type="email"
            fullWidth
            variant="standard"
            color='primary'
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Teléfono"
            type="tel"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions sx={{...theme}}>
          <Button onClick={() => setOpen(!open)}>Cancel</Button>
          <Button onClick={() => setOpen(!open)}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FormContact
