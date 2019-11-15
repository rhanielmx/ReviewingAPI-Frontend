import axios from 'axios'
import consts from '../consts'

import { reset } from 'redux-form';

export function getList() {
    return (dispatch, getState) => {
        const isbn = getState().review.isbn
        axios.get(`${consts.REVIEWS_API}/list/${isbn}`)
            .then(resp => {
                dispatch([
                    { type: 'LIST_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {console.log(e)})
    }
}

export function getBook(query) {
    let url = ''
    query ? url = `${consts.REVIEWS_API}/book/${query}` : url = `${consts.REVIEWS_API}/book`
    return dispatch => {
        axios.get(url)
            .then(resp => {
                return dispatch([
                    { type: 'BOOK_FETCHED', payload: resp.data },
                    getList()
                ])
            })
            .catch(e => {console.log(e)})        
    }
}

export const search = () => {
    return (dispatch, getState) => {
        const query = getState().review.query
        return dispatch([
            getBook(query),
            clear()
        ])
    }
}

export const changeQuery = event => (
    { type: 'QUERY_CHANGED', payload: event.target.value }
)

export function createReview(values, token) {
    return dispatch => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                'authorization': `Bearer ${token}`
            },
            data: values,
            url: `${consts.REVIEWS_API}/register`,
        }
        axios(options)
            .then(resp => {
                return dispatch([
                    { type: 'REVIEW_CREATED', payload: resp.data },
                    getBook(values.isbn),
                    reset('reviewForm')
                ])
            })
    }
}

export const clear = () => ({ type: 'CLEAR', payload: '' })