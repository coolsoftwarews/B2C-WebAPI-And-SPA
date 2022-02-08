export const environment = {
  production: false,
  urlAddress: 'https://localhost:44375',

  b2cConfig:{
    clientId: "5586f96b-48e5-4966-8d44-bbc8737157c7",
    redirectUrl: "http://localhost:4200",
    postLogoutRedirectUri: "http://localhost:4200",
    names: {
        signUpSignIn: "B2C_1_SignIn_SignUp",
        forgotPassword: "B2C_1_Password_Reset",
        editProfile: "1"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://wcgb2c.b2clogin.com/wcgb2c.onmicrosoft.com/B2C_1_SignIn_SignUp",
        },
        forgotPassword: {
            authority: "https://wcgb2c.b2clogin.com/wcgb2c.onmicrosoft.com/B2C_1_Password_Reset",
        },
        editProfile: {
            authority: "https://wcgb2c.b2clogin.com/wcgb2c.onmicrosoft.com/B2C_1_Profile_Editing"
        }
    },
    authorityDomain: "cswsb2c.b2clogin.com",
    resources: {
    scopes: ['https://cswsb2c.onmicrosoft.com/bdbad1cb-6a3f-4610-9648-b8dd97e6aee6/access_as_user', 'openid', 'offline_access'],
    uri: 'https://localhost:44375'
    }
  }
}
