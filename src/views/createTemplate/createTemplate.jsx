import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col, Button, Form, CustomInput, FormGroup, Label, Input } from "reactstrap";
import {
    X,
    CheckSquare,
    User,
    Briefcase,
    MessageSquare,
    Clock,
    File,
    Info,
    FileText,
    Mail,
    AlertTriangle
} from "react-feather";

// import ContentHeader from "../../../components/contentHead/contentHeader";
// import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

class BasicForms extends Component {
    render() {
        return (
            <Fragment>
                {/* <ContentHeader>Basic Forms</ContentHeader>
                <ContentSubHeader>Basic Form Examples.</ContentSubHeader> */}

                <Row className="row-eq-height justify-content-md-center">
                    <Col md="8">
                        <Card>
                            <CardBody>
                                <CardTitle>Configuration TEMPLATE Addition</CardTitle>
                                <p className="mb-0">This is to add a configuration template</p>
                                <div className="px-3">
                                    <Form>
                                        <div className="form-body">
                                            <h4 className="form-section"><User size={20} color="#212529" /> Template Details</h4>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label for="templateName">Template Name:</Label>
                                                        <Input type="text" id="templateName" name="templateName" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label for="templateDescription">Template descriptions:</Label>
                                                        <Input type="textarea" id="templateDescription" rows="5" name="templateDescription" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <h4 className="form-section"><FileText size={20} color="#212529" /> Configurations</h4>
                                            <Card style={{ backgroundColor: "#E0F3F4" }}>
                                                <CardBody>
                                                    <FormGroup>
                                                        <Label for="configurationName">Configuration Name:</Label>
                                                        <Input type="text" id="configurationName" name="configuration" />
                                                    </FormGroup>

                                                    <Row>
                                                        <Col md="6">
                                                            <FormGroup>
                                                                <Label for="cloud">Cloud:</Label>
                                                                <Input type="select" id="cloud" name="cloud" >
                                                                    <option value="none" defaultValue="" disabled="">Select Cloud</option>
                                                                    <option value="design">design</option>
                                                                    <option value="development">development</option>
                                                                    <option value="illustration">illustration</option>
                                                                    <option value="branding">branding</option>
                                                                    <option value="video">video</option>
                                                                </Input>
                                                            </FormGroup>
                                                        </Col>

                                                        <Col md="6">
                                                            <FormGroup>
                                                                <Label for="os">Operating System:</Label>
                                                                <Input type="select" id="os" name="os" >
                                                                    <option value="0" defaultValue="" disabled="">Select OS</option>
                                                                    <option value="less than 5000$">less than 5000$</option>
                                                                    <option value="5000$ - 10000$">5000$ - 10000$</option>
                                                                    <option value="10000$ - 20000$">10000$ - 20000$</option>
                                                                    <option value="more than 20000$">more than 20000$</option>
                                                                </Input>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md="6">
                                                            <FormGroup>
                                                                <Label for="tools">Tools:</Label>
                                                                <Input type="select" id="tools" name="tools" >
                                                                    <option value="none" defaultValue="" disabled="">Select Tools</option>
                                                                    <option value="design">design</option>
                                                                    <option value="development">development</option>
                                                                    <option value="illustration">illustration</option>
                                                                    <option value="branding">branding</option>
                                                                    <option value="video">video</option>
                                                                </Input>
                                                            </FormGroup>
                                                        </Col>

                                                        <Col md="6">
                                                            <FormGroup>
                                                                <Label for="noOfInstance">No of Instance:</Label>
                                                                <Input type="text" id="noOfInstance" name="noOfInstance" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md="6">
                                                            <FormGroup>
                                                                <Label for="tools">Instance Config:</Label>
                                                                <Input type="select" id="tools" name="tools" >
                                                                    <option value="none" defaultValue="" disabled="">Select Instance Config</option>
                                                                    <option value="design">design</option>
                                                                    <option value="development">development</option>
                                                                    <option value="illustration">illustration</option>
                                                                    <option value="branding">branding</option>
                                                                    <option value="video">video</option>
                                                                </Input>
                                                            </FormGroup>
                                                        </Col>

                                                        <Col md="6">
                                                            <FormGroup>
                                                                <Label for="runScript">Script To Run:</Label>
                                                                <Input type="text" id="runScript" name="runScript" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md="12">
                                                            <Card>
                                                                <CardBody>
                                                                    <div style={{display:"flex",justifyContent:"space-between" }}>
                                                                    <h5>Environments :</h5>
                                                                    <Button className="btn-round" outline color="primary">
                                                                        primary
                                                                    </Button>
                                                                    </div>
                                                                    <Row>
                                                                        <Col md="6">
                                                                            <FormGroup>
                                                                                <Label for="key">Key:</Label>
                                                                                <Input type="text" id="key" name="key" />
                                                                            </FormGroup>
                                                                        </Col>

                                                                        <Col md="6">
                                                                            <FormGroup>
                                                                                <Label for="key">Value:</Label>
                                                                                <Input type="text" id="key" name="key" />
                                                                            </FormGroup>
                                                                        </Col>
                                                                    </Row>
                                                                </CardBody>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>

                                        </div>

                                        <div className="form-actions">
                                            <Button color="warning" className="mr-1">
                                                <X size={16} color="#FFF" /> Cancel
                                 </Button>
                                            <Button color="primary">
                                                <CheckSquare size={16} color="#FFF" /> Save
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

export default BasicForms;
