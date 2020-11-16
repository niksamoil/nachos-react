import {IS_CLICKED} from '../actions/isClickedActions';

const initialState = {
    value: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_CLICKED:
            return {
                value: action.payload
            }
        default:
            return state

    }
    
}

export default reducer;