import './components/styles.css'
import Cards from './components/Cards.jsx'
import './components/styles.css'
import Nav from './components/Nav.jsx'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Notfound from './components/Notfound.jsx'
import Login from './components/Form'


function App () {
  
  const [access, setAccess] = useState(false);
  const EMAIL = 'joseboschero123@gmail.com'
  const PASSWORD = '1357911'
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      alert('Datos Correctos, se lo redigira al home')
      setAccess(true);
      navigate('/home');
    } else {
      alert('Datos incorrectos')
    }
  }

  function logOut() {
    alert('Se ha cerrado la cuenta correctamente')
    setAccess(false);
    navigate('/login');
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

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

  function Space(){
    return(
      <div id='space'>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<><Space /><Nav logOut={logOut} logged={access} onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><Cards characters={characters} onClose={onClose} id={characters.id} /></>} />
      <Route exact path="/home" element={<><Space /><Nav logOut={logOut} logged={access} onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><Cards characters={characters} onClose={onClose} id={characters.id} /></>} />
      <Route exact path="/about" element={<><Space /><Nav logOut={logOut} logged={access} onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><About /></>} />
      <Route path="/detail/:id" element={<><Space /><Nav logOut={logOut} logged={access} onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><Detail /></>} />
      <Route path="/login" element={<><Space /><Nav logOut={logOut} logged={access} onSearch={onSearch} onRandom={onRandom} cardCounter={characters.length} onCloseAll={onCloseAll} /><Login login={login} /></>} />
      <Route path='*' element={<><Space /><Notfound /></>}/>
    </Routes>

  )
}

export default App
