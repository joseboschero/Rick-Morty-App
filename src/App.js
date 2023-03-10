import './App.css'
import Cards from './components/Cards.jsx'
import './components/styles.css'
import Nav from './components/Nav.jsx'
import {useState} from 'react'
import axios from 'axios'


function App () {
  
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    let existe = characters.filter(char => char.id == parseInt(id))

    if (existe.length == 0) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('¡No hay personajes con este ID!');
        }
      });
    } else {
      alert('Error! Este personaje ya existe!!')
    }
 }

  const onClose = (id) => {
    let allChar = characters.filter(character => character.id != parseInt(id))
    setCharacters(allChar)
  }

  const onRandom = () => {
    let numRandom = Math.floor(Math.random() * 827)
    onSearch(numRandom)
  }

  const onCloseAll = () => {
    setCharacters([])
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <h1 id='title-page'>Rick&Morty App</h1>
      <Nav onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} />
      <div>
        <Cards characters={characters} onClose={onClose} id={characters.id} />
      </div>     
    </div>
  )
}

export default App
