

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Grid, Message } from 'semantic-ui-react';
import { compose } from 'redux';
import { history as historyPropTypes } from 'history-prop-types';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSigninPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loginRequest, resetError } from './actions';
import SigninForm from './SigninForm';


export class SigninPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // this.props.dispatch(resetError());
  }

  submit = (values) => {
     const val = values.toObject();
     const { username, password } = val;
     const { history } = this.props;
     this.props.dispatch(loginRequest({ username, password, history }));
    console.log(val);
  }

  render() {
    console.log("props",this.props);
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <SigninForm onSubmit={this.submit}/>
        </Grid.Column>
        {this.props.error ? this.props.error: null}
    </Grid>
    );
  }
}

SigninPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  signin: PropTypes.object,
  history: PropTypes.shape(historyPropTypes),
};


function mapStateToProps(state) {
  console.log("state",state);
  return {
    signinpage: makeSelectSigninPage(),
    error: state.getIn(['signinPage', 'error']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signinPage', reducer });
const withSaga = injectSaga({ key: 'signinPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SigninPage);
