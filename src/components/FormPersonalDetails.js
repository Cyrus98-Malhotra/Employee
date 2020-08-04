import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Enter User Details" />
                        <TextField 
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange = {handleChange('firstName')}
                            defaultValue={values.firstName}
                            required = {true}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange = {handleChange('lastName')}
                            defaultValue={values.lastName}
                            required = {true}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter your Email"
                            floatingLabelText="Email"
                            onChange = {handleChange('email')}
                            defaultValue={values.email}
                            required = {true}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter your Contact Number"
                            floatingLabelText="Contact Number"
                            onChange = {handleChange('phNumber')}
                            defaultValue={values.phNumber}
                            required = {true}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter your Current Address"
                            floatingLabelText="Current Address"
                            onChange = {handleChange('currAdd')}
                            defaultValue={values.currAdd}
                            required = {true}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter your Permanent Address"
                            floatingLabelText="Permanent Address"
                            onChange = {handleChange('permAdd')}
                            defaultValue={values.permAdd}
                            required = {true}
                        />
                        <br/>
                        <RaisedButton 
                            label="Next"
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

export default FormPersonalDetails