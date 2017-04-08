import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import 'fontawesome';

import './App.css';

import Navigation from './Navigation';
import ProfilePicture from './ProfilePicture';
import WorkExperience from './WorkExperience';


const App = () => (
  <div>
    <Navigation/>

    <ProfilePicture/>

    <div className="content-wrapper">
      <div className="content">
        
        
        <div>

          
          <br/>

          <h3>Educational background</h3>
          
          <WorkExperience/>


        </div>
      </div>  
    </div>
    
  </div>
);

export default App;
