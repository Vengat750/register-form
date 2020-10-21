import { SET_OTP, SET_GENDER, SET_FORMVALUES, SET_REGION, SET_COUNTRY,SET_LOGO } from '../actions/index';

function formReducer(state = {}, action) {
    switch (action.type) {
        case SET_OTP:
            state = { ...state, 'otp': action.payload }
            return state;
        case SET_GENDER:
            state = { ...state, 'gender': action.payload }
            return state;
        case SET_REGION:
            state = { ...state, 'region': action.payload }
            return state;
        case SET_COUNTRY:
            state = { ...state, 'country': action.payload }
            return state;
            case SET_LOGO:
            state = { ...state, 'logo': action.payload }
            return state;
        case SET_FORMVALUES:
            state = { ...state, ...action.payload }
            return state;
        default:
            return state;
    }
};

export default formReducer;
