import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const SigninForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">User Name</label>
                <Field name="username" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
);
};


export default reduxForm({
     form:'signin'
})(SigninForm);

