import {GET_DATA} from '../actions/getDataActions';


const initialState = {
    data: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA:
            return {
                data: action.payload
            }
        default:
            return state

    }
    
}

export default reducer;