// domain.com/

import { Fragment } from "react";
import Link from  'next/link';

const HomePage = () => {
  return (
    <Fragment>
      <h1>Home page</h1>
      <ul>
        <li>
            <Link href="/news">All the news</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
