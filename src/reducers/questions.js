import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER, SAVE_QUESTION } from '../actions/questions';

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
            [action.answer]: {
              votes: state[action.id][action.answer].votes.concat([action.authedUser]),
              text: state[action.id][action.answer].text,
            }
        }
      }
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question
        }
      }
    default:
      return state;
  }
}