import { useRef, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  const {token: ctxToken} = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!ctxToken) {
      history.push('/');
    }
  }, [ctxToken, history]);

  const newPass = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPass = newPass.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDM9-YuI0iY7iX00-qZO8-w37Rma18MjRQ',
    {
      method: 'POST',
      body: JSON.stringify(
        {
          idToken: ctxToken,
          password: enteredPass,
          returnSecureToken: true
        }
      ),
      headers: 
      {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if(res.ok) {
        return console.log(res);
      } else {
        throw new Error('Failed');
      }
    }).catch (err => {
      console.log(err);
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'  ref={newPass} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
