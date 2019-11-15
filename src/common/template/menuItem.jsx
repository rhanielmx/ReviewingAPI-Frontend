import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <li className='nav-item'>
        <Link to={props.path} className='nav-link nav-collapse-hide-child'>
            <i className={`nav-icon fa fa-${props.icon}`}></i> <span className="brand-text">{props.label}</span>
        </Link>
    </li>
)