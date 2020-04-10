// import external modules
import React, { Component } from "react";
import { addUser,getAllUser } from '../../apiservice/apiCloudService';
import {
    Row,
    Col,
    Input,
    Form,
    FormGroup,
    Button,
    Card,
    CardBody,
} from "reactstrap";
import {toastr} from 'react-redux-toastr';

class Admin extends Component {
    state = {
        isChecked: true,
        userEmail: '',      
        username:'',
    };
    handleChecked = e => {
        this.setState(prevState => ({
            isChecked: !prevState.isChecked
        }));
    };

    handleAddUser = (event) => {
        this.setState({
            userEmail: event.target.value
        })
    }

    addNewUser = (event) => {    
        console.log("Add user is getting called");
        event.preventDefault();
        if((this.state.userEmail !=='') && (/^[_A-Za-z0-9-\\+]+(.[_A-Za-z0-9-]+)*@techchefs.in/.test(this.state.userEmail))) {
            let user = {
                username: this.state.userEmail
            }
            addUser(user).then(result => {
                console.log("Add new user request submitted : ", result);
                toastr.info('The title', 'User Added Successfully', { position: 'bottom-right'});
                this.setState({
                    userEmail: ''
                })
            }).catch(error => {
                console.log('add user error : ',error)
                toastr.info('The title', 'Only Techchefs Id Accepted', { position: 'bottom-right'});
            })
            console.log(user);

        } else {
            toastr.error('Admin', 'Please, enter valid email', { position: 'bottom-right'});
        }
     }

    render() {
        return (
            <div className="container">
                <Row className="full-height-vh1">
                    <Col xs="12" className="d-flex align-items-center justify-content-center">
                        <Card className="gradient-indigo-purple text-center width-400">
                            <CardBody>
                                <h2 className="white py-4">Add User</h2>
                                <Form className="pt-2">
                                    <FormGroup>
                                        <Col md="12">
                                            <Input
                                                type="email"
                                                className="form-control"
                                                // name="inputPass"
                                                id="inputPass"
                                                placeholder="eg: email@techchefs.in"
                                                required
                                                value={this.state.userEmail}
                                                onChange={this.handleAddUser}
                                            />                                            
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col md="12">
                                            <Button type="submit" color="danger" block className="btn-pink btn-raised" onClick={this.addNewUser }>
                                                Add User
                                 </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Admin;
