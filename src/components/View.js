import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux'

export class View extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar 
                            title="Employee Details"
                        />
                        <div>
                            <h2><u>Personal Details</u></h2>
                            <p><b>Name:</b> {this.props.globalState.formInput.firstName} {this.props.globalState.formInput.lastName}</p>
                            <p><b>Email:</b> {this.props.globalState.formInput.email}</p>
                            <p><b>Contact Number:</b> {this.props.globalState.formInput.phNumber}</p>
                            <p><b>Current Address:</b> {this.props.globalState.formInput.currAdd}</p>
                            <p><b>Permanent Address:</b> {this.props.globalState.formInput.permAdd}</p>
                            <h2><u>Educational Details</u></h2>
                            <p><b>Course:</b> {this.props.globalState.formInput.course}</p>
                            <p><b>College/University:</b> {this.props.globalState.formInput.college}</p>
                            <p><b>Year:</b> {this.props.globalState.formInput.year}</p>
                            <p><b>CPGA/Percentage:</b> {this.props.globalState.formInput.cgpa}</p>
                            <h2><u>Professional Details</u></h2>
                            <p><b>Company Name:</b> {this.props.globalState.formInput.companyName}</p>
                            <p><b>From:</b> {this.props.globalState.formInput.fromDate}</p>
                            <p><b>To:</b> {this.props.globalState.formInput.toDate}</p>
                            <p><b>Designation:</b> {this.props.globalState.formInput.designation}</p>
                            <h2><u>Social Details</u></h2>
                            <p><b>LinkedIn Profile:</b> {this.props.globalState.formInput.linkedIn}</p>
                            <p><b>Facebook Profile:</b> {this.props.globalState.formInput.faceBook}</p>
                            <p><b>GitHub Profile:</b> {this.props.globalState.formInput.gitHub}</p>
                            <p><b>Hobbies:</b> {this.props.globalState.formInput.hobbies}</p>
                        </div>
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        globalState: state
    }
}

export default connect(mapStateToProps,null)(View)
