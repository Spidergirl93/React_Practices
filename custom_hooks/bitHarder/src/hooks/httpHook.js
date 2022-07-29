import { useState, useCallback} from 'react';

const useHttp = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const request = useCallback(async (requestConfig, componentMethod) => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch( requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        });

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();
        componentMethod(data);

        } catch (err) {
        setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        request
    }
};

export default useHttp;