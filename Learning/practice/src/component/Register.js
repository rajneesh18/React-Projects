import React, { useState } from 'react'
import { Button, Segment, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux"

import { useNavigate } from "react-router"


function Register() {

    var navigate = useNavigate()
    var dispatch = useDispatch()
    useSelector((state) => state.menu.activemenu)

    const beforeLogin = (e) => {
        e.preventDefault();
        dispatch({
            type: "ACTIVE_MENU",
            path: '/login'
        })
        navigate("/login")
    }

    const user = {}
    
    let getFirstName = (e) => {
        let val = e.target.value;
        user.firstname = val;
    }
    let getLastName = (e) => {
        let val = e.target.value;
        user.lastname = val;
    }
    let getEmail = (e) => {
        let val = e.target.value;
        user.email = val;
    }
    let getPassword = (e) => {        
        let val = e.target.value;
        user.password = val;
    }

    let registerUser = (e) => {
        console.warn(user);
    }
    



    return (<>
        <div>

            <Segment style={{ width: "400px", margin: "20px auto" }}>
                <div style={{ display: "flex", flexDirection: "column", marginBottom: "25px" }}>
                    <div style={{ margin: "auto", textAlign: "center" }}>

                        <h2 style={{ margin: "0px" }}>Register Form</h2>
                        <p>Place to Register</p>
                    </div>
                </div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='Enter Email' name="firstname" onChange={getLastName} />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Enter Email' name="lastname" onChange={getFirstName} />
                        </Form.Field>
                    </Form.Group>

                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Enter Email' name="email" onChange={getEmail} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Enter Password' type="password" name="password" onChange={getPassword}/>
                    </Form.Field>

                    <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
                        <label style={{ cursor: "pointer" }} onClick={beforeLogin}>Already Registered ? Login Here</label>
                        <br />
                    </div>

                    <Button type='button' color="red" onClick={registerUser} >Submit</Button>
                </Form>
            </Segment>
        </div>
    </>);
}

export default Register;