import * as React from 'react';
import './styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useThemeProps } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
   <div id='card-holder'>

         <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
            <CardMedia
               component="img"
               height="300"
               image={props.image}
               alt="Imagen personaje"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {props.name}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Este es un ser vivo de la raza: {props.species}, de género: {props.gender}.
               </Typography>
            </CardContent>
            </CardActionArea>
         </Card>
   </div>
   
  );
}
