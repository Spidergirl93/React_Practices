import React, {useState, useEffect} from 'react';


const Auth = React.createContext ({
    isLogegdIn: false,
    onLogout : () => {},
    onLogin : (email, password) => {}
});

export const AuthProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const loggedIn = localStorage.getItem('logged_in');
        if (loggedIn === '1') {
          setIsLoggedIn(true);
        }
      }, []);
    


    const loginHandler = () => {

        localStorage.setItem('logged_in', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {

        setIsLoggedIn(false);
        localStorage.removeItem('logged_in');
    };

    return (
        <Auth.Provider value={{
            isLoggedIn : isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>{props.children}</Auth.Provider>
    );
}

export default Auth;