import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions.js';
import { handleSaveUserQuestion } from '../actions/users.js';
import { showLoading, hideLoading } from 'react-redux-loading';

class AddQuestion extends Component {
  state = { text1: '', text2: '', };

  handleChange1 = (e) => {
    const text1 = e.target.value;
     this.setState(() => ({ text1 }));
  };

  handleChange2 = (e) => {
    const text2 = e.target.value;
     this.setState(() => ({ text2 }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text1, text2 } = this.state;
    const { dispatch } = this.props;
    const optionOneText = text1.replace(/[?!. ]+$/g, '');
    const optionTwoText = text2.replace(/[?!. ]+$/g, '');

    dispatch(showLoading());
    dispatch(handleSaveQuestion(optionOneText, optionTwoText))
    .then((question) => {
      return dispatch(handleSaveUserQuestion(question.question.author, question.question.id))
    })
    .then(() => {
      this.setState(() => ({ text1: '', text2: '' }));
      this.props.history.push('/');
      dispatch(hideLoading());
    });
  }

  render() {
    
    const { text1, text2 } = this.state;

    return (
      <div className='home-list'>
        <h1 className='page-title'>ADD A QUESTION</h1>
        <form className='add-question' onSubmit={this.handleSubmit}>
        <div className='question vote'>
          <div className='question-inner'>
            <div className='question-title'>
              Would you rather:
            </div>
            <input 
              className='add-option one'
              placeholder='Option One'
              value={text1}
              onChange={this.handleChange1}
            />
            <input 
              className='add-option two'
              placeholder='Option Two'
              value={text2}
              onChange={this.handleChange2}
            />
          </div>
          <button
            className='see-details'
            type='submit'
            disabled={text1 === '' && text2 === ''}>
              <p>ADD</p>
          </button>
        </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddQuestion);
