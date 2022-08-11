import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {sendRequest, status, data, error} = useHttp(getAllComments, true);
  const params = useParams();

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest,quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const finishAddCommentHandler = useCallback(() => {
    sendRequest(quoteId);
    setIsAddingComment(false);
  }, [sendRequest, quoteId, setIsAddingComment]);

  const comments = () => {
    if (status === 'pending') {
      return <div className='centered'>
        <LoadingSpinner />;
      </div>;

    } else if (status === 'completed' && (data.length === 0 || !data)) {
      return <p className='centered'>No comments were found</p>;

    } else if (error) {
      return <p className='centered'>An error occured while loading the comments</p>;

    } else {
      return <CommentsList comments={data} />;
    }
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddComment={finishAddCommentHandler} />}
      {comments()}
    </section>
  );
};

export default Comments;
