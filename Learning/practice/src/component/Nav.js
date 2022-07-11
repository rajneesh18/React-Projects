import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"


function Nav() {
    var dispatch = useDispatch()
    let pathname = window.location.pathname;
    const [activeItem, setActiveItem] = useState(pathname);


    var handleItemClick = (e, { path }) => {
        dispatch({
            type: "ACTIVE_MENU",
            path: path
        })
        setActiveItem(path)
    }

    return (<>
        <Menu pointing secondary>
            <Menu.Item as={Link} to='/'
                name='home'
                path='/'
                active={activeItem === '/'}
                onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item as={Link} to='/login'
                    name='login'
                    path='/login'
                    active={activeItem === '/login'}
                    onClick={handleItemClick}
                />
                <Menu.Item as={Link} to='/register'
                    name='register'
                    path='/register'
                    active={activeItem === '/register'}
                    onClick={handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    </>);
}

export default Nav;