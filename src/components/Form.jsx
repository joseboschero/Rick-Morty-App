import React from "react";
import FormB from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles.css'
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Validacion from "./validation";

export default function Login() {

    const [userData, setUserData] = useState({
        email : '',
        password : ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setUserData((prevValues) => {
            return {
            ...prevValues,
            [e.target.name]: e.target.value,
        }});

        let error = Validacion(userData)

        setErrors({...error})

        if (error.longitudEmail && error.longitudPass && error.sintaxis && error.numero && !error.vacio) {
            console.log('Datos correctos')
        } else {
            console.log('Datos incorrectos')
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        alert(`Cuenta creada correctamente con los datos: email(${userData.email}), password(${userData.password})`)
        setUserData({
            email: '',
            password: '',
        })
    }

    

    return (
        <div id="login">
            <h1>LOG IN</h1>
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
                    <Button variant="success" id="formSubmit" type="submit" >SUBMIT</Button>
                </form>
            </div>
        </div>
    )
}