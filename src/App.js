import React from 'react';
import { Provider } from 'react-redux';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'fontawesome';

import './App.css';

import Navigation from './Navigation';
import ProfilePicture from './ProfilePicture';
import WorkExperience from './WorkExperience';
import EducationalBackground from './EducationalBackground';

import store from './store';


const App = () => (
  <Provider store={store}>
    <div className="App">

      <Navigation/>

      <div className="container">
          <ProfilePicture/>
          <hr/>
          <WorkExperience/> 
          <hr/>
          <EducationalBackground/>
      </div>    
    </div>
  
  </Provider>
);

export default App;
