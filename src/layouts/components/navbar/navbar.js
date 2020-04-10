// import external modules
import React, { Component } from "react";
import { Link } from "react-router-dom";
//import GoogleLogout from 'react-google-login';
import {
   Form,
   Media,
   Collapse,
   Navbar,
   Nav,
   NavItem,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   Button
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
   // Moon,
   Mail,
   Menu,
   MoreVertical,
   Check,
   Bell,
   User,
   AlertTriangle,
   Inbox,
   Phone,
   Calendar,
   Lock,
   X,
   LogOut
} from "react-feather";
import ReactCountryFlag from "react-country-flag";

import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import userImage2 from "../../../assets/img/portrait/small/avatar-s-2.png";
import userImage3 from "../../../assets/img/portrait/small/avatar-s-3.png";
import userImage4 from "../../../assets/img/portrait/small/avatar-s-4.png";

const strSecurityApiURL = `${process.env.REACT_APP_securityApi}`;

const strUserSignOffURL = strSecurityApiURL + "signOff?token=" + sessionStorage.getItem("token");
const strGetUserRoleURL = strSecurityApiURL + "getUserRole"

var navbarHeaderColor = 'rgb(210, 211, 214)';
class ThemeNavbar extends Component {
   handleClick = e => {
      this.props.toggleSidebarMenu("open");
   };
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false,
         name: '',
         tokenLog: props,
      };
   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }
   componentDidMount() {
      //  this.getData();
   }

   getData = () => {
      var token = sessionStorage.getItem('token');
      console.log("Token : ", token);
      return fetch(strGetUserRoleURL, {
         method: 'POST',
         headers: { 'token': token }
      }).then(res => {
         console.log(res);
         this.setState({
            name: res.data.name
         })
         console.log("name : ", res);
      })
   }


   handleLogout = () => {
      sessionStorage.clear();
      var auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
         console.log('User signed out.');
         auth2.disconnect();
      });
      auth2.disconnect();
   }

   render() {
      return (
         //navbar come down from the top
         <Navbar className="navbar navbar-expand-lg navbar-light bg-faded">
            <div className="container-fluid px-0" >
               <div className="navbar-header">
                  <div>
                     <img src={require('../../../utility/image/navbar/tech.png')} alt="logo not available" style={{ width: '200px', height: '50px' }} />
                  </div>
                  <Menu
                     size={14}
                     className="navbar-toggle d-lg-none float-left"
                     onClick={this.handleClick.bind(this)}
                     data-toggle="collapse"
                  />
                  {/* <Moon size={20} color="#333" className="m-2 cursor-pointer"/> */}
                  <MoreVertical
                     className="mt-1 navbar-toggler black no-border float-right"
                     size={50}
                     onClick={this.toggle}
                  />
               </div>
               <div>
                  <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Multi-Cloud DaaS Manager</h3>
               </div>
               <div className="navbar-container">
                  <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto float-right" navbar>
                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle nav>
                              <img src={require('../../../utility/image/navbar/tech1.jpeg')} alt="logged-in-user" className="rounded-circle width-35" />
                           </DropdownToggle>
                           <DropdownMenu right>
                              <DropdownItem>
                                 <span className="font-small-3">
                                    <span> {this.state.name}</span>
                                    <span className="text-muted"> (admin)</span>
                                 </span>
                              </DropdownItem>
                              <DropdownItem divider />
                              <Link to="" className="p-0" onClick={this.handleLogout}>
                                 <DropdownItem>
                                    <LogOut size={16} className="mr-1" />
                                    Logout
                                 </DropdownItem>
                              </Link>
                              {/* <GoogleLogout
                                 clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                 buttonText="Logout"
                                 onLogoutSuccess={this.logout}
                              >
                              </GoogleLogout> */}

                              {/* <Button onClick={this.handleLogout}>Logout</Button> */}
                           </DropdownMenu>
                        </UncontrolledDropdown>
                     </Nav>
                  </Collapse>
               </div>
            </div>
         </Navbar>
      );
   }
}

export default ThemeNavbar;
