import React from 'react';
import { connect } from 'react-redux'

const WorkingExperience = (props) => (
  <div>
    <h3>Working experience</h3>
    {
      props.items.map((item, index) => (
        <div key={index} className="row">
          <div className="col-md-3">
            <strong>
              {item.startDate.getFullYear() + '/' + item.startDate.getMonth()}
              {typeof(item.endDate) === 'string' ? ' - ' + item.endDate : null}
              {item.endDate instanceof Date ? ' - ' + item.endDate.getFullYear(): null}
            </strong>    
          </div>
          <div className="col-md-9">
            {item.name}, {item.location}
          </div>
        </div>
      ))
    }
  </div>
);


const mapStateToProps = (state, ownProps) => {
  console.log(state.workingExperience);
  return {
    items: state.workingExperience
  };
}

export default connect(mapStateToProps)(WorkingExperience);
