import React, { Component, Fragment } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Row, Col, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import {
    Download,
    Mail,
    Trash2,
} from "react-feather";
import { PlusCircle, RefreshCcw } from 'react-feather';
import { getRequestsFromAPI, getInstancesFromAPI, getData, terminateInstanceAPI } from '../../apiservice/apiCloudService'
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { toastr } from 'react-redux-toastr';

const generalId = `${process.env.REACT_APP_generalId}`;
const automationId = `${process.env.REACT_APP_automationId}`;
class DaasDashboard extends Component {

    constructor() {
        super();
        this.state = {
            userId: generalId,
            requestList: [],
            instanceList: [],
            selectedRequestId: '',
            modal: false,
            timeInterval: 30000,
            requestName: '',
            useCasesData: {},
            useCaseOfInstance: {},
            popoverOpen: false,
            automation: false,
            burritoIsReady: false,
            subStateId: '',
            popovers:
            {
                placement: "left"

            }
        };
        this.toggle = this.toggle.bind(this);

        // try {
        //     setInterval(() => {
        //         this.getRequestDataList();
        //         console.log("data updated");
        //     }, this.state.timeInterval);
        // } catch (e) {
        //     console.log(e);
        // }
    }

    toggle = (instance) => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    componentDidMount() {
        // this.getUserData();
        this.getRequestDataList()
    }

    getRequestDataList = () => {
        getRequestsFromAPI(this.state.userId).then((requestData) => {
            console.log("this is requst data  : ", requestData)
            this.setState({
                requestList: [...requestData],
            })
            if (requestData.length >= 1) {
                this.setState({
                    selectedRequestId: requestData[0].id,
                    requestName: requestData[0].requestName,
                })
                this.getInstanceDataList();
            }
            console.log("Request Data : ", this.state.selectedRequestId);

        }).catch(error => {
            console.log(error);
        })
    }

    getUserData() {
        // console.log("generalId : ", localId);
        console.log("Total ", generalId)
        this.setState({
            //userId: res.data.id
            userId: generalId
        })
        //    getData().then(res => {
        //      this.setState({
        //             //userId: res.data.id
        //             userId: generalId
        //         })
        //     }).catch(error => {
        //         console.log(error);
        //     })
    }
    getInstanceDataList = () => {
        let req_id = this.state.selectedRequestId
        console.log("inside getInstance method   :", req_id)
        getInstancesFromAPI(this.state.selectedRequestId).then((instanceData) => {
            console.log("instance ddta : ", instanceData)
            this.setState({
                instanceList: instanceData
            })
            console.log("Hello");
            console.log(this.state.instanceList);
        }).then(error => {
            console.log(error);
        })
    }

    async onClick(request_Id, index) {
        console.log("Here is the onclick Handler" + request_Id + "  : " + index);
        await this.setState({
            selectedRequestId: request_Id,
            requestName: this.state.requestList[index].requestName
        });
        this.getInstanceDataList()
    }
    handleAutomation = () => {
        this.setState({
            automation: !this.state.automation,
            userId: !this.state.automation ? automationId : generalId,
            instanceList: [],
        }, () => {
            console.log("userId : ", this.state.userId);
            console.log("automation : ", this.state.automation);
            this.getRequestDataList();
        });
    }
    handleSubState = (instanceID) => {
        this.setState({
            popoverOpen: !this.state.popoverOpen,
            subStateId: instanceID,
        }, () => {
            console.log("userId : ", this.state.popoverOpen);
            console.log("automation : ", this.state.subStateId);
        })
    }
    onRefresh = () => {
        this.getRequestDataList();
    }

    onTerminateInstance = (instanceID) => {
        terminateInstanceAPI(instanceID).then(result => {
            toastr.info('Termination', 'Instance terminated', { position: 'top-center' });
            console.log("result : " + instanceID + ' - ', result);
        }).catch(error => {
            console.log('Error with Terminating Instance: ' + instanceID + ' - ', error);
        })
        console.log("getting the instance id : ", instanceID);
    }


