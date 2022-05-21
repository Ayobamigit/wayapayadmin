const baseUrl = () => {
    return {
        auth: process.env.REACT_APP_BASE_URL_AUTH,
        terminal: process.env.REACT_APP_BASE_URL_TERMINAL,
        transactions: process.env.REACT_APP_BASE_URL_TRANSACTION,
        dispute: process.env.REACT_APP_BASE_URL_DISPUTE,
        tech: process.env.REACT_APP_BASE_URL_TECH,

    }
}

// const secondaryUrl = () => {
//     return {
//         auth: 'auth-service/api/v1',
//     }
// }

//Auth service

//Sign in
export const signIn = `${baseUrl().auth}/auth/login`;

//Sign up
export const signUp = `${baseUrl().auth}/auth/create-corporate`;

//Password reset
export const sendOtp = `${baseUrl().auth}/password/forgot-password/byEmail`;
export const resetPassword = `${baseUrl().auth}/password/forgot-password`;

//Verify OTP
export const verify = `${baseUrl().auth}/auth/verify-otp`;


//Resend OTP
export const resend = `${baseUrl().auth}/auth/resend-otp/signup/`;



//business types 
export const businessTypesList = `${baseUrl().auth}/business/type/find/all`;

//User service
export const allUsers = `${baseUrl().auth}/admin/users/corporate-profile`;


//Terminal Services
export const requestTerminal = `${baseUrl().terminal}/terminals/request`;

export const createterminal = `${baseUrl().terminal}/terminals/createterminal`;

export const updateterminal = `${baseUrl().terminal}/terminals/updateterminal`;

export const issueterminal = `${baseUrl().terminal}/terminals/issuerterminal`;

export const viewAllTerminalRequests = `${baseUrl().terminal}/terminals/viewallrequestterminals`;

export const updateTerminalRequests = `${baseUrl().terminal}/terminals/updateterminalrequest`;

export const viewAllTerminals = `${baseUrl().terminal}/terminals/viewallterminaladmin`;

export const activateTerminal = `${baseUrl().terminal}/terminals/activateterminal`;


//Transaction Services

export const allTransactions = `${baseUrl().transactions}/transactions/viewalltransasctions`;

export const viewTransaction = `${baseUrl().transactions}/transactions/viewonetransactionsbyuser`;

export const transactionStats = `${baseUrl().transactions}/transactions/transactioncount`;

export const revenueStats = `${baseUrl().dispute}/api/v1/settlement/getTransactionStats`;

//Dispute service
export const allWayaDisputes = `${baseUrl().dispute}/wayaposDisputes/viewAllDisputes`;

export const allAuthDisputes = `${baseUrl().dispute}/auth-notification-dispute/viewAllDisputes`;

export const createAuthDisputes = `${baseUrl().dispute}/auth-notification-dispute/createDispute`;

export const allOtherDisputes = `${baseUrl().dispute}/othersDispute/viewAllDisputes`;

export const createOtherDispute = `${baseUrl().dispute}/othersDispute/createDispute`;

//settlement service
export const settlementTransactions = `${baseUrl().dispute}/api/v1/settlement/adminviewall`;


//Tech Service

//Routing rules
export const allRouting = `${baseUrl().tech}/routingrule/viewall`;
export const createRouting = `${baseUrl().tech}/routingrule/create`;
export const updateRouting = `${baseUrl().tech}/routingrule/update`;
export const deleteRouting = `${baseUrl().tech}/routingrule/delete`;


//Pricing
export const allPricing = `${baseUrl().tech}/pricing/viewall`;
export const createPricing = `${baseUrl().tech}/pricing/create`;
export const updatePricing = `${baseUrl().tech}/pricing/update`;


//Stations
export const allStation = `${baseUrl().tech}/station/viewall`;
export const createStation = `${baseUrl().tech}/station/create`;
export const updateStation = `${baseUrl().tech}/station/update`;
export const deleteStation = `${baseUrl().tech}/station/delete`;

//Scheme
export const allScheme = `${baseUrl().tech}/scheme/viewAllSchemes`;
export const createScheme = `${baseUrl().tech}/scheme/create`;
export const updateScheme = `${baseUrl().tech}/scheme/update`;
export const deleteScheme = `${baseUrl().tech}/scheme/delete`;
