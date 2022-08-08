import { Route, Switch, Redirect} from 'react-router-dom';

import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import AllQuote from './pages/AllQuotes';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
        <Route path='/quotes' exact>
          <AllQuote />
        </Route>
        <Route path='/quotes/:quoteid'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
