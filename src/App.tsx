import React from 'react';
import './App.scss';
import { useMoralis } from 'react-moralis';
import PublicRoutes from './core/PublicRoutes';

function App() {
  // TODO: Metamask Integration
  // const {
  //   authenticate,
  //   isAuthenticated,
  //   isAuthenticating,
  //   user,
  //   account,
  //   logout
  // } = useMoralis();

  // const login = async () => {
  //   if (!isAuthenticated) {
  //     await authenticate({ signingMessage: 'Log in using Moralis' })
  //       .then(function (user) {
  //         console.log('logged in user:', user);
  //         console.log(user!.get('ethAddress'));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // };

  // const logOut = async () => {
  //   await logout();
  //   console.log('logged out');
  // };

  return (
    <div>
      {/* <h1>Hello World!</h1>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>
        Logout
      </button> */}
      <PublicRoutes />
    </div>
  );
}

export default App;
