import {GET_PHONE} from '../actions/phoneActions';

const initialState = {
    value: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PHONE:
            return {
                value: action.payload
            }
        default:
            return state

    }
    
}

export default reducer;