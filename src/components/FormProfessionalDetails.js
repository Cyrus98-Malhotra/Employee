import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormProfessionalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Enter Professional Details" />
                        <TextField 
                            hintText="Enter the Company Name"
                            floatingLabelText="Company Name"
                            onChange = {handleChange('companyName')}
                            defaultValue={values.course}
                        />
                        <br/>
                        <TextField 
                            hintText="From"
                            floatingLabelText="From"
                            onChange = {handleChange('fromDate')}
                            defaultValue={values.fromDate}
                        />
                        <br/>
                        <TextField 
                            hintText="To"
                            floatingLabelText="To"
                            onChange = {handleChange('toDate')}
                            defaultValue={values.toDate}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter Designation"
                            floatingLabelText="Designation"
                            onChange = {handleChange('designation')}
                            defaultValue={values.designation}
                        />
                        <br/>
                        <RaisedButton
                            label="Previous"
                            primary = {false}
                            style = {styles.button}
                            onClick = {this.prev}
                        />
                        <RaisedButton
                            label="Continue"
                            primary = {true}
                            style = {styles.button}
                            onClick = {this.continue}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

const styles = {
    button: {
        margin:15 
    }
}

export default FormProfessionalDetails