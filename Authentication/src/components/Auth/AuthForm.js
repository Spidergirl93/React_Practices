import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';





const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const emailRef = useRef();
  const passRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPass = passRef.current.value;

    if(isLogin) {

    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDM9-YuI0iY7iX00-qZO8-w37Rma18MjRQ',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPass,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if(res.ok) {
            //...
          } else {
            return res.json().then((data) => {
              console.log(data);
              let errorMsg = 'Failed';

              if(data && data.error && data.error.message) {
                errorMsg = data.error.message;
              }
              alert(errorMsg);
            })
          } 
        });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
