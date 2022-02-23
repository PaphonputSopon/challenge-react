import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { summaryDonations } from '../utils/Helpers';
import { getCharities } from '../api/charities/charities';
import CardComponent from '../components/CardComponent';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: [],
      selectedAmount: 10,
    };
  }

  async componentDidMount() {
    const self = this;
    fetch('http://localhost:3001/charities')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        self.setState({ charities: data });
      });

    fetch('http://localhost:3001/payments')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        self.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount: summaryDonations(data.map((item) => item.amount)),
        });
      });
    console.log(' API.Charities(); ------------->>', await getCharities());
  }

  render() {
    const style = {
      color: 'red',
      margin: '1em 0',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
    };

    const donate = this.props.donate;
    const message = this.props.message;

    return (
      <div className="main-container">
        <h1 className="test-sass">Omise Tamboon React</h1>
        <p>All donations: {donate}</p>
        <p style={style}>{message}</p>
        <CardComponent {...this.state}></CardComponent>
      </div>
    );
  }
}

export default connect((state) => state)(HomePage);
