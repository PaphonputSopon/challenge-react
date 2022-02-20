import React from 'react';
import { connect } from 'react-redux';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const donate = this.props.donate;

    return <p>{donate} in CardComponent</p>;
  }
}

export default connect((state) => state)(CardComponent);
