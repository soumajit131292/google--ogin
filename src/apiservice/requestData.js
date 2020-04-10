export default function getRequestData() {
    let data = [
        {
            requestId:"101",
            requestName:"Gcp_request",
            description:"This is gcp request",
            createdOn:" 2016-11-09 11:44:44",   
            status:"running"
        },
        {
            requestId:"102",
            description:"This is azure request",
            requestName:"Azure_Request",
            createdOn:" 2016-11-09 11:44:44",
            status:"stopped"
        },
        {
            requestId:"103",
            description:"This is aws request",
            requestName:"Aws_Reqest",
            createdOn:" 2016-11-09 11:44:44",
            status:"created"
        }
    ]
    return Promise.resolve(data);
}