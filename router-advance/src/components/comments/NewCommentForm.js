import { useRef, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/use-http';

import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const {sendRequest, status, error} = useHttp(addComment);
  const params = useParams();

  const {onAddComment} = props;

  const submitFormHandler = (event) => {
    event.preventDefault();
    const comment = commentTextRef.current.value;
    sendRequest(
      {
        quoteId: params.quoteId, 
        commentData: {text: comment}
      }
      );
  };

  useEffect(() => {
    if(!error && status === 'completed') {
      onAddComment();
    }
  }, [onAddComment, status, error]);


  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && <LoadingSpinner />}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
