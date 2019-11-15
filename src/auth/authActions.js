import axios from 'axios'
import consts from '../consts'
import {clear} from '../reviews/reviewActions'

function submit(values, url) {
    return dispatch => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: values,
            url: url,
        }
        axios(options)
            .then(resp => {
                dispatch([                
                { type: 'USER_FETCHED', payload: resp.data }
            ])})
            .catch(e => console.log(e))
    }
}

export function login(values) {
    return submit(values, `${consts.AUTH_API}/login`)
}

export function register(values) {
    return submit(values, `${consts.AUTH_API}/register`)
}

export function logout() {
    return [clear(), { type: 'TOKEN_VALIDATED', payload: false }]
    // dispatch => {
    //     const options = {
    //         method: 'POST',
    //         headers: { 
    //             'content-type': 'application/json',
    //             'authorization': `Bearer ${token}` },
    //         url: `${consts.AUTH_API}/logout`,
    //     };
    //     axios(options)
    //         .then(resp => {
    //             dispatch({ type: 'TOKEN_VALIDATED', payload: false })
    //         })
    // }
}



export function validateToken(token) {
    return dispatch => {
        if (token) {
            const options = {
                method: 'POST',
                headers: { 
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'authorization': `Bearer ${token}` },
                url: `${consts.AUTH_API}/validateToken`,
            };

            axios(options)
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false, sk:token })
        }
    }
}