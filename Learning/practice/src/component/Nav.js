import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"


function Nav() {
    var dispatch = useDispatch()
    const active = useSelector((state) => state.menu.activemenu);

    var handleItemClick = (e, { path }) => {
        dispatch({
            type: "ACTIVE_MENU",
            path: path
        })
    }

    return (
        <div className='top-nav'>

            <Menu pointing secondary>
                <Menu.Item as={Link} to='/'
                    name='home'
                    path='/'
                    active={active === '/'}
                    onClick={handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/login'
                        name='login'
                        path='/login'
                        active={active === '/login'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item as={Link} to='/register'
                        name='register'
                        path='/register'
                        active={active === '/register'}
                        onClick={handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    );
}

export default Nav;