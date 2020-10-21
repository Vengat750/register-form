export const SET_OTP = 'SET_OTP';
export const SET_GENDER = 'SET_GENDER';
export const SET_FORMVALUES = 'SET_FORMVALUES';
export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_REGION = 'SET_REGION';
export const SET_LOGO = 'SET_LOGO';

export function setOtp(otp) {
    const action = {
        type: SET_OTP,
        payload: otp
    }
    return action
}

export function setGender(gender) {
    const action = {
        type: SET_GENDER,
        payload: gender
    }
    return action
}

export function setFormValues(values) {
    const action = {
        type: SET_FORMVALUES,
        payload: values
    }
    return action
}

export function setCountry(country) {
    const action = {
        type: SET_COUNTRY,
        payload: country
    }
    return action
}

export function setRegion(region) {
    const action = {
        type: SET_REGION,
        payload: region
    }
    return action
}

export function setLogo(logo) {
    const action = {
        type: SET_LOGO,
        payload: logo
    }
    return action
}



