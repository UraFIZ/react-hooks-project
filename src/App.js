import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/main.scss';
import MainPage from './containers/main-page'
import StepOne from './components/step-from/step-one'
import StepTwo from './components/step-from/step-two'

function App() {
  return (
    <div className="main-container">
      <Switch>
        <Route 
          path="/step1/:id"
          component={StepOne}
        />
         <Route 
          path="/step2"
          component={StepTwo}
        />
        <Route 
          path="/"
          component={MainPage}
        />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
