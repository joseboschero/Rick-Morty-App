import Card from './Card';
import './styles.css';
import Stack from '@mui/material/Stack';

export default function Cards(props) {
   const { characters } = props;
   return (
      <Stack spacing={2} direction="row">
         
            {characters.map(c => <Card 
               name={c.name}
               species={c.species}
               gender={c.gender}
               image={c.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />)}
         
      </Stack>
   );
}
