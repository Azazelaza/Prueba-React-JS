import React, { Component } from 'react'
import {FontAwesomeIcon as Icons} from '@fortawesome/react-fontawesome';
import { faBell, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';


class Navibar extends Component {
    render(){
        return(
        <nav className="d-flex exp">
            <li><Icons icon={ faSearch }/></li>
            <li><Icons icon={ faBell }/></li>
            <li className="name-us">
                <p className="name-usp">Guillermo G.</p>
                <p className="rol-user">SuperAdmin</p>
            </li>
            <li className="icon-us"><Icons icon={ faUserCircle }/></li>
        </nav>
        )
    }
}

export default Navibar;
