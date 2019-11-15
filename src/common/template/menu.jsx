import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
        <nav className='mt-2'>
            <ul className="nav nav-pills nav-sidebar flex-columns" data-widget="treeview"
                role="menu" data-accordion="false">
                <MenuItem path="/" label="Home" icon="home" />
                <MenuTree label="Reviews" icon="comments">
                    <MenuItem path="reviews"
                        label="Reviews" icon="comments" />
                </MenuTree>
            </ul>
        </nav>
)