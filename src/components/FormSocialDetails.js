import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormSocialDetails extends Component {

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
                        <AppBar title="Enter Social Details" />
                        <TextField 
                            hintText="Enter LinkedIn Profile"
                            floatingLabelText="LinkedIn Profile"
                            onChange = {handleChange('linkedIn')}
                            defaultValue={values.linkedIn}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter Facebook Profile"
                            floatingLabelText="Facebook Profile"
                            onChange = {handleChange('faceBook')}
                            defaultValue={values.faceBook}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter GitHub Profile"
                            floatingLabelText="GitHub Profile"
                            onChange = {handleChange('gitHub')}
                            defaultValue={values.gitHub}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter your hobbies"
                            floatingLabelText="Hobbies"
                            onChange = {handleChange('hobbies')}
                            defaultValue={values.hobbies}
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

export default FormSocialDetails