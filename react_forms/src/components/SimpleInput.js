import { useState } from 'react';

const SimpleInput = (props) => {
  const [input, setInput] = useState({name: '', email: ''});
  const [fieldsTouched, setFieldsTouched] = useState({name: false, email: false});

  const nameValid = input.name.trim() !== '';
  const emaiilValid = input.email.includes('@');
  const inputValid = nameValid && emaiilValid;
  const nameInputIsInvalid = !nameValid && fieldsTouched.name;
  const emailInputIsInvalid = !emaiilValid && fieldsTouched.email;

  let formIsValid = false;

  if (inputValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setInput({...input, name:event.target.value});
  };

  const nameInputBlurHandler = (event) => {
    setFieldsTouched({...fieldsTouched, name: true});
  };

  const emailInputChangeHandler = (event) => {
    setInput({...input, email:event.target.value});
  };

  const emailInputBlurHandler = (event) => {
    setFieldsTouched({...fieldsTouched, email: true});
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setFieldsTouched({name: true, email: true});

    if (!inputValid) {
      return;
    }


    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setInput({name: '', email: ''});
    setFieldsTouched({name: false, email: false});
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

    const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
    

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={input.name}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
        </div>
        <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={input.email}
        />
        {emailInputIsInvalid && (
          <p className='error-text'> Invalid Email</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;