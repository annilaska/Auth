import './App.css';
import Header from './components/header/Header';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';
import { Provider } from 'react-redux';
import { store } from './store'
import HomePage from './components/homePage/HomePage';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/'element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registar' element={<SignUp />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
