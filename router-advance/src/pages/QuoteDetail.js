import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";


import Comments from "../components/comments/Comments";
import HighLightedQuote from '../components/quotes/HighlightedQuote';


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
        content: 'I is so high'
    },
];


const QuoteDetail = () => {
    const params = useParams();

    const match = useRouteMatch();

    const quote = DUMMY_QUOTES.find(quote => (quote.id === params.quoteId));

    if(!quote) {
        return <p>No quote found!</p>
    }

    return(
        <Fragment>
            <HighLightedQuote text={quote.content} author={quote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;