import React, { Component } from "react";
import withComponent from "./withCounter";

class ClickCounter extends Component {
    incrementCount = () => {
        this.setState( prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const { count, incrementCount } = this.props
        return ( 
            <button onClick ={incrementCount}>
                {this.props.name} Clicked {count} Times
            </button>
        )
    }
}

export default withComponent(ClickCounter, 5)