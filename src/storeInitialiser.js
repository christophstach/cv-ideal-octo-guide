import { Observable } from 'rxjs';
import { workExperienceInitialState } from './WorkExperience';
import { educationalBackgroundInitialState } from './EducationalBackground';
import { certificatesInitialState } from './Certificates';
import { additionalSkillsInitialState } from './AdditionalSkills';


const initStore = (store) => {
  additionalSkillsInitialState.map((i) => {
    return store.dispatch({
      type: 'ADD_ADDITIONAL_SKILL' ,
      payload: i
    });
  });
};

/**
 * TODO: This is still way to complicated, there must be a better way for animating store entries properly
 * 
 * @param {*} store 
 */
const slowlyInitStore = (store) => {
  const time = 250;

  return Observable
    .interval(time)
    .take(workExperienceInitialState.length)
    .map((i) => {
      return store.dispatch({
        type: 'ADD_WORK_EXPERIENCE' ,
        payload: workExperienceInitialState[i]
      });
    })
    .subscribe(
      () => {}, 
      () => {},
      () => {

        return Observable
          .interval(time)
          .take(educationalBackgroundInitialState.length)
          .map((i) => {
            return store.dispatch({
              type: 'ADD_EDUCATIONAL_BACKGROUND' ,
              payload: educationalBackgroundInitialState[i]
            });
          })
          .subscribe(
            () => {}, 
            () => {},
            () => {

              return Observable
                .interval(time)
                .take(certificatesInitialState.length)
                .map((i) => {
                  return store.dispatch({
                    type: 'ADD_CERTIFICATE' ,
                    payload: certificatesInitialState[i]
                  });
                })
                .subscribe(
                  () => {}, 
                  () => {},
                  () => {
                    
                    return Observable
                      .interval(time)
                      .take(additionalSkillsInitialState.length)
                      .map((i) => {
                        return store.dispatch({
                          type: 'ADD_ADDITIONAL_SKILL' ,
                          payload: additionalSkillsInitialState[i]
                        });
                      })
                      .subscribe(
                        () => {}, 
                        () => {},
                        () => {
                          
                        }
                      );

                  }
                );
            }
          );

      }
    );
};

export {
  initStore,
  slowlyInitStore
};
