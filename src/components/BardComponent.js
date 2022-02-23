import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAmount: 10,
    };
  }

  /**
   * Handle pay button
   * 
   * @param {*} The charities Id
   * @param {*} amount The amount was selected
   * @param {*} currency The currency
   * 
   * @example
   * fetch('http://localhost:3001/payments', {
        method: 'POST',
        body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
      })
  */
  handlePay(id, amount, currency) {}

  render() {
    const self = this;
    const Card = styled.div`
      margin: 10px;
      border: 1px solid #ccc;
    `;

    const cards = this.props.charities.map(function (item, i) {
      const payments = [10, 20, 50, 100, 500].map((amount, j) => (
        <label key={j}>
          <input
            type="radio"
            name="payment"
            onChange={() => {
              console.log('self.selectedAmount ------------->>', self.state.selectedAmount);
              self.setState({ selectedAmount: amount });
            }}
            value={self.state.selectedAmount}
            checked={true}
          />
          {amount}
        </label>
      ));

      return (
        <Card key={i} className="row card">
          <div className="col-12 col-sm-6 ">
            <p>{item.name}</p>
            <img src={`images/${item.image}`}></img>
          </div>
          <div className="col-12 col-sm-6">
            {payments}
            <ButtonComponent
              onClick={() => {
                self.handlePay(this, item.id, this.props.selectedAmount, item.currency);
              }}
            >
              PAY
            </ButtonComponent>
          </div>
        </Card>
      );
    });
    return <div className="container">{cards}</div>;
  }
}

export default connect((state) => state)(CardComponent);
