import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const WorkExperience = (props) => (
  <div>
    <h3>Work experience</h3>
    {
      props.items.map((item, index) => (
        <div key={index} className="row mb-2">
          <div className="col-md-3">
            <strong>
              {moment(item.startDate).format('MM.YYYY')}
              {typeof(item.endDate) === 'string' ? ' - ' + item.endDate : null}
              {item.endDate instanceof Date ? ' - ' + moment(item.endDate).format('MM.YYYY') :  null}
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
  return {
    items: state.workExperience
  };
}

export default connect(mapStateToProps)(WorkExperience);
