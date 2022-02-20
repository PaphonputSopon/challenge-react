import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { className, variant } = this.props;
    return (
      <Button className={className} variant={variant || 'outline-primary'}>
        {this.props.children}
      </Button>
    );
  }
}
export default connect((state) => state)(ButtonComponent);
