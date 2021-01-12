import React, { Component } from 'react';

class CourseDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Storing the name prop in state so I can change it on line 19
            name: this.props.name
        }
    }
    render() {
        // Console logging Props and State so that you can see they are two separate objects.
        console.log(this.state)
        console.log(this.props)

        // Props are immutable!
        // You can not change the value you of props in a child component.
        // this.props.name = "Roger" <This will NOT work>

        // Unless you store them in state like we are doing on line 7.
        // this.stat.name = "Roger" <This will work>
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <h2>Welcome to the course: {this.props.courseName}!</h2>
            </div>
        );
    }
}

export default CourseDetails;