import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/AddEmployeeWizard" component={UserForm} />
        <Route path="/View" component={View} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
