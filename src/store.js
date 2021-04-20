import { createStore } from 'redux';

const initialState = {
    email: 'azazel@inprodi.mx',
    pass: 'azazel2',
}

const reducerUS = (state = initialState, action) => {
    if (action.email === initialState.email & action.pass === initialState.pass  ){
        window.location.href = "../dashboard/users";
    }
    return state;
}


export default createStore(reducerUS);