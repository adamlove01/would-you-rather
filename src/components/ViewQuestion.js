import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';

const ViewQuestion = ({ creator, question, authedUser }) => {

  const creatorId = creator.map(user => user.id)[0];
  const creatorName = creator.map(user => user.name)[0];

  let chosenOne = question.optionOne.votes
    .find(voter => voter === authedUser);
  let chosenTwo = question.optionTwo.votes
    .find(voter => voter === authedUser);

  chosenOne = chosenOne ? 'yes' : '';
  chosenTwo = chosenTwo ? 'yes' : '';
  
  const countOptionOne = question.optionOne.votes.length;
  const countOptionTwo = question.optionTwo.votes.length;
  const total = countOptionOne + countOptionTwo;
  const totalText = (total === 1) ? 'Vote' : 'Votes';
  const pctOptionOne = Math.round( countOptionOne / total * 100);
  const pctOptionTwo = Math.round( countOptionTwo / total * 100);

  return (
    <div className='home-list'>
      <h1 className='page-title'>VIEW QUESTION</h1>
        <div className='question'>
          <div className='question-inner'>
            <div className='question-header'>
              <div className='avatar'>
                <img 
                  src={`${window.location.origin}/images/${creatorId}.jpg`}
                  alt={creatorName}
                />
              </div>
              <span>{creatorName}
                asks
              </span>
              <span className='flex-right'>
                <TimeAgo date={question.timestamp} />
              </span>
            </div>
          <div className='question-title'>
            Would you rather:
          </div>
          <div className='option-one'>
            <span className={`chosen ${chosenOne}`}><p></p></span>
            {question.optionOne.text}?
          </div>
          <div className='option-two'>
            <span className={`chosen ${chosenTwo}`}><p></p></span>
            {question.optionTwo.text}?
          </div>
          <div className='view-tally'>
            <div className='view-percent'>
              <span className={chosenOne} style={{width: `${pctOptionOne}%`}}>
                {pctOptionOne < 10 ? '' : `${pctOptionOne}%`}
              </span>
              <span className={chosenTwo} style={{width: `${pctOptionTwo}%`}}>
                {pctOptionTwo < 10 ? '' : `${pctOptionTwo}%`}
              </span>
            </div>
            <div className='view-count'>
              <div>{`${total} ${totalText}`}</div>
            </div>
          </div>
        </div>
        <Link className='see-details' to="/">
          <p>BACK</p>
        </Link>
      </div>
    </div>
  );
}

ViewQuestion.propTypes = { 
  creator: PropTypes.array.isRequired,
  question: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired
};

export default connect()(ViewQuestion);