    openInstanceModal = () => {
        return (
            <div className="text-center">
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={() => this.toggle(0)}>USE CASES</ModalHeader>
                    <ModalBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Instance Name</th>
                                    <th>Total</th>
                                    <th>Pass</th>
                                    <th>Fail</th>
                                    <th>NE</th>
                                </tr>
                            </thead>
                            {this.state.instanceList.length > 0 ?
                                <tbody>
                                    {this.state.instanceList.map(instance =>
                                        <tr>
                                            <td >{instance.instanceName}</td>
                                            <td style={{ textAlign: "center" }}>{instance.total}</td>
                                            <td style={{ textAlign: "center" }}>{instance.passed}</td>
                                            <td style={{ textAlign: "center" }}>{instance.failed}</td>
                                            <td style={{ textAlign: "center" }}>{instance.notExecuted}</td>
                                        </tr>
                                    )}
                                </tbody>
                                :
                                <tbody>
                                    <span>Use Case not available .</span>
                                </tbody>
                            }
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.toggle(0)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }


    render() {
        return (
            <Fragment>
                <div className="row align-items-center page-header-container">
                    <div className="col page-header-name">
                        Requests
                    </div>

                    <div className="col-md-auto">
                        <h5>Automation</h5>
                    </div>
                    <div>
                        <form ref="breakfastForm">
                            <div className="example">
                                <label>
                                    <Toggle
                                        defaultChecked={this.state.automation}
                                        onClick={this.handleAutomation} />
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-auto">
                        <Link to="/request"><Button color="primary" size="sm" className="every-auto-button" onClick={this.handleAddPage}>
                        <div className="every-auto-span"><PlusCircle size={16} color="#FFF" /> Add</div>
                        </Button></Link>
                    </div>
                    <div className="col-md-auto">
                        <Button color="success" size="sm" className="every-auto-button" onClick={this.onRefresh}>
                        <div className="every-auto-span"> <RefreshCcw size={16} corelativelor="#FFF" /> Refresh</div>
                        </Button>
                    </div>

                </div>

                <div className="email-application">
                    <div className="email-app-content row">
                        <div className="email-app-content-area w-100">
                            <div className="email-app-list-mails p-0">
                                <PerfectScrollbar>
                                    <div className="email-app-list">
                                        <div id="users-list">
                                            <ul className="list-group">
                                                {this.state.requestList.map((request, index) =>
                                                    <li className={"list-group-item list-group-item-action no-border " + ((this.state.selectedRequestId === request.id) ? "bg-grey bg-lighten-4" : "")}>
                                                        <Row className="email-list-group-item">
                                                           <Col xs={11} onClick={() => this.onClick(request.id, index)}>
                                                                <h6 className=" text-bold-500 mb-1 mt-1">{request.requestName}</h6>
                                                                <div>
                                                                    <p className="list-group-item-text text-truncate w-100">{request.description}</p>
                                                                    {/* <span className="font-small-2 text-muted float-left">{request.createdOn}</span> */}
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                )}
                                            </ul>

                                        </div>

                                    </div>
                                </PerfectScrollbar>
                            </div>
                            <div className="email-app-mail-content d-none d-md-block h-100">
                                {this.state.instanceList.length > 0 ? (
                                    <div className="email-app-mail-content-detail">
                                        <PerfectScrollbar>
                                            <div className="email-app-title card-block instance-button-heading">
                                                <h6 className="list-group-item-heading">{this.state.requestName}</h6>
                                               <div> <Button color="primary" onClick={this.toggle}  size="sm" className="every-auto-button">
                                               <div className="every-auto-span">   Use Cases</div>
                                                </Button>
                                                </div>
                                            </div>
                                            {this.openInstanceModal()}
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Instance Name</th>
                                                        <th>Ip Address</th>
                                                        <th>Created ON</th>
                                                        <th>Status</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.instanceList.map(instance =>

                                                        <tr>

                                                            <td>{instance.instanceName}</td>
                                                            <td>{instance.instanceIp}</td>
                                                            <td>{instance.createdOn}</td>                                                          
                                                            <td>
                                                                <span id={"Popover-" + instance.id} onClick={() => this.handleSubState(instance.id)}
                                                                    className={
                                                                        "badge " +
                                                                        (instance.state === "CREATING" ? "badge-warning" : "") +
                                                                        (instance.state === "RUNNING" ? "badge-success" : "") +
                                                                        (instance.state === "TERMINATED" ? "badge-danger" : "") +
                                                                        " mr-1"
                                                                    }
                                                                >
                                                                    {instance.state}
                                                                </span>
                                                                <Popover
                                                                    placement={this.state.popovers.placement}
                                                                    isOpen={this.state.popoverOpen && this.state.subStateId === instance.id}
                                                                    target={"Popover-" + instance.id}
                                                                    toggle={this.handleSubState}
                                                                >
                                                                    <PopoverHeader>Desktop</PopoverHeader>
                                                                    {instance.subState !== null ?
                                                                        <div>
                                                                            <PopoverBody>

                                                                                {instance.subState.map(sub => {
                                                                                    return <span>{sub}<br /></span>
                                                                                })}
                                                                            </PopoverBody>
                                                                        </div>
                                                                        :
                                                                        <span>Empty</span>
                                                                    }
                                                                </Popover>
                                                            </td>
                                                            <td><Button disabled={instance.state === "TERMINATED"} size="sm" color="white" onClick={() => this.onTerminateInstance(instance.id)}><Trash2 size={18} color="#FF586B" /></Button></td>
                                                            {/* <td> <span disabled={instance.state === "TERMINATED"}  onClick={() => this.onTerminateInstance(instance.id)}><Delete size={20} color="#FF586B"/></span></td> */}
                                                            <td><Button size="sm" color="white" ><Download size={18} color="#333" /></Button></td>                                                                                                                    
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </Table>
                                        </PerfectScrollbar>
                                    </div>
                                ) : (
                                        <div className="row h-100">
                                            <div className="col-sm-12 my-auto">
                                                <div className="text-center">
                                                    <Mail size={84} color="#ccc" className="pb-3" />
                                                    <h4>Please select a Request to show details.</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>


            </Fragment>
        );
    }
}

export default DaasDashboard;

