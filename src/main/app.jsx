import React from 'react'
import { HashRouter } from 'react-router-dom'

import Navbar from '../common/template/navbar'
import Footer from '../common/template/footer'
import Routes from './routes'
import ControlSidebar from '../common/template/controlSidebar'
import Messages from '../common/msg/messages'

export default props => (
    <HashRouter>
        <div className="wrapper">
            <Navbar />
            <Routes />
            <Footer />
            <ControlSidebar />
            <Messages />
        </div>
    </HashRouter>
)