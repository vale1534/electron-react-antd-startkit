import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'antd';
import { action } from '../store';
import * as counterActions from '../actions/counter';
import * as defs from '../actions/defs';

const styles = {
  col: {
    textAlign: 'center',
    display: 'block',
    marginTop: 12
  }
};

class NewCounter extends Component {
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
              <Button onClick={() => increment()}>Up</Button>
              <Button onClick={() => decrement()}>Down</Button>
              <Button onClick={() => incrementIfOdd()}>Even</Button>
              <Button onClick={() => incrementAsync()}>Async Up</Button>
            </Button.Group>
          </Col>
          <Col span={12} offset={6} style={styles.col}>
            <Button.Group>
              <Button onClick={() => action(defs.kIncrementCounter)}>Up</Button>
              <Button onClick={() => action(defs.kDecrementCounter)}>
                Down
              </Button>
              <Button onClick={() => action(defs.kIncrementCounterIfOdd)}>
                Even
              </Button>
              <Button onClick={() => action(defs.kIncrementCounterAsync)}>
                Async Up
              </Button>
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
  state => ({
      counter: state.counter
    }),
  (dispatch) => bindActionCreators(counterActions, dispatch)
)(NewCounter);
