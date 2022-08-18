import { useState } from "react";

const Greeting = () => {
  const [isOn, setIsOn] = useState(false);

  const onOffHandler = () => {
    setIsOn((state) => {
      return !state;
    });
  };

  return (
    <div>
      <h1>Greeting page</h1>
      <br />
      <p>Welcome to this page!</p>
      {!isOn && <p>OFF</p>}
      {isOn && <p>ON</p>}
      <button onClick={onOffHandler}>{isOn ? 'Switch OFF' : 'Switch ON'}</button>
    </div>
  );
};

export default Greeting;
