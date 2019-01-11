import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeQuestion from './HomeQuestion.js';
import Tabs from './Tabs.js';

const Home = ({ authedUser, users, allQuestions }) => {

  const countAnswered = Object.keys(users[authedUser].answers).length;
  const all = allQuestions.length;
  const countUnanswered = all - countAnswered;

  return (
    <div>
      <h1 className='page-title'>YOUR QUESTIONS</h1>
      <Tabs>
        <div label='Answered'>
          <ul className='home-list row'>
           {countAnswered === 0 ? 
             <div className='no-questions'>
               <p className='none'>You have not answered any questions.</p>
             </div>
            :
            allQuestions.map((question) => (
              <HomeQuestion key={question.id} question={question} tab='answered'/>
            ))}
          </ul>
        </div>

        <div label='Unanswered'>
          <ul className='home-list row'>
            {countUnanswered === 0 ? 
              <div className='no-questions'>
                <p className='none'>There are no questions to answer.</p>
                <p><Link to='/add' className='link-btn'>Add a Question</Link></p>
              </div>
            :
            allQuestions.map((question) => (
              <HomeQuestion key={question.id} question={question} tab='unanswered'/>
            ))}
          </ul>
        </div>
      </Tabs>
    </div>
  )
}

function mapStateToProps ({ authedUser, users, questions }) {
  const allQuestions = Array.from(Object.values(questions))
    .sort((a,b) => b.timestamp - a.timestamp);
  return { authedUser, users, allQuestions }
}

Home.propTypes = { 
  authedUser: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
  allQuestions: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Home);
