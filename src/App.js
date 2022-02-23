import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Donate from './pages/Donate';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Donate />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect((state) => state)(App);
