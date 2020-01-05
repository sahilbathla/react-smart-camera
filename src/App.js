import React from 'react';
import CameraInterface from './components/CameraInterface';
import CameraPreview from './components/CameraPreview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CameraInterface} />
        <Route path="/camera-preview" component={CameraPreview} />
      </Switch>
    </Router>
  );
}

export default App;
