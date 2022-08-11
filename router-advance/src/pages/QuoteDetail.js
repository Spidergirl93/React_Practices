import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";

import { getSingleQuote } from '../lib/api';
import Comments from "../components/comments/Comments";
import HighLightedQuote from '../components/quotes/HighlightedQuote';




const QuoteDetail = () => {
    const params = useParams();

    const match = useRouteMatch();

    const {sendRequest, data, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(params.quoteId);
    }, [sendRequest]);


    if(!data) {
        return <p className="centered">No quote found!</p>
    }

    if (error) {
        return <div className="centered">
            <p>An error occured!</p>
        </div>
    }

    return(
        <Fragment>
            <HighLightedQuote text={data.content} author={data.author} />
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