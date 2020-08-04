import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

export class Home extends Component {
    render() {
        const empList = () => {
            var arr = (JSON.stringify(this.props.globalState));
            if (arr !== 'null'){          
                return(
                    <div>
                        <h2><i>{this.props.globalState.formInput.firstName} {this.props.globalState.formInput.lastName}</i></h2>
                        <Link to="/View">
                            <RaisedButton
                                label="View"
                                primary = {false}
                                style = {styles.button}
                            />
                        </Link>
                        <RaisedButton
                            label="Delete"
                            primary = {false}
                            style = {styles.button}
                            onClick = {this.props.delEmp}
                        />
                    </div>               
            );
            }
            else{
                return null;
            }
        }
        

        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Welcome to the Employee Directory!" />
                        {empList()}
                        <Link to="/AddEmployeeWizard">
                            <RaisedButton
                                label="Add Employee"
                                primary = {true}
                                style = {styles.button}
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

// const mapStateToProps = (state) => {
//     return{
//         firstName:state.firstName,
//         lastName:state.lastName
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return{
        delEmp : (state) => dispatch({ type:'DEL_EMP'})
    }
}

const mapStateToProps = state => {
    return {
        globalState: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
