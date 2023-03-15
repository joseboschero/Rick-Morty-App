import * as React from 'react';
import './styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard(props) {

   return (
      <div id='card-holder'>
            <Card sx={{ maxWidth: 300 }}>
               <CardActionArea>
                  <div id='btn-close-div'>
                     <button id='btn-close' onClick={props.onClose}>X</button>
                  </div>
                  <Link style={{ textDecoration: 'none' }} to={`/detail/${props.idCard}`}>
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
                           This is a living being of the <strong>{props.species}</strong> race.
                           Gender: <strong>{props.gender}</strong>.
                           Status: <strong>{props.status}</strong>
                           <div>
                              <span> ID: <strong>{props.idCard}</strong></span>
                           </div> 
                        </Typography>
                     </CardContent>
                  </Link>
               </CardActionArea>     
            </Card>
      </div>
      
   );
}
