import React from 'react'

export default props => (
    <li className="nav-item has-treeview">
        <a href className="nav-link">
            <i className={`nav-icon fa fa-${props.icon}`}></i> <span className="brand-text">{props.label}</span>
            <i className="nav-icon fa fa-angle-left pull-right"></i>
        </a>
        <ul className="nav nav-treeview">
            {props.children}
        </ul>
    </li>
)