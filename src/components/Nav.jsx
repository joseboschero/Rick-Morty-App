import * as React from 'react'
import './styles.css'
import SearchBar from './SearchBar.jsx'
import { Navbar } from "react-bootstrap"

export default function Nav(props) {

    return (
        <Navbar id='search-bar-bg' sticky='top'>
            <SearchBar onSearch={props.onSearch} onRandom={props.onRandom} cardCounter={props.cardCounter} onCloseAll={props.onCloseAll} />
        </Navbar>
    );
  }