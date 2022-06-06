import {ERROR_AUTH, ERROR_REGISTER, DEFAULT_AUTH, DEFAULT_REGISTER} from "../constants";

const appState = {
    name: 'Privatyze',
    errors: {
        auth: false,
        register: false
    }
}

export const appReducer = (state = appState, action) => {
    switch (action.type){
        case DEFAULT_AUTH: {
            return {
                ...state,
                errors: {
                    ...state.errors,
                    auth: false
                }
            }
        }
        case DEFAULT_REGISTER: {
            return {
                ...state,
                errors: {
                    ...state.errors,
                    register: false
                }
            }
        }
        case ERROR_AUTH: {
            return {
                ...state,
                errors: {
                    ...state.errors,
                    auth: true
                }
            }
        }
        case ERROR_REGISTER: {
            return {
                ...state,
                errors: {
                    ...state.errors,
                    register: true
                }
            }
        }
        default: {
            return state;
        }
    }
}
