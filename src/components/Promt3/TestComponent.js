import React, { Component } from 'react';
import CourseDetails from './CourseDetails'

class TestComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: "Luke",
            courseName: "How to use a lightsaber while blindfolded"
        }
    }
    render() {
        //You are able to change the values of data stored in state
        // this.state.name = "Jon"
        return (
            <div>
                <h1>Hello {this.state.name}!</h1>
                <h2>Welcome to the course: {this.state.courseName}!</h2>

                {/* This component is optimizing the two h tags above. */}
                <CourseDetails
                    name={this.state.name}
                    courseName={this.state.courseName}
                />
            </div>
        );
    }
}

export default TestComponent;