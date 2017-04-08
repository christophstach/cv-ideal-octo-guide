import React from 'react';

import image from './pp.jpg';


const ProfilePicture = () => (
  <div className="profile-picture-wrapper">
    <div className="profile-picture">
      <img src={image} className="rounded-circle" alt="Profile"/>
    </div>
  </div>
);

export default ProfilePicture;
