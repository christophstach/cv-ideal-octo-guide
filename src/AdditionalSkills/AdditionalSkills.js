import React from 'react';
import { connect } from 'react-redux';

const AdditionalSkills = (props) => (
  <div>
    <h3>Additional skills</h3>
    {
      props.items.map((skill, index) => (
        <div key={index} className={['row', 'mb-2', 'animated', props.animation].join(' ')}>
          <div className="col-md-3">
            {skill.category}
          </div>
          <div className="col-md-9">
            {Array.isArray(skill.items) ? skill.items.map((item, index) => (
              <div key={index}>{item.name} ({item.level})</div>
            )) : null}

            {Array.isArray(skill.subCategories) ? skill.subCategories.map((subCategory, index) => (
              <div key={index} className="mb-2">
                <strong>{subCategory.category}</strong>
                <br/>
                {Array.isArray(subCategory.items) ? subCategory.items.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < subCategory.items.length - 1 ? (
                      <span>, </span>
                    ) : null}
                  </span> 
                )) : null}
              </div>
            )) : null}
          </div>
        </div>
      ))
    }
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.additionalSkills,
    ownProps
  };
}


export default connect(mapStateToProps)(AdditionalSkills);
