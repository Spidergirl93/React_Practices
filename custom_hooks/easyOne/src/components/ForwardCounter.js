import useCounter from '../hooks/counter-hook';

import Card from './Card';

const ForwardCounter = () => {
  
  const counter = useCounter("forward");

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
