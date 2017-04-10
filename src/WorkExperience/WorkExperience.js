import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const WorkExperience = (props) => (
  <div>
    <h3>Work experience</h3>
    {
      props.items.map((assignment, index) => (
        <div key={index} className={['row', 'mb-2', 'animated', props.animation].join(' ')}>
          <div className="col-md-3">
            <strong>
              {moment(assignment.startDate).format('MM.YYYY')}
              {typeof(assignment.endDate) === 'string' ? ' - ' + assignment.endDate : null}
              {assignment.endDate instanceof Date ? ' - ' + moment(assignment.endDate).format('MM.YYYY') :  null}
            </strong>    
          </div>
          <div className="col-md-9">
            {assignment.employer}, {assignment.location}

            {
              assignment.responsibilities && assignment.responsibilities.length > 0 ? (
                <ul>
                  {
                    assignment.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))
                  }
                </ul>
              ): null
            }
          </div>
        </div>
      ))
    }
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.workExperience,
    ...ownProps
  };
}

export default connect(mapStateToProps)(WorkExperience);
