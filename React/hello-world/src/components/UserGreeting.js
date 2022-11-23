import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super (props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // let message;

        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Shabeer</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        return(
            // this.state.isLoggedIn ? <div>Welcome Shabeer</div> : <div>Welcome Guest</div>
            this.state.isLoggedIn && <div>Welcome Shabeer</div>
        )
    }
}
export default UserGreeting