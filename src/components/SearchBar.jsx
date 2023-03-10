import * as React from "react";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./styles.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';

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
      <div>
      </div>
    );
  }
}

export default function BasicTextFields(props) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div id="search-bar">
        <TextField id="filled-basic" label="Insert ID" variant="filled" onChange={handleChange} />
      <div id="search-icon">
        <AddCircleIcon onClick={() => props.onSearch(id)} />
      </div>
      <div id="random-char">
         <Button variant="contained" color="success" onClick={() => props.onRandom()}>
            Random Character
         </Button>
      </div>
      <div id="card-counter">
         <Chip icon={<ViewAgendaIcon />} label={"Cards: " + props.cardCounter} />
      </div>
      <MostrarDeleteAll mostrar={true} onCloseAll={props.onCloseAll} cantCards={props.cardCounter}></MostrarDeleteAll>
    </div>
  );
}
