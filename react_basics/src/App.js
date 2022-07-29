import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthProvider from './contexts/Auth';

function App() {

  const AuthContext = useContext(AuthProvider);
  
  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!AuthContext.isLoggedIn && <Login />}
        {AuthContext.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
