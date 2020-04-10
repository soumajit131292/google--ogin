import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createRequestAPI, getBuildsFromAPI, getCloudInfoFromAPI, getData } from '../../apiservice/apiCloudService';
import {
    ArrowLeft,
    CheckSquare
} from "react-feather";
import { toastr } from 'react-redux-toastr';


const strSecurityApiURL = `${process.env.REACT_APP_securityApi}`;
const strGetUserRoleURL = strSecurityApiURL + "getUserRole";

const generalId = `${process.env.REACT_APP_generalId}`;

class Request extends Component {
    constructor() {
        super();
        this.state = {
            cloudProviderId: 1,
            userId: generalId,
            requestName: '',
            regionid: 1,
            configId: 1,
            osId: 2,
            editionId: 1,
            flavourId: 1,
            buildId: [],
            os: [],
            editions: [],
            flavours: [],
            regions: [],
            configs: [],
            tools: [],
            keyList: [],
            provider: [],
            builds: [],
            buildUrl: '',
            build:'',
            template: '',
            templates: [{ "name": "Azure", "value": "T1" }, { "name": "GCP, AWS", "value": "T2" }, { "name": "GCP, AWS, Azure", "value": "T3" }, { "name": "Random selection of ANY three cloud providers, 2 VMs each", value: "T4" }],
            selectedCloudProvider: '',
            snackBarMsg: '',
            openSnackBar: false,

        }
    }
    handleCloudProvider = (event) => {
        this.setState({
            cloudProvider: event.target.value
        })
    }
    handleOS = (event) => {
        this.setState({
            osId: event.target.value
        })
    }
    handleBuild = (event) => {
        this.setState({
            build: event.target.value
        })
        console.log("Selected build : ",this.state.build);
    }
    handleRegion = (event) => {
        this.setState({
            region: event.target.value
        })
    }
    handleConfig = (event) => {
        this.setState({
            config: event.target.value
        })
    }
    handleTools = (event) => {
        this.setState({
            tools: event.target.value
        })
    }
    handleKeyList = (event) => {
        this.setState({
            keyList: event.target.value
        })
    }

    handleRequestName = (event) => {
        this.setState({
            requestName: event.target.value
        })
    }
    nevigatetodashboard = () => {
        this.props.history.push('/dashboard');
    }

    onClickOS = () => {
        this.state.os.forEach((res) => {
            if (res.osName === this.state.onOS) {
                console.log(Object.keys(res.virson));
                const arr = Object.keys(res.virson);
                arr.map(element => {
                    console.log(element);
                });
            }
        })
        this.state.virson.forEach(val => {
            console.log(val);
        })
    }

    // getUserData = () => {
    //     getData().then(res => {
    //         this.setState({
    //             userId: res.data.id
    //         })
    //     }).catch(error => {
    //         console.log(error);
    //     })

    // }

    componentDidMount() {
        //this.getAllCloudPRovider();
       // this.getUserData();
        this.getAllBuilds();
    }
    getAllBuilds = () => {
        getBuildsFromAPI().then(result => {
            console.log("builds data : ", result);
            let buildData = result.map(data => {
                return data
            })
            this.setState({
                builds: buildData
            })
        })
    }

    // getAllCloudPRovider = () => {
    //     getCloudProvidersFromAPI().then((requestData) => {
    //         console.log(requestData)
    //         this.setState({
    //             provider: requestData
    //         })
    //         console.log("cloud provider : " + this.state.provider);
    //     })
    // }
    getAllConfigs = (providerId) => {
        getCloudInfoFromAPI(providerId, 2).then(result => {
            console.log("configs  data : ", result);
            this.setState({
                configs: result
            })
        })
        this.getAllOs(providerId);
    }


    handleCreateRequest = () => {
        console.log("It is inside the Handle request method requestID: ",generalId);
        if (this.state.requestName !== '' && this.state.userId !=='' && this.state.template !=='') {
           // toastr.info('Request', 'Please, fill request name', { position: 'top-center' });
           let data = {
            // Vineet: Hard coding the user Id as RBAC is not working
            // userId: this.state.userId,
            userId: generalId,
            requestName: this.state.requestName,
            templateId: this.state.template,
            buildId: this.state.build,
        }
        console.log("Request Data from Vineet: ", data);
        createRequestAPI(data).then(result => {
            console.log("This is successfully create request : ", result);
            toastr.info('Request', 'Request sent successfully', { position: 'top-center' });
            this.props.history.push('/dashboard');
            this.setState({
                userId: '',
                requestName: '',
                templateId: '',
                buildId: '',
            })

        }).catch(error => {
            console.log("error request API : ", error);
            toastr.info('Request', 'Something wrong ?', { position: 'top-center' });
        })
        console.log("data : ", data);
    }

        else {
            toastr.info('Request', 'Please, fill data', { position: 'top-center' });
    }
}

    handleClick = (event) => {
        this.setState({
            cloudMenu: event.target.value
        })
    }
    handleReturn =() =>{
        this.props.history.push('/dashboard');
    }
    selectedTemplate = (event) => {
        console.log("Templete : ", event.target.value)
        this.setState({
            template: event.target.value
        })
    }

    selectedBuild = (event) => {
        console.log("Build : ", event.target.value)
        this.setState({
            build: event.target.value
        })
    }
    render() {
        return (
            <Fragment>
                <Row className="row-eq-height justify-content-md-center">
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <CardTitle>Request Task Builder</CardTitle>
                                <div className="px-3">
                                    <Form>
                                        <div className="form-body">
                                            <FormGroup>
                                                <Label for="eventRegInput1">Request Name</Label>
                                                <Input type="text" id="eventRegInput1" value={this.state.requestName} onChange={this.handleRequestName} placeholder="Request Name" name="fullname" required />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="issueinput5">Templete</Label>
                                                <Input type="select" id="issueinput5" name="priority" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Priority" onChange={this.selectedTemplate}>
                                                <option >select templete</option>
                                                    {this.state.templates.map(temp => {                                                       
                                                        return <option value={temp.value} >{temp.name}</option>
                                                    })}
                                                </Input>                                               
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="issueinput5">Builds</Label>
                                                <Input type="select" id="issueinput5" name="priority" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Priority" onChange={this.selectedBuild}>
                                                <option>select build</option>
                                                    {this.state.builds.map(build => {                                                      
                                                        return <option value={build.id} >{build.title}</option>
                                                    })}
                                                </Input>                                               
                                            </FormGroup>
                                        </div>
                                        <div className="form-actions center">
                                            <Button color="warning" className="mr-1" onClick={this.handleReturn} size="sm" >
                                            <div className="every-auto-span">  <ArrowLeft size={16} color="#FFF" />  Back</div>
                                               
                                 </Button>
                                            <Button color="primary" onClick={this.handleCreateRequest} size="sm" className="every-auto-button">
                                            <div className="every-auto-span">  <CheckSquare size={16} color="#FFF" /> Create</div>
                                 </Button>
                                        </div>
                                    </Form>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}
export default Request;