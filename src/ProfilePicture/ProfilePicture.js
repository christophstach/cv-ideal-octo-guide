import React from 'react';

import image from './pp.jpg';

const ProfilePicture = () => (
  <div className="row">
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2">
      <img src={image} className="rounded-circle img-fluid" alt="Profile"/>
    </div>
  </div>
);

export default ProfilePicture;
