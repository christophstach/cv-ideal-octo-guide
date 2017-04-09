
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

import workingExperience from './workingExperience.reducer';
import educationalBackground from './educationalBackground.reducer';
import certifaces from './certifaces.reducer';
import addtitionalSkills from './addtitionalSkills.reducer';

const store = createStore(
  combineReducers({
    workingExperience,
    educationalBackground,
    certifaces,
    addtitionalSkills
  }),
  applyMiddleware(logger)
);


export default store;
