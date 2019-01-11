import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthedUser } from '../actions/authedUser.js';

const Login = ({ allUsers, dispatch }) => {

  const handleLogin = (event, id) => {
    dispatch(setAuthedUser(id));
  }

  return (
    <Fragment>
      <h1 className='page-title'>PLEASE LOG IN</h1>
      <ul className='user-login'>
        {allUsers.map((user) => (
          <li key={user.id} onClick={(event) => handleLogin(event, user.id)}>
            <img 
              src={`${window.location.origin}/images/${user.id}.jpg`} 
              alt={user.name} 
            />
            <p>{user.name}</p>
          </li>
        ))}
      </ul>
      <p className='login-message'>CLICK ON A USER TO LOG IN</p>
    </Fragment>
  );
}

function mapStateToProps ({ users }) {
  const allUsers = Object.values(users);
  return { allUsers }
}

Login.propTypes = { 
  allUsers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Login);
