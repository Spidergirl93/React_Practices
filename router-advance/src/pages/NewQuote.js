import QuoteForm from "../components/quotes/QuoteForm";


const NewQuote = () => {

    const addQuoteHandler = (newQuote) => {
        console.log(newQuote);
    };



    return(
        <div>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </div>
    );
};

export default NewQuote;