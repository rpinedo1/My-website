import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './pages';
import { Provider } from 'react-redux';
import { store } from './modules/bootup/store';
import { AppRouter, Home } from './modules/router'
// import SigninPage from './pages/signin';

function App() {
  return (
    // Router allows us to manage Routes in the app
    <Provider store={store}>
      <BrowserRouter className="App">
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;