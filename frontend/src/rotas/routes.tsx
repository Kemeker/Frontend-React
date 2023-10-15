// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import home from '../pages/home'; 
import ChatPage from '../app/page';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/chat" component={ChatPage} />
        
      </Switch>
    </Router>
  );
};

export default Routes;
