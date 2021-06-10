export const environment = {
  production: false,
  urlAddress: '<webapi-url>',

  b2cConfig:{
    clientId: "<app-id>",
    redirectUrl: "http://localhost:4200",
    postLogoutRedirectUri: "http://localhost:4200",
    names: {
        signUpSignIn: "B2C_1_WCGPMS_SignUp_SignIn",
        forgotPassword: "B2C_1_WCGPMS_Password_Reset",
        editProfile: "B2C_1_WCGPMS_Profile_Editing"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://<your-b2cb-ad>.b2clogin.com/<your-b2cb-ad>.onmicrosoft.com/B2C_1_WCGPMS_SignUp_SignIn",
        },
        forgotPassword: {
            authority: "https://<your-b2cb-ad>.b2clogin.com/<your-b2cb-ad>.onmicrosoft.com/B2C_1_WCGPMS_Password_Reset",
        },
        editProfile: {
            authority: "https://<your-b2cb-ad>.b2clogin.com/<your-b2cb-ad>.onmicrosoft.com/B2C_1_WCGPMS_Profile_Editing"
        }
    },
    authorityDomain: "<your-b2cb-ad>.b2clogin.com",
    resources: {
    scopes: ['https://<your-b2cb-ad>.onmicrosoft.com/wcgpms-api/crud.all', 'openid', 'profile'],
    uri: '<webapi-url>'
    }
  }
}
