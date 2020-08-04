import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, phNumber, currAdd, permAdd, course, college, year,cgpa,companyName,fromDate,toDate,designation,linkedIn,faceBook,gitHub,hobbies } } = this.props;
        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Confirm User Data" />
                        <List >
                            <ListItem
                                primaryText = "First Name"
                                secondaryText = { firstName }
                            />
                            <ListItem
                                primaryText = "Last Name"
                                secondaryText = { lastName }
                            />
                            <ListItem
                                primaryText = "Email"
                                secondaryText = { email }
                            />
                            <ListItem
                                primaryText = "Contact Number"
                                secondaryText = { phNumber }
                            />
                            <ListItem
                                primaryText = "Current Address"
                                secondaryText = { currAdd }
                            />
                            <ListItem
                                primaryText = "Permanent Address"
                                secondaryText = { permAdd }
                            />
                            <ListItem
                                primaryText = "Course"
                                secondaryText = { course }
                            />
                            <ListItem
                                primaryText = "College/University"
                                secondaryText = { college }
                            />
                            <ListItem
                                primaryText = "Year"
                                secondaryText = { year }
                            />
                            <ListItem
                                primaryText = "CGPA/Percentage"
                                secondaryText = { cgpa }
                            />
                            <ListItem
                                primaryText = "Company Name"
                                secondaryText = { companyName }
                            />
                            <ListItem
                                primaryText = "From"
                                secondaryText = { fromDate }
                            />
                            <ListItem
                                primaryText = "To"
                                secondaryText = { toDate }
                            />
                            <ListItem
                                primaryText = "Designation"
                                secondaryText = { designation }
                            />
                            <ListItem
                                primaryText = "LinkedIn Profile"
                                secondaryText = { linkedIn }
                            />
                            <ListItem
                                primaryText = "Facebook Profile"
                                secondaryText = { faceBook }
                            />
                            <ListItem
                                primaryText = "GitHub Profile"
                                secondaryText = { gitHub }
                            />
                            <ListItem
                                primaryText = "Hobbies"
                                secondaryText = { hobbies }
                            />
                        </List>
                        <RaisedButton
                            label="Previous"
                            primary = {false}
                            style = {styles.button}
                            onClick = {this.prev}
                        />
                        <Link to="/">
                            <RaisedButton
                                label="Confirm and Continue"
                                primary = {true}
                                style = {styles.button}
                                onClick = {() => this.props.onSubmit(this.props.parentProps)}
                            />
                        </Link>
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

export default Confirm
