import { saveQuestionAnswer, saveQuestion } from '../utils/api.js';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function saveQA({ authedUser, id, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
      authedUser,
      id,
      answer,
  }
}

function saveQ(question) {
  return {
    type: SAVE_QUESTION,
      question,
  }
}

export function handleSaveQuestionAnswer(authedUser, id, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(saveQA({ authedUser, id, answer }));
    return saveQuestionAnswer(authedUser, id, answer)
    .then(() => dispatch(hideLoading()))
    .catch((e) => {
      console.warn('Error in handleSaveQuestionAnswer', e);
      alert('There was an error saving your answer. Please try again.');
    });
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({ optionOneText, optionTwoText, author: authedUser })
    .then((question) => dispatch(saveQ(question)))
    .catch((e) => {
      console.warn('Error in handleSaveQuestion', e);
      alert('There was an error saving your question. Please try again.');
    });
  }
}