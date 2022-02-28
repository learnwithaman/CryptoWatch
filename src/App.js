import { makeStyles } from '@material-ui/core';
import Homepage from './Pages/HomePage';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinPage from './Pages/CoinPage';
import Header from './components/Header';
import Alert from './components/Alert';
import { CryptoState } from './CryptoContext';
import ProtectedRoute from './ProtectedRoute';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  const { user } = CryptoState();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path='/' component={Homepage} exact />
        <ProtectedRoute path='/coins/:id' component={CoinPage} auth={user} />
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
