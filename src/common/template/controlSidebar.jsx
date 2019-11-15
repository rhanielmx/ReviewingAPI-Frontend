import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../../auth/authActions'
import jquery from 'jquery'

const ControlSidebar = props => (
    <aside className="control-sidebar control-sidebar-dark" >
        <div className="p-3 control-sidebar-content">
            <div className="row">
                <div className="col-3">
                    <Link to='/profile'>
                        <img className="brand-image img-circle"
                            src={props.user.profile}
                            alt="Profile"
                            style={{ maxWidth: "100%" }} />
                    </Link>
                </div>
                <div className="col-8" >
                    <div className="row">
                        <div><small>{props.user.name}</small></div>
                    </div>
                    <div className="row">
                        <div><small>{props.user.email}</small></div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <button className="nav-link" onClick={() => {
                        jquery("#control-sidebar").ControlSidebar('toggle')
                        return props.logout()
                    }}>
                        <i className="fas fa-sign-out-alt"></i> Sair
                </button>
                </div>
            </div>
        </div>
    </aside>
)

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ControlSidebar)