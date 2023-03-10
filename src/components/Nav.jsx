import * as React from 'react'
import './styles.css'
import SearchBar from './SearchBar.jsx'

export default function Nav(props) {

    return (
        <div id='search-bar-bg'>
            <SearchBar onSearch={props.onSearch} onRandom={props.onRandom} cardCounter={props.cardCounter} onCloseAll={props.onCloseAll} />
        </div>
    );
  }