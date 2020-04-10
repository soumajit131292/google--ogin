import React, { Component } from 'react';

class LogoutHelperTest extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    componentDidMount() {
        sessionStorage.clear();
        if(sessionStorage.getItem("token") !== "")
        sessionStorage.clear();
        this.props.history.push("/")
    }
    render() {
        return (
            <div >
                
            </div>
        )
    }
}

export default LogoutHelperTest;