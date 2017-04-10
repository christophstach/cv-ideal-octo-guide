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

const animation = "";

const App = () => (
  <Provider store={store}>
    <div className="App">

      <Navigation/>

      <header className="site py-4">
        <div className="container">
          <ProfilePicture/>
        </div>
      </header>
      
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

      <footer className="footer py-4">
        <a href="https://github.com/christophstach"><i className="fa fa-github" aria-hidden="true"></i></a>
      </footer>
    </div>
  
  </Provider>
);

export default App;
