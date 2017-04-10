import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const Certificates = (props) => (
  <div>
    <h3>Certificates</h3>
    {
      props.items.map((certificate, index) => (
        <div key={index} className="row mb-2 animated fadeIn">
          <div className="col-md-3">
            {moment(certificate.date).format('YYYY')}
          </div>
          <div className="col-md-9">
            <strong>{certificate.name}:</strong> {certificate.description}
          </div>
        </div>
      ))
    }   
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.certificates
  };
}

export default connect(mapStateToProps)(Certificates);
