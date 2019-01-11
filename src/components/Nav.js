
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthedUser } from '../actions/authedUser.js';

const Nav = ({ login, allUsers, authedUser, history, dispatch }) => {

  const handleLogout = (e) => {
    history.push('/');
    dispatch(setAuthedUser(''));
  }


  const firstName = allUsers
    .filter(user => user.id === authedUser)
    .map(user => user.name).toString().split(' ')[0];

  return (
    <nav className='nav container'>
      <span className='nav-title'>Would You Rather?</span>
      {login ?
        (<ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>LEADERBOARD</NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>ADD A QUESTION</NavLink>
          </li>
        </ul>)
      : ''
      }
      {login ?
        (<div className='nav-right'>
          <p>Hi {firstName}</p>
          <span className='avatar'>
            <img 
              src={`${window.location.origin}/images/${authedUser}.jpg`} 
              alt={authedUser} 
            />
          </span>
          <button onClick={handleLogout}>LOG OUT</button>
        </div>)
        : ''}
    </nav>
  );
}

function mapStateToProps ({ users, authedUser }) {
  const allUsers = Object.values(users);
  return {allUsers, authedUser};
}

Nav.propTypes = { 
  login: PropTypes.bool.isRequired,
  allUsers: PropTypes.array.isRequired,
  authedUser: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps)(Nav));
