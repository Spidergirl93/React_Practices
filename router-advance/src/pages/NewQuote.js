import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";


const NewQuote = () => {


    const history = useHistory();

    const addQuoteHandler = (newQuote) => {
        console.log(newQuote);

        history.push('/quotes');
    };



    return(
        <div>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </div>
    );
};

export default NewQuote;