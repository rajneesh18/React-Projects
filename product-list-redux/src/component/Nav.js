import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect, useDispatch } from "react-redux"

import { activeMenu } from '../actions/menu';


function NavMenu({ active }) {
    var dispatch = useDispatch()

    var handleItemClick = (e, { path }) => {
        dispatch(activeMenu(path))
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

                <Menu.Item as={Link} to='/cart'
                    name='cart'
                    path='/cart'
                    active={active === '/cart'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>
    );
}


const mapStateToProps = (state) => ({
    active: state.menu.activemenu,
});

const Nav = connect(mapStateToProps, null)(NavMenu);

export default Nav;