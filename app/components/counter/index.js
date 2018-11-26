import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';
import Counter from './Counter'

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
