import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import { handleSaveQuestionAnswer } from '../actions/questions.js';
import { handleSaveUserAnswer } from '../actions/users.js';

const VoteQuestion = ({ creator, question, authedUser, dispatch }) => {

    const creatorId = creator.map(user => user.id)[0];
    const creatorName = creator.map(user => user.name)[0];

    const handleVote = (event, answer) => {
      dispatch(handleSaveQuestionAnswer(authedUser, question.id, answer));
      dispatch(handleSaveUserAnswer(authedUser, question.id, answer));
    }

    return (
      <div className='home-list'>
        <h1 className='page-title'>VOTE</h1>
        <div className='question vote'>
          <div className='question-inner'>
            <div className='question-header'>
              <div className='avatar'>
                <img src={`${window.location.origin}/images/${creatorId}.jpg`} alt={creatorName} />
              </div>
              <span>{creatorName} asks</span>
              <span className='flex-right'><TimeAgo date={question.timestamp} /></span>
            </div>
            <div className='question-title'>
              Would you rather:
            </div>
            <div 
              className='option-one'
              onClick={(event) => handleVote(event, 'optionOne')}
            >
              <span className='chosen'><p></p></span>
              {question.optionOne.text}?
            </div>
            <div 
              className='option-two'
              onClick={(event) => handleVote(event, 'optionTwo')}>
              <span className='chosen'><p></p></span>
              {question.optionTwo.text}?
            </div>
          </div>

          <div className='see-details vote'>
            <p>Select One</p>
          </div>
        </div>
      </div>
    );
}

VoteQuestion.propTypes = { 
  creator: PropTypes.array.isRequired,
  question: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(VoteQuestion);