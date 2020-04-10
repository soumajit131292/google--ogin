export default function getInstanceData() {
    let instanceData = [
        {
            "101": [
                {
                    instanceId: "20001",
                    ip :"127.0.0.0",
                    instanceName: "GCP",
                    status: "stopped",
                    createdOn: "2016-11-09 11:44:44",
                    updataedOn: "2016-11-09 11:44:44",
                },
                {
                    instanceId: "20002",
                    ip :"127.0.0.0",
                    instanceName: "GCP",
                    status: "stopped",
                    createdOn: "2016-11-09 11:44:44",
                    updataedOn: "2016-11-09 11:44:44",
                }
            ]
        },
        {
            "102": [
                {
                    instanceId: "20003",
                    ip :"127.0.0.0",
                    instanceName: "GCP",
                    status: "running",
                    createdOn: "2016-11-09 11:44:44",
                    updataedOn: "2016-11-09 11:44:44",
                },
                {
                    instanceId: "20002",
                    ip :"127.0.0.0",
                    instanceName: "Azure",
                    status: "running",
                    createdOn: "2016-11-09 11:44:44",
                    updataedOn: "2016-11-09 11:44:44",
                }
            ]
        }
    ]

    return Promise.resolve(instanceData);
}