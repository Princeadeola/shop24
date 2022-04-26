import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/Auths/Login";
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={
          <>
            <Header />
            <Home />
          </>
        } />

        <Route path="/login" caseSensitive={false} element={
          <>
            <Header />
            <Login />
          </>
        } />

        <Route path="/checkout" caseSensitive={false} element={
          <>
            <Header />
            <Checkout />
          </>
        } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
