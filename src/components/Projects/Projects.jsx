import React from "react"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'

const pinkColor = '#00c5b9'
const mockProjects = [
	{
		name: "Iza",
		description: "Robot Educativo para la enseñanza de STEAM",
		img: "https://miro.medium.com/max/720/1*XOSduao7nmUZUpRmjt4zeg.jpeg",
		references: ['Arduino Nano', 'C++', 'Bloques', 'Sensores', 'Actuadores']
	},
	{
		name: "Chimalli",
		description: "Shield para Raspberry Pi",
		img: "https://miro.medium.com/max/720/1*XOSduao7nmUZUpRmjt4zeg.jpeg",
		references: ['Raspberry Pi', 'Python ', 'IoT', 'Sensores', 'Actuadores']
	}
]

const Project = (props) => {
    return (
			<Paper sx={{ background: '#1a212e' }}>
				<Card sx={{ maxWidth: '100%', minHeight: '250px' }}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="140"
							image={props.item.img}
							alt={props.item.name}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{props.item.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{props.item.description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Paper>
    )
}

const Projects = () => {
    return (
      <>
        <Divider textAlign="left" sx={{ color: pinkColor, borderColor: pinkColor, paddingTop: '30px', paddingBottom: '30px' }}>
            <Chip label="Projects" sx={{ color: '#00c5b9', fontWeight: 'bold' , backgroundColor: 'rgba(26, 33, 46, 0.975)' }}/>
        </Divider>
        {
          <Carousel>
            { mockProjects.map((item, value) => <Project key={value} item={item} /> ) }
          </Carousel>
        }
      </>
    )
}

export default Projects