export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function saveUserAnswer ({ authedUser, id, answer }) {
  return {
    type: SAVE_USER_ANSWER,
      authedUser,
      id,
      answer,
  }
}

function saveUserQuestion ({ authedUser, id }) {
  return {
    type: SAVE_USER_QUESTION,
      authedUser,
      id,
  }
}

export function handleSaveUserAnswer (authedUser, id, answer) {
  return (dispatch) => {
    dispatch(saveUserAnswer({ authedUser, id, answer }));
    return true;
  }
}

export function handleSaveUserQuestion (authedUser, id) {
  return (dispatch) => {
    dispatch(saveUserQuestion({ authedUser, id }));
    return true;
  }
}

