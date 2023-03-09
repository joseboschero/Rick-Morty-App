import Card from './Card';
import './styles.css';
import Stack from '@mui/material/Stack';

export default function Cards(props) {
   const { characters } = props;

   return (
      <Stack spacing={2} direction="row" id='filas-cards'>
         
            {characters.map((character, index) => <Card
               key={index}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => props.onClose(character.id)}
               id={props.id}
               idCard={character.id}
               status={character.status}
            />)}
         
      </Stack>
   );
}
