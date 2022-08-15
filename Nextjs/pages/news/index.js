// domain.com/news

import { Fragment } from "react";
import Link from "next/link";


const News = () => {
  const userId = 45;

  return (
    <Fragment>
      <h1>The news Page</h1>
      <ul>
        <li>
          <Link href={`/news/${userId}`}>News Detail</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
