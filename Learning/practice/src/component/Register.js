import React from 'react'
import { Button, Segment, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux"

import { useNavigate } from "react-router"


function Register() {

    var navigate = useNavigate()
    var dispatch = useDispatch()
    useSelector((state) => state.menu.activemenu)

    const beforeLogin = (e) => {
        dispatch({
            type: "ACTIVE_MENU",
            path: '/login'
        })
        navigate("/login")
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
                            <input placeholder='Enter Email' name="email" />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Enter Email' name="email" />
                        </Form.Field>
                    </Form.Group>

                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Enter Email' name="email" />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Enter Password' name="password" />
                    </Form.Field>

                    <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
                        <label style={{ cursor: "pointer" }} onClick={beforeLogin}>Already Registered ? Login Here</label>
                        <br />
                    </div>

                    <Button type='submit' color="red">Submit</Button>
                </Form>
            </Segment>
        </div>
    </>);
}

export default Register;