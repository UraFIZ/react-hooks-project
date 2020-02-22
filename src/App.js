import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/main.scss';
import MainPage from './containers/main-page'
import StepForm from './components/step-from'

function App() {
  return (
    <div className="main-container">
      <Switch>
        <Route 
          path="/step/:id"
          component={StepForm}
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
