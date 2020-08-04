import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm';
import Success from './Success';
import FormEducationalDetails from './FormEducationalDetails';
import FormProfessionalDetails from './FormProfessionalDetails';
import FormSocialDetails from './FormSocialDetails';
import {connect} from 'react-redux';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phNumber: '',
        currAdd : '',
        permAdd : '',
        course: '',
        college: '',
        year: '',
        cgpa: '',
        companyName:'',
        fromDate:'',
        toDate:'',
        designation:'',
        linkedIn:'',
        faceBook:'',
        gitHub:'',
        hobbies:''
    }

    //Proceed to the next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to the next Step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({ [input] : e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, phNumber, currAdd, permAdd, course, college, year,cgpa,companyName,fromDate,toDate,designation,linkedIn,faceBook,gitHub,hobbies } = this.state;
        const values = { firstName, lastName, email, phNumber, currAdd, permAdd, course, college, year,cgpa,companyName,fromDate,toDate,designation,linkedIn,faceBook,gitHub,hobbies }

        switch (step) {
            case 1:
                return (
                    // <>
                    //     {
                    //         JSON.stringify(this.props.globalState)
                    //     }
                        <FormPersonalDetails
                          nextStep = { this.nextStep }
                          handleChange = { this.handleChange }
                          values = { values }
                        />
                    //</>
                )
            case 2:
                return (
                    <FormEducationalDetails
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                        prevStep = { this.prevStep }
                    />
                )
            case 3:
                return (
                    <FormProfessionalDetails
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                        prevStep = { this.prevStep }
                    />
                )
            case 4:
                return (
                    <FormSocialDetails
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                        prevStep = { this.prevStep }
                    />
                )
            case 5:
                return (
                    <Confirm
                    nextStep = { this.nextStep }
                    values = { values }
                    parentProps={this.state}
                    onSubmit={this.props.onSubmit}
                    prevStep = { this.prevStep }
                    />
                )
            case 6:
                return <Success/>
            default:
                return null
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSubmit : (state) => dispatch({ type:'ADD_EMP', payload: state })
    }
}



export default connect(null, mapDispatchToProps)(UserForm)
