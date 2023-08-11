import React from 'react';

const Header = ({ name, profession }) => {
  return (
    <div className="header">
      <h1>{name}</h1>
      <div className='sub-header'>
        <p>{profession}</p>
      </div>
    </div>
  );
};

export default Header;
