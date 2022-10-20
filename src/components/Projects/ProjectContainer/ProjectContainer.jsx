import { Grid, Paper } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"

const ProjectContainer = () => {
  return (
    <>
      <Container maxWidth='sm xs' sx={{paddingTop: '20px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={7}>
            <iframe 
              title="Test"
              src="https://app.vectary.com/p/2ogXdUxTLlLVZSF5OPA9Ws" 
              frameborder="0"
              width="100%" 
              height="480"
            />
          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <Paper 
              sx={{
                backgroundColor: '#1a212ef9', 
                color: '#efefefff', 
                padding: '10px', 
                textAlign: 'justify'
              }}
            >
              <h1>Test Título</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ProjectContainer