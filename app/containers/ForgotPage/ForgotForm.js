import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const ForgotForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
);
};


export default reduxForm({
     form:'forgot'
})(ForgotForm);

