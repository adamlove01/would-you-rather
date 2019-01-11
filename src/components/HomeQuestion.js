import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeQuestion = ({ authedUser, question, tab }) => {

  let chosenOne = question.optionOne.votes.find((voter) => {
    return voter === authedUser;
  });

  let chosenTwo = question.optionTwo.votes.find((voter) => {
    return voter === authedUser;
  });

  let buttonText;

  if (tab === 'answered') {
    if (!chosenOne && !chosenTwo) {
      return '';
    } else {
      chosenOne = chosenOne ? 'yes' : '';
      chosenTwo = chosenTwo ? 'yes' : '';
      buttonText = 'DETAILS';
    }
  } else {
    if (chosenOne || chosenTwo) {
      return ''; 
    } else {
       chosenOne = 'none';
       chosenTwo = 'none';
       buttonText = 'VOTE';
    }
  }

  return (
    <li className='col-md-6'>
      <div className='question'>
        <div className='question-inner'>
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
        </div>
        <Link className='see-details' to={{
          pathname: `/questions/${question.id}`,
          question: {question},
          authedUser: {authedUser},
          type: {tab}
        }}>
          <p>{buttonText}</p>
        </Link>
      </div>
    </li>
  );
}

function mapStateToProps ({ authedUser }, { question, tab }) {
  return { authedUser, question, tab };
}

HomeQuestion.propTypes = { 
  authedUser: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired,
  tab: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(HomeQuestion);
