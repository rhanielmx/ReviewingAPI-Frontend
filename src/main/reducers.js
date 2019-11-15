import { combineReducers } from 'redux'
import ReviewReducer from '../reviews/reviewReducer'
import AuthReducer from '../auth/authReducers'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'


const rootReducer = combineReducers({
    review: ReviewReducer,
    auth: AuthReducer,
    form: formReducer,
    toastr: toastrReducer,
})

export default rootReducer