// import external modules
import React, { Component } from "react";
import {login} from '../../apiservice/apiCloudService'
//import firebase from 'firebase';

import {
   Row,
   Col,
   Input,
   Form,
   FormGroup,
   Button,
   Label,
   Card,
   CardBody,
   CardFooter
} from "reactstrap";

const clientId = `${process.env.REACT_APP_ClientId}`;
const googleSDKURL = `${process.env.REACT_APP_googleSDKURL}`;

class Login extends Component {

   componentDidMount() {
      this.googleSDK();
   }

   googleSDK = () => {
      window['googleSDKLoaded'] = () => {
         window['gapi'].load('auth2', () => {
            this.auth2 = window['gapi'].auth2.init({
               ux_mode: 'redirect',
               client_id: clientId,
               redirect_uri:"http://localhost:3001/test",
               cookiepolicy: 'single_host_origin',
               scope: 'profile email'
            });
            this.prepareLoginButton();
         });
      }
      (function (d, s, id) {
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) { return; }
         js = d.createElement(s); js.id = id;
         js.src = googleSDKURL;
         fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'google-jssdk'));
   }


   prepareLoginButton = () => {
      console.log(this.refs.googleLoginBtn);
      this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
         (error) => {
            alert(JSON.stringify(error, undefined, 2));
         });      
   }

   // (googleUser) => {
         //    let profile = googleUser.getBasicProfile();
         //    let token = googleUser.getAuthResponse().id_token;
         //    console.log('Token || ' + token);
         //    this.handlelogin(token);
         //    //YOUR CODE HERE
         // },

   // handlelogin= (token) => {
   //    sessionStorage.setItem("token",token);
   //     this.props.history.push("/dashboard");
   // }

   // handleLogin = () => {
   //    setTimeout(() => {
   //       localStorage.setItem('username', this.state.username)
   //       this.props.history.push('/dashboard');
   //       console.log("Successful navigate to dashboard");
   //    }, 1000);
   // }

   render() {
      return (
         <div className="container" style={{ marginBottom: '200px' }}>
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="gradient-indigo-purple text-center width-400">
                     <CardBody>
                        <h4 className="white py-4">Multi Cloud DaaS Manager Login</h4>
                        {/* <Form className="pt-2"> */}
                           <FormGroup>
                              <Col md="12">
                                 <button type="submit" color="danger" block className="btn-pink btn-raised" ref="googleLoginBtn">
                                    SSO Integrated Login
                                 </button>
                              </Col>
                           </FormGroup>
                        {/* </Form> */}
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}

export default Login;






