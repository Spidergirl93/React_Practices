import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import useHttp from '../hooks/use-http';

import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote } from "../lib/api";

const NewQuote = () => {


    const {sendRequest, status} = useHttp(addQuote);

    const history = useHistory();

    useEffect(() => {
        if(status === 'completed') {
            history.push('/quotes');
        }
    }, [history, status]);

    const addQuoteHandler = (newQuote) => {
        sendRequest(newQuote);
    };



    return(
        <div>
            <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
        </div>
    );
};

export default NewQuote;