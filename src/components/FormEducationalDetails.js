import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormEducationalDetails extends Component {

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
                        <AppBar title="Enter Educational Details" />
                        <TextField 
                            hintText="Enter your Course Name"
                            floatingLabelText="Course Name"
                            onChange = {handleChange('course')}
                            defaultValue={values.course}
                        />
                        <br/>
                        <TextField 
                            hintText="College/University"
                            floatingLabelText="College/University"
                            onChange = {handleChange('college')}
                            defaultValue={values.college}
                        />
                        <br/>
                        <TextField 
                            hintText="Passing out Year"
                            floatingLabelText="Year"
                            onChange = {handleChange('year')}
                            defaultValue={values.year}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter Percentage/CGPA"
                            floatingLabelText="Percentage/CGPA"
                            onChange = {handleChange('cgpa')}
                            defaultValue={values.cgpa}
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

export default FormEducationalDetails