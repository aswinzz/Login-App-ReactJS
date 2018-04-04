import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const SignupForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">User Name</label>
                <Field name="username" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="password1">Password</label>
                <Field name="password1" component="input" type="password" />
            </div>
            <div>
                <label htmlFor="password2">Confirm Password</label>
                <Field name="password2" component="input" type="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
);
};


export default reduxForm({
     form:'signup'
})(SignupForm);

