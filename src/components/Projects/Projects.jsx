import React from "react"
import { 
  CardActionArea, 
  Grid,
  CardMedia, 
  CardContent, 
  Card, 
  Container,
  Chip,
  Divider, 
  Box
} from '@mui/material'

const mockProjects = [
	{
		name: "Iza",
		description: "Robot Educativo para la enseñanza de STEAM",
		img: "https://drive.google.com/uc?export=view&id=1WJEKmF4CoVzNp4sEO04E1GuEgW_jQi2T",
		references: ['Arduino Nano', 'C++', 'Bloques', 'Sensores', 'Actuadores']
	},
	{
		name: "Chimalli",
		description: "Shield para Raspberry Pi",
		img: "https://drive.google.com/uc?export=view&id=1R6nUrc0-2BKJXVB-f0EF9-zqNS5gW92A",
		references: ['Raspberry Pi', 'Python ', 'IoT', 'Sensores', 'Actuadores']
	}
]

const Project = (props) => {
    return (
			<Grid item xs={12} md={4} lg={3} key={props.item.name}>
        <Card sx={{ maxWidth: '100%', minHeight: '100%', backgroundColor: 'transparent' }}>
					<CardActionArea sx={{backgroundColor: 'transparent'}} href='/proyecto'>
						<CardMedia
							component="img"
							height="160"
							image={props.item.img}
							alt={props.item.name}
						/>
						<CardContent sx={{backgroundColor: 'transparent', color: '#00c5b9'}}>
								<h1>{props.item.name}</h1>
								<h3>{props.item.description}</h3>
                <Divider/>
                <Box sx={{paddingTop: '10px'}}>
                  {
                    props.item.references.map((ref) => <Chip label={ref} sx={{color: '#f50057'}}/>)
                  }
                </Box>
						</CardContent>
					</CardActionArea>
				</Card>
      </Grid>
    )
}

const Projects = () => {
    return (
      <>
        <Container maxWidth='sm xs' sx={{paddingTop: '20px'}}>
          <Grid container spacing={2}>
          {
        	  mockProjects.map((item, value) => <Project key={value} item={item} /> )
          }
          </Grid>
        </Container>
      </>
    )
}

export default Projects