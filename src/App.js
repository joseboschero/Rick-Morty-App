import './components/styles.css'
import Cards from './components/Cards.jsx'
import './components/styles.css'
import Nav from './components/Nav.jsx'
import {useState} from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Notfound from './components/Notfound.jsx'
import Login from './components/Form'


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

  function Title(){
    return(
      <div id='title-page-div'>
        <h1 id='title-page'>Rick&Morty App</h1>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<><Title /><Nav onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><Cards characters={characters} onClose={onClose} id={characters.id} /></>} />
      <Route exact path="/home" element={<><Title /><Nav onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><Cards characters={characters} onClose={onClose} id={characters.id} /></>} />
      <Route exact path="/about" element={<><Title /><Nav onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><About /></>} />
      <Route path="/detail/:id" element={<><Title /><Nav onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><Detail /></>} />
      <Route path="/login" element={<><Title /><Nav onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><Login /></>} />
      <Route path='*' element={<><Title /><Notfound /></>}/>
    </Routes>

  )
}

export default App
