// domain.com/news

import { Fragment } from "react";

const News = () => {

  const userId = 45;

  return (
    <Fragment>
      <h1>The news Page</h1>
      <ul>
        <li>
          <a href={`/news/${userId}`}>News Detail</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
