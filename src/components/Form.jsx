import React from "react";
import FormB from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles.css'
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Validacion from "./validation";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import 'animate.css';

export default function Login(props) {

    const [userData, setUserData] = useState({
        email : '',
        password : ''
    });

    const [errors, setErrors] = useState({});

    let error = Validacion(userData)

    const handleChange = (e) => {
        setUserData((prevValues) => {
            return {
            ...prevValues,
            [e.target.name]: e.target.value,
        }});

        setErrors({...error})
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        // if (error.longitudEmail && error.longitudPass && error.sintaxis && error.numero && !error.vacio) {
        //     alert(`Cuenta logeada correctamente con los datos: email(${userData.email}), password(${userData.password})`)
        //     setUserData({
        //         email: '',
        //         password: '',
        //     })
        // } else {
        //     alert('Datos incorrectos')
        // }

        props.login(userData)
    }

    function MostrarSubmit() {
        let mostrar;

        if (error.longitudEmail && error.longitudPass && error.sintaxis && error.numero && !error.vacio) {
            mostrar = true;
        } else {
            mostrar = false;
        }

        return (
            <>
                <Button variant="success" id={mostrar ? 'formSubmit' : 'formSubmitDisabled'} type="submit" >Log In</Button>
            </>      
        )
    }

    return (
        <div id="login" className='animate__animated animate__slideInLeft'>
            <h1>LOG IN</h1>
            <h3>La cuenta es (joseboschero123@gmail.com)(1357911)</h3>
            <hr />
            <div id='formLogin'>
                <form action="" onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" className="formText">EMAIL</InputGroup.Text>
                        <FormB.Control
                        onChange={handleChange}
                        value={userData.email}
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        className="formText"
                        type="text"
                        name="email"
                        />
                    </InputGroup>

                    <div id="emailValidations">
                        <span>El mail no debe estar vacío</span>
                        {!error.vacio ? <DoneIcon id='doneIcon'/> : <CloseIcon id='closeIcon'/>}
                        <br />
                        <span>El mail no puede tener más de 35 carácteres</span>
                        {error.longitudEmail ? <DoneIcon id='doneIcon'/> : <CloseIcon id='closeIcon'/>}
                    </div>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" className="formText">PASSWORD</InputGroup.Text>
                        <FormB.Control
                            value={userData.password}
                            onChange={handleChange}
                            className="formText"
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="passwordHelpBlock"
                            name="password"
                            />
                    </InputGroup>

                    <div id="passValidations">
                        <span>La password debe tener al menos un numero</span>
                        {error.numero ? <DoneIcon id='doneIcon'/> : <CloseIcon id='closeIcon'/>}
                        <br />
                        <span>La password debe tener una longitud entre 6 y 10 characters</span>
                        {error.longitudPass ? <DoneIcon id='doneIcon'/> : <CloseIcon id='closeIcon'/>}
                    </div>

                    <MostrarSubmit />
                </form>
            </div>
        </div>
    )
}