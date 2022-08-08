import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Batman',
        content: 'I hate Joker'
    },
    {
        id: 'q2',
        author: 'Maryam',
        content: 'I Love Pizza'
    },
    {
        id: 'q3',
        author: 'Shrek',
        content: 'I am Green'
    },
    {
        id: 'q4',
        author: 'Mr. Robot',
        content: 'I am so high'
    },
]



const AllQuote = () => {
    return(
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuote;