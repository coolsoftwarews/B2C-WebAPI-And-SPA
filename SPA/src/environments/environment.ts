export const environment = {
    production: false,
    b2cConfig:{
      clientId: "<app-id>",
      redirectUrl: "http://localhost:4200",
      postLogoutRedirectUri: "http://localhost:4200",
      names: {
          signUpSignIn: "<b2c-policy>"
      },
      authorities: {
          signUpSignIn: {
              authority: "https://<tenant-name>.b2clogin.com/cswsb2c.onmicrosoft.com/<b2c-policy>",
          }
      },
      authorityDomain: "https://<tenant-name>.b2clogin.com",
      resources: {
      scopes: ['<your-webapi-scope>', 'openid'],
      uri: 'https://localhost:44303'
      }
    }
  }
  