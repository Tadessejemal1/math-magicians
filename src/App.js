import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Quote from './Pages/Quote';
import CalculatorPage from './Pages/CalculatorPage';
import Header from './Pages/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
