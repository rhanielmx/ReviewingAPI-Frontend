import React from 'react'
import Moment from 'react-moment'
import moment from 'moment/min/moment-with-locales'

import consts from '../consts'

Moment.globalMoment = moment;
Moment.globalLocale='pt-br'


export default props => (
    <React.Fragment>
        <div className="user-block">
            <img className="img-circle img-bordered-sm" src={props.profile} alt="user" />
            <span className="username align-middle">
                <button id="profile"
                    onClick={() => console.log(`${consts.USERS_API}/profile/${props.username}`)}>
                    {props.name}
                </button>
            </span>
        </div>
        <p>{props.description}</p>

        <p><span className="text-xs"><Moment fromNow>{props.created}</Moment></span></p>
    </React.Fragment>
)