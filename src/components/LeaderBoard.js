import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const LeaderBoard = ({ allUsers }) => {

  return (
    <Fragment>
      <div className='page-title'>
        LEADERBOARD
      </div>

      <ul className='leaderboard'>
        <li className='table-row header'>
          <div className='table-col-1'>Rank</div>
          <div className='table-col-5 flex-row'>User</div>
          <div className='table-col-2'>Added</div>
          <div className='table-col-2'>Answered</div>
        </li>

        {allUsers.map((user, index) => (
        <li key={user.id} className='table-row'>
          <div className='table-col-1'>{index + 1}</div>
          <div className='table-col-5 flex-row'>
            <span className='avatar no-left-margin'>
              <img 
                src={`${window.location.origin}/images/${user.id}.jpg`} 
                alt={user.name} 
              />
            </span>
            <span>{user.name}</span>
          </div>
          <div className='table-col-2'>{user.questions.length}</div>
          <div className='table-col-2'>{Object.keys(user.answers).length}</div>
        </li>
        ))}
      </ul>
    </Fragment>
  );
}

function mapStateToProps ({ users }) {
  const allUsers = Array.from(Object.values(users))
  .sort((a,b) => {
    const bTotal = b.questions.length + Object.keys(b.answers).length;
    const aTotal = a.questions.length + Object.keys(a.answers).length;
    return bTotal - aTotal;
  });
  return { allUsers };
}

LeaderBoard.propTypes = { 
  allUsers: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(LeaderBoard);
