
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

import { workExperienceReducer as workExperience } from './WorkExperience';
import { educationalBackgroundReducer as educationalBackground } from './EducationalBackground';
import { certificatesReducer as certificates } from './Certificates';
import { additionalSkillsReducer as additionalSkills } from './AdditionalSkills';

const store = createStore(
  combineReducers({
    workExperience,
    educationalBackground,
    certificates,
    additionalSkills
  }),
  applyMiddleware(logger)
);


export default store;
