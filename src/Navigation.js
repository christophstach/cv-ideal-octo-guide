import React from 'react';


const Navigation = () => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
    <button 
      className="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Christoph Stach</a>
    
    <div className="collapse navbar-collapse" classID="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
              <a className="nav-link" href="#">Curriculum Vitae <span className="sr-only">(current)</span></a>
          </li>
        </ul>
    </div>
  </nav>
);

export default Navigation;
