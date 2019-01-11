import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <div className='not-found'>
      <h1>PAGE NOT FOUND</h1>
      <img 
        src={`${window.location.origin}/notfound.gif`} 
        alt='Page Not Found'
      />
      <p>We're sorry, we couldn't find that page.</p>
      <p><Link to='/' className='link-btn'>Back to Home</Link></p>
    </div>
  );
}

export default NotFound;
