const INITIAL_STATE = {book:[], list:[], isbn:'', query: ''}

export default function(state = INITIAL_STATE, action){
    switch(action.type){    
        case 'LIST_FETCHED':
            return { ...state, list: action.payload }
        case 'BOOK_FETCHED':
            return { ...state, book: action.payload, isbn: action.payload.isbn_13, loading: action.payload.loading }     
        case 'REVIEWS_SEARCHED':
            return { ...state, isbn: action.payload }
        case 'QUERY_CHANGED':
            return { ...state, query: action.payload }
        case 'CLEAR':
            return INITIAL_STATE
        default:
            return state
    }
}