import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleInitialData } from '../actions/shared.js';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav.js';
import Home from './Home.js';
import Login from './Login.js';
import LeaderBoard from './LeaderBoard.js';
import AddQuestion from './AddQuestion.js';
import View from './View.js';
import NotFound from './NotFound.js';
import '../index.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, loading } = this.props;
    const isLoggedIn = authedUser ? true : false;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {loading ? null
          : 
          <Fragment>
            <div className='nav-box'>
              <Nav login={isLoggedIn} />
            </div>
            <div className='container'>
              <div className='content'>
              {isLoggedIn ?
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/leaderBoard' exact component={LeaderBoard} />
                  <Route path='/add' exact component={AddQuestion} />
                  <Route path='/questions/:id' component={View} />
                  <Route component={NotFound} />
                </Switch>
              : <Switch>
                  <Route component={Login} />
                </Switch>
              }
              </div>
            </div>
          </Fragment>
          }
        </Fragment>
      </Router>   
    );
  }
}

function mapStateToProps ({ users, authedUser }) {
  const allUsers = Object.values(users);
  return { allUsers, authedUser };
}

App.propTypes = { 
  authedUser: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(App);
