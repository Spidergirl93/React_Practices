import { useState, useEffect } from 'react';

const useCounter = (props) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(props === "Back") {
                setCounter((prevCounter) => prevCounter - 1);
            } else {
                setCounter((prevCounter) => prevCounter + 1);
            }
        
        }, 1000);

        return () => clearInterval(interval);
    }, [props]);
    
    return counter;
};

export default useCounter;