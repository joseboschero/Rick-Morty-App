import * as React from 'react'
import './styles.css'
import SearchBar from './SearchBar.jsx'
import { Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function MostrarDeleteAll(props) {
    if (props.cantCards >= 2) {
      return (
        <div id="delete-all">
          <Button onClick={props.onCloseAll} color="error" variant="contained" startIcon={<DeleteIcon />}>
            Delete All
          </Button>
        </div>
      );
    } else {
      return (
        <div id='delete-all'>
        </div>
      );
    }
  }

export default function Nav(props) {

    return (
        <>
            <Navbar sticky='top' id='searchbar-delete'>
                <Navbar id='search-bar-bg'>
                    <div id='home-about'>
                    <Link to='/about'>
                        <Button color='success' variant='contained' >About</Button>
                    </Link>
                    </div>
                    <div id='home-about'>
                    <Link to='/home'>
                        <Button color='success' variant='contained' >Home</Button>
                    </Link>
                    </div>
                    <SearchBar onSearch={props.onSearch} onRandom={props.onRandom} cardCounter={props.cardCounter} onCloseAll={props.onCloseAll} />
                </Navbar>
                <MostrarDeleteAll mostrar={true} onCloseAll={props.onCloseAll} cantCards={props.cardCounter}></MostrarDeleteAll>
            </Navbar> 
        </>   
    );
  }