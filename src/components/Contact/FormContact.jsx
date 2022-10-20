import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Icon, IconButton, Tooltip } from '@mui/material'
import { pink } from '@mui/material/colors'
import { MdMail } from "react-icons/md"

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
      <Tooltip title='Contactar'>
        <IconButton onClick={ () => setOpen(!open) } >
          <Icon
            sx={{ color: pink.A400, border: pink.A400 }}
            as={ MdMail }
            fontSize='large'
          />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <DialogTitle>Contactar</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontFamily: 'Oswald'}}>
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
          <TextField
            id="multiline"
            label="Descripción..."
            multiline
            maxRows={4}
            fullWidth
            variant="standard"
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)}>Cancelar</Button>
          <Button onClick={() => setOpen(!open)}>Contactar</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FormContact
