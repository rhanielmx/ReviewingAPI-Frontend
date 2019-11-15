import axios from 'axios'
import consts from '../consts'

const userKey = '_user'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                const token = state.user.token
                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${token}`
                    },
                    url: `${consts.AUTH_API}/logout`,
                }
                axios(options)
                    .then(resp => {})
                localStorage.removeItem(userKey)

                return { ...state, validToken: false, user: null }
            }

        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload.user))
            return { ...state, user: action.payload.user, validToken: true }

        case 'REVIEW_CREATED':
                return state

        default:
            return state
    }
}   