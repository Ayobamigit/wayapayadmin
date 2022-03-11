const baseUrl = () => {
    return process.env.REACT_APP_BASE_URL;
}

const secondaryUrl = () => {
    return {
        auth: 'auth-service/api/v1',
        terminal: 'terminal-service/api/v1'
    }
}

//Auth service

//Sign in
export const signIn = `${baseUrl()}/${secondaryUrl().auth}/auth/login`;

//Sign up
export const signUp = `${baseUrl()}/${secondaryUrl().auth}/auth/create-corporate`;

//Verify OTP
export const verify = `${baseUrl()}/${secondaryUrl().auth}/auth/verify-otp`;


//Resend OTP
export const resend = `${baseUrl()}/${secondaryUrl().auth}/auth/resend-otp/signup/`;



//business types 
export const businessTypesList = `${baseUrl()}/${secondaryUrl().auth}/business/type/find/all`;


//Terminal Services
export const requestTerminal = `${baseUrl()}/${secondaryUrl().terminal}/terminals/request`;

export const createterminal = `${baseUrl()}/${secondaryUrl().terminal}/terminals/createterminal`;
