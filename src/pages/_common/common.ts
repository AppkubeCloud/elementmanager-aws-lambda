// import { config } from "../../config";
export const CommonService = {
  getBasicAuthEncodedString,
  getParameterByName,
};

function getBasicAuthEncodedString(userId: any, password: any) {
  var credentials = userId + ':' + password;
  var encodedString = btoa(credentials);
  var basicAuth = 'Basic ' + encodedString;
  return basicAuth;
}

function getParameterByName(name: any, url: any) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
