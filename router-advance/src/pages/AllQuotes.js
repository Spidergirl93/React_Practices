import { Fragment, useEffect } from 'react';
import useHttp from '../hooks/use-http';

import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';


const AllQuote = () => {


    const { sendRequest, status, data, error} = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);


    if(status==='pending') {
        return <div className='centered'><LoadingSpinner /></div>;
    }  
    
    if(status === 'completed' & data.length === 0) {
        return <NoQuotesFound />;
    }

    if(error) {
        return <div className='cemtered'>
            <p>An error has occured!</p>
        </div>
    }


    return(
        <Fragment>
             <QuoteList quotes={data} />
        </Fragment>
        
    );
};

export default AllQuote;