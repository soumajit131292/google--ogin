/* The URLS are picked from .env file in root folder, assigned to variables here */
const daasManager = `${process.env.REACT_APP_daasManager}`;
const apiServer = `${process.env.REACT_APP_apiServer}`;
const securityApi = `${process.env.REACT_APP_securityApi}`;

const urlListOfCloud = apiServer + "api/v1/cloudprovider/";
//for admin login only
const urlBuilds = apiServer + "api/v1/build/"
//const urlListOfRegionsForSelectedCloud = apiServer+"api/v1/cloudproviderregions/"
//const urlHWConfigs = apiServer+"api/v1/configs/"
const urlInstanceListForSelectedRequestID = apiServer + "api/v1/instances/search?requestId="
//const urlOSList = apiServer+"api/v1/operatingsystems/"
const urlRequestListForUser = apiServer + "api/v1/request/searchbyuserid?userId="
const urlToolsListForSelectedOS = apiServer + "api/v1/tools/"
const urlListOfRegionsForSelectedCloud = apiServer + "api/v1/cloudproviderregions/search?cloudProviderId="
const urlHWConfigs = apiServer + "api/v1/configs/search?cloudProviderRegionId="
const urlOSList = apiServer + "api/v1/operatingsystems/search?regionId="
const createRequest = daasManager + "workflow/request/template"
const terminateInstanceAPIURL = daasManager + "workflow/request/terminate/"
const loginAPI = securityApi+"login";

export default function makeHTTPCall(options) {
    console.log("i am in default makeHttpMethod")
    console.log("inside makehttp call" + options.url);
    return fetch(options.url)
        .then(res => res.json())
}

export function login(googleAuthtoken) {
    console.log("login api called called : ", loginAPI);
    return fetch(loginAPI, {
        method: 'POST',
        headers: { 'token': googleAuthtoken },
    });
}

//for add user
const urlAddUser = securityApi + "register";
export function addUser(user) {
    console.log("Add user called : ", urlAddUser);
    return fetch(urlAddUser, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
}

//getAllData
const urlAllUser = securityApi + "getAllUsers";
export function getAllUser(token) {
    return fetch(urlAllUser, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            token: JSON.stringify(token)
        }
    });
}
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
// Cloud Provider API
export function getCloudProvidersFromAPI() {
    return makeHTTPCall({
        url: urlListOfCloud
    })
        .then((data) => {
            console.log("getCloudProviderData " + data);
            return data;
        })
}

//Cloud Provider Region
export function getCloudProvidersRegionsFromAPI() {
    return makeHTTPCall({
        url: urlListOfRegionsForSelectedCloud
    })
        .then((data) => {
            console.log("getCloudProvidersRegionsFromAPI()   " + data);

            return data;
        })
}

//Cloud Provider Configuration
export function getConfigsFromAPI() {
    return makeHTTPCall({
        url: urlHWConfigs
    })
        .then((data) => {
            console.log("getConfig()  " + data);

            return data;
        })
}

//Get All Request Based On UserId
export function getRequestsFromAPI(userId) {
    let url = urlRequestListForUser + userId;
    return makeHTTPCall({
        url: url
    })
        .then((data) => {
            console.log("Request list in service  " + data);

            return data;
        })
    //return getRequestData();

}

//Get All Instances Based On RequestId
export function getInstancesFromAPI(requestId) {
    console.log("inside the service : ", requestId)
    let url = urlInstanceListForSelectedRequestID + requestId;
    return makeHTTPCall({
        url: url
    })
        .then((data) => {
            console.log("getConfig()  " + data);

            return data;
        })
    //return getInstanceData();
}
//Get Operating System
export function getOperatingSystemsFromAPI() {
    return makeHTTPCall({
        url: urlOSList
    })
        .then((data) => {
            console.log("getConfig()  " + data);

            return data;
        })
}

//Get All Tools
export function getToolsFromAPI() {
    return makeHTTPCall({
        url: urlToolsListForSelectedOS
    })
        .then((data) => {
            console.log("getConfig()  " + data);

            return data;
        })
}

// Not used; API meant for future use
export function getUsersFromAPI() {
    return makeHTTPCall({
        url: apiServer + "api/v1/user/"
    })
        .then((data) => {
            console.log("getConfig()  " + data);

            return data;
        })
}

// New Changes
export function createRequestAPI(data) {
    return fetch(createRequest, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

//Terminate Instances
export function terminateInstanceAPI(data) {
    console.log("inside the terminate Instace api service : " + data);

    return fetch(terminateInstanceAPIURL + data, {
        method: 'DELETE',
    });
}

//Call Cloud Information API
export function getCloudInfoFromAPI(providerId, num) {
    console.log("number send by hardcoded : " + providerId);
    let mainUrl = "";
    if (num === 1)
        mainUrl = urlListOfRegionsForSelectedCloud + providerId;
    else if (num === 2)
        mainUrl = urlHWConfigs + providerId;
    else if (num === 3)
        mainUrl = urlOSList + providerId;

    return makeHTTPCall({
        url: mainUrl
    })
        .then((data) => {
            console.log("getCloudProvidersRegionsFromAPI()   " + data);
            return data;
        })
}

// call to build
export function getBuildsFromAPI() {
    return makeHTTPCall({
        url: urlBuilds
    })
        .then((data) => {
            console.log("getBuilds()  " + data);
            return data;
        })
}

export function getData() {
   
    let token = sessionStorage.getItem('token');
    console.log("Get user from backend : " + token);
    return fetch(securityApi + "getUserRole", {
        method: 'POST',
        headers: { 'token': token }
    }).then(res => res.json())

}



//for sending idToken to GoogleLoginLogoutProject
export  function generateToken() {

    const savedtoken = sessionStorage.getItem("googleKey")
    var targetUrl = 'http://localhost:8087/gmaillogin/generate'
    return fetch(targetUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': savedtoken
        }
      });
  }


