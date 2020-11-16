import {combineReducers} from 'redux';
import phoneReducer from './phoneReducer';
import getDataReducer from './getDataReducer';
import isClickedReducer from './isClickedReducer';


const rootReducer = combineReducers({
    phone: phoneReducer,
    data: getDataReducer,
    isClicked: isClickedReducer
});

export default rootReducer;    

