import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './styles.css'

export default function Detail() {

    const params = useParams();
    const idCharacter = params.id;

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${idCharacter}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [idCharacter]);

    function CardDetail(props) {
        if (props.character) {
          return (
            <div style={{ 
                backgroundImage: `url("https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg")` 
              }} id='card'>
                <h1><span>NAME | </span>{character.name}</h1>
                <h1><span>STATUS | </span>{character.status}</h1>
                <h1><span>GENDER | </span>{character.gender}</h1>
                <h1><span>SPECIE | </span>{character.species}</h1>
            </div>
          );
        } else  {
            return (
                <div>
                    <h1>Error, details can't be rendered</h1>
                </div>
            )
        }
    }

    return (
        <div id="detail">
            <h1 style={{
                fontFamily: `'Patrick Hand SC', cursive`,
                fontSize: `100px`
            }}>#{character.id}</h1>
            <CardDetail character={character}/>
        </div>
    );
}