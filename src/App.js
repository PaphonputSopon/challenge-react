import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Donate from './pages/Donate';
class App extends Component {
  state = {
    charities: [],
    selectedAmount: 10,
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Donate />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect((state) => state)(App);
