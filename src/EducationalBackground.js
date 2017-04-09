import React from 'react';
import { connect } from 'react-redux';

const EducationalBackground = (props) => (
  <div>
    <h3>Educational background</h3>
    {
      props.items.map((item, index) => (
        <div key={index} className="row">
          <div className="col-md-4">
            <strong>
              {item.startDate.getFullYear()}
              {typeof(item.endDate) === 'string' ? ' - ' + item.endDate : null}
              {item.endDate instanceof Date ? ' - ' + item.endDate.getFullYear(): null}
            </strong>    
          </div>
          <div className="col-md-8">
            {item.name}, {item.location}
          </div>
        </div>
      ))
    }
  </div>
);

const mapStateToProps = (state, ownProps) => {
  console.log(state.educationalBackground);
  return {
    items: state.educationalBackground
  };
}

export default connect(mapStateToProps)(EducationalBackground);
