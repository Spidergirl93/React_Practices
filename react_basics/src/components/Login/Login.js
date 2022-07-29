import React, { useEffect, useState, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Auth from '../../contexts/Auth';


const generalReducer = (state, action) => {

  if (action.type === 'EMAIL_CHANGE') {
    return ({value: action.value, isValid: action.value.includes('@')});

  } else if (action.type === 'EMAIL_CHECK') {
    return ({value : state.value, isValid: state.value.includes('@')});
    
  } else if (action.type === 'PASS_CHANGE') {
    return ({value: action.value, isValid: action.value.trim().length > 6});

  } else if (action.type === 'PASS_CHECK') {
    return ({value: state.value, isValid: state.value.trim().length > 6});
  }

  return {
    value: '',
    isvalid: false
  };
};


const Login = (props) => {


  const [formIsValid, setFormIsValid] = useState(false);

  const [email, dispatchEmail] = useReducer (generalReducer, {value:'', isValid: null});
  const [password, dispatchPass] = useReducer (generalReducer, {value: '', isValid: null});

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid (
        password.isValid && email.isValid
      );
    }, 500);

    return () => {
      console.log('no');
      clearTimeout(timer);
    };
    
  }, [setFormIsValid, password.isValid, email.isValid]);

  const AuthContext = useContext(Auth);
  

  const emailChangeHandler = (event) => {
    dispatchEmail ({type: 'EMAIL_CHANGE', value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type: 'PASS_CHANGE', value: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail ({type: 'EMAIL_CHECK'});
  };

  const validatePasswordHandler = () => {
    dispatchPass ({type: 'PASS_CHECK'});
    
  };

  const submitHandler = (event) => {
    event.preventDefault();
    AuthContext.onLogin(email.value, password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            email.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            password.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
