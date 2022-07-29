import useCounter from '../hooks/counter-hook';

import Card from './Card';

const BackwardCounter = () => {

  const counter = useCounter("Back");

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
