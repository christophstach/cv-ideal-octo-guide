import React from 'react';
import { Provider } from 'react-redux';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'animate.css';

import './App.css';

import Navigation from './Navigation';
import ProfilePicture from './ProfilePicture';
import WorkExperience from './WorkExperience';
import EducationalBackground from './EducationalBackground';
import AdditionalSkills from './AdditionalSkills';
import Certificates from './Certificates';

import store from './store';

const animation = "bounceInDown";

const App = () => (
  <Provider store={store}>
    <div className="App">

      <Navigation/>

      <div className="site py-4">
        <div className="container">
          <ProfilePicture/>
        </div>
      </div>
      
      <div className="site py-4 curriculum-vitea">
        <div className="container">
          <WorkExperience animation={animation}/> 
          <hr/>
          <EducationalBackground animation={animation}/>
          <hr/>
          <Certificates animation={animation}/>
          <hr/>
          <AdditionalSkills animation={animation}/>
        </div>
      </div>
      
      <div className="site py-4 projects">
        <div className="container">
          <span>Just watch my </span>
          <a href="https://github.com/christophstach">GitGub <i className="fa fa-github" aria-hidden="true"></i></a>! 
        </div>
      </div>
      
    </div>
  
  </Provider>
);

export default App;
