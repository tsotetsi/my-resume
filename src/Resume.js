import React from 'react';
import './Resume.css';


class ResumeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log('mounted component...');
    }

    render() {
        return (
            <div className="resume-wrapper">
            <div className="split left">
            </div>
            <div className="split right">
            </div>
            </div>
        )
    }
}

export default ResumeComponent;