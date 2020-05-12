import React, { Component } from 'react'

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    render() {
        return <h1>Class Component {this.props.name}</h1>
    }
}

export default Welcome