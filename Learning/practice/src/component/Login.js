import React from 'react'
import { Button, Segment, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux"

import {useNavigate} from "react-router"


function Login() {
    var navigate = useNavigate()
    var dispatch = useDispatch()
    
    useSelector((state) => state.menu.activemenu )
    
    const beforeRegister = (e) => {
        dispatch({
            type: "ACTIVE_MENU",
            path: '/register'
        })
        navigate("/register") 
    }

    return (<>
        <div>

            <Segment style={{ width: "400px", margin: "20px auto" }}>
                <div style={{ display: "flex", flexDirection: "column" , marginBottom: "25px" }}>
                    <div style={{ margin: "auto", textAlign:"center" }}>

                        <h2 style={{margin:"0px"}}>Login Form</h2>
                        <p>Place to authenticate</p>
                    </div>
                </div>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Enter Email' name="email" />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Enter Password' name="password" />
                    </Form.Field>

                    <div style={{marginBottom: "10px", fontWeight: "bold"}}>
                        <label style={{cursor:"pointer"}} onClick={beforeRegister}>Not have account ? Register Here</label>
                        <br />
                    </div>

                    <Button type='submit' color="red">Submit</Button>
                </Form>
            </Segment>
        </div>
    </>);
}

export default Login;