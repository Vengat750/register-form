import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setFormValues } from '../actions';

import PageDescription from './page-description';
import Checkbox from './checkbox';
import Header from './header';
import Country from './country';

import '../css/personal-details.css';
import '../css/header.css';

const required = value => value ? undefined : 'Required'
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const PersonalDetails = props => {
    const { handleSubmit, gender, invalid, region,country } = props;
    let disable = 'disable';
    if (gender && !invalid && region && country ) {
        disable = '';
    }
    const onSubmit = (values, dispatch) => {
        dispatch(setFormValues(values));
        props.history.push('/company-details');
    }
    return (
        <div>
            <Header head1='active' head2='inactive' head3='inactive' />
            <div className='main-form'>
                <PageDescription heading='Add your Personal Details' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='box'>
                        <div className='container'>
                            <div>
                                <label>Full Name</label>
                                <div>
                                    <Field
                                        name="fullName"
                                        component="input"
                                        type="text"
                                        maxLength="40"
                                        validate={[required]}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Gender</label>
                                <div>
                                    <Field
                                        name="gender"
                                        component={Checkbox}
                                        type='select'
                                    />
                                </div>
                            </div>
                            <div className='country'>
                                <label>Country</label>
                                <div>
                                <Field name='country and state' component={Country} />
                                </div>
                                
                            </div>
                            <div>
                                <label>Phone</label>
                                <div>
                                    <Field
                                        name="phone"
                                        component="input"
                                        type="text"
                                        maxLength="10"
                                        minLength="10"
                                        validate={[required, number]}
                                    />
                                </div>
                            </div>
                            <div className='buttons'>
                                <button className={`next ${disable}`} type="submit" disabled={invalid}>Next</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className=" signin">
                    <p>Already have an account? <span className='link'>Log in</span></p>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        gender: state.details.gender,
        region: state.details.region,
        country: state.details.country,
    }
}

let PersonalDetail = connect(mapStateToProps, { setFormValues })(PersonalDetails);

export default reduxForm({ form: 'personalDetails' })(PersonalDetail);
