import { Fragment } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {

  const history = useHistory();

  const location = useLocation();

  console.log(location);
  

  const sortHandler = () => {

    history.push('/quotes?sort=asc');
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>Sort Ascending</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.content}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
