import React, { Component } from 'react';
import ThemeNavbar from '../../layouts/components/navbar/navbar';
import { generateToken } from '../../apiservice/apiCloudService'

const strSecurityApiURL = `${process.env.REACT_APP_securityApi}`;
const strGetUserRoleURL = strSecurityApiURL + "getUserRole"

class LoginHelper extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      name: '',
    }
  }

  getIdTokenFromUrl = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    var results = regex.exec(this.props.location.hash);
    console.log("results", this.results)
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
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
      // handleSetName(res.data.name);
      console.log("name : ", res);
    })
  }
  componentDidMount = () => {

    let m = this.getIdTokenFromUrl('id_token')
    console.log("token--->", m)
    sessionStorage.setItem("googleKey", m)
    generateToken().then((res) => {
      console.log("res", res.clone().json())
      console.log("res", res)
      return res.json()


    }).then((data) => {
      console.log("response code ---->   ", data)
      if (data.statusCode === 202) {
        console.log("here i am in if block")
        sessionStorage.setItem("token", data.token)
        this.props.history.push('/dashboard')
      }
      else {
        alert("You don't have authority to login, please contact admin")
        
      }
    }).catch((err) => {
      console.log("in error")
      this.props.history.push("/");
      console.log(err)
    })


  }


  render() {
    return (<div></div>)
  }
}

export default LoginHelper;





