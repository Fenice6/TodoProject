// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'cf4f2a7e5h'
export const apiEndpoint = `https://${apiId}.execute-api.eu-west-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-s6ry537u.auth0.com',            // Auth0 domain
  clientId: 'woNNYRW72xofeRMtFjNgnR9epUomRjHD',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
