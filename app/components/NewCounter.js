// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'antd';

import * as counterActions from '../actions/counter';
import type { Dispatch } from '../types';

const styles = {
  col: {
    textAlign: 'center',
    display: 'block',
    marginTop: 12
  }
};

type Props = {
  increment: () => any,
  incrementIfOdd: () => any,
  incrementAsync: () => any,
  decrement: () => any,
  counter: number
};

class NewCounter extends Component<Props> {
  props: Props;

  render() {
    const {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync,
      counter
    } = this.props;

    return (
      <>
        <Row>
          <Col span={12} offset={6} style={styles.col}>
            <h1 style={{ fontSize: 64 }}>{counter || 0}</h1>
          </Col>
          <Col span={12} offset={6} style={styles.col}>
            <Button.Group>
              <Button onClick={() => increment()}>Add</Button>
              <Button onClick={() => decrement()}>Minus</Button>
              <Button onClick={() => incrementIfOdd()}>Even</Button>
              <Button onClick={() => incrementAsync()}>Async Add</Button>
            </Button.Group>
          </Col>
          <Col span={24} style={{ marginTop: 24 }}>
            <span>{JSON.stringify(this.props)}</span>
          </Col>
        </Row>
      </>
    );
  }
}

export default connect(
  state => {
    return {
      counter: state.counter
    };
  },
  (dispatch: Dispatch) => {
    return bindActionCreators(counterActions, dispatch);
  }
)(NewCounter);
