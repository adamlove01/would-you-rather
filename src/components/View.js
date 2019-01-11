import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VoteQuestion from './VoteQuestion.js';
import ViewQuestion from './ViewQuestion.js';
import NotFound from './NotFound.js';

const View = ({ authedUser, allUsers, allQuestions, match }) => {

  const question = allQuestions.find(question => question.id === match.params.id);

  if (question === undefined) {
    return (
      <NotFound />
    )
  }

  let chosenOne = question.optionOne.votes.find((voter) => {
    return voter === authedUser;
  });

  let chosenTwo = question.optionTwo.votes.find((voter) => {
    return voter === authedUser;
  });

  const creator = allUsers.filter(user => user.id === question.author);

  if (!chosenOne && !chosenTwo) {
    return (
      <VoteQuestion 
        creator={creator} 
        question={question}
        authedUser={authedUser}
      />
    ); 
  } else {
    return (
      <ViewQuestion 
        creator={creator} 
        question={question}
        authedUser={authedUser}
      />
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  const allUsers = Object.values(users);
  const allQuestions = Object.values(questions);
  return { authedUser, allUsers, allQuestions };
}

View.propTypes = { 
  authedUser: PropTypes.string.isRequired,
  allUsers: PropTypes.array.isRequired,
  allQuestions: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(View);
