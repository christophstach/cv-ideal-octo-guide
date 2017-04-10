import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const EducationalBackground = (props) => (
  <div>
    <h3>Educational background</h3>
  
    {
      props.items.map((item, index) => (
        <div key={index} className={['row', 'mb-2', 'animated', props.animation].join(' ')}>
          <div className="col-md-3">
            <strong>
              {moment(item.startDate).format('YYYY')}
              {typeof(item.endDate) === 'string' ? ' - ' + item.endDate : null}
              {item.endDate instanceof Date ? ' - ' + moment(item.endDate).format('YYYY') : null}
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
    items: state.educationalBackground,
    ...ownProps
  };
}

export default connect(mapStateToProps)(EducationalBackground);
