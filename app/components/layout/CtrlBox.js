import { ipcRenderer } from 'electron';
import React, { Component } from 'react';
import styled from 'styled-components';

import tv from '../themes/themeVars';
import AwesomeIcon from '../share/AwesomeIcon';

import {
  kMsgQueryMaximizeState,
  kMsgMaximizeStateUpdated,
  kMsgSetMaximizeState,
  kMsgSetMinimizeState,
  kMsgCloseWindow
} from '../../common/defs';

const StyledCtrlBox = styled.div`
  -webkit-app-region: no-drag;
  height: 100%;
  display: flex;
  align-items: center;

  .awesome-icon {
    padding: 0 16px;
    height: 30px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: ${tv.siderMenuActiveBackColor};
      color: ${tv.siderMenuActiveForeColor};
    }
    &.ctrl-close:hover {
      background-color: #d32f2f;
      color: #eeeeee;
    }
    &.ctrl-bug {
      margin-right: 8px;
      padding: 0 10px;
    }
    &.ctrl-bug:hover {
      background-color: #ff9800;
      color: #eeeeee;
    }
  }
`;

class CtrlBox extends Component {
  state = { maximized: false };

  onCommentsClick = () => {};

  onMinimizeClick = () => {
    ipcRenderer.send(kMsgSetMinimizeState);
  };

  onMaximizeClick = () => {
    ipcRenderer.send(kMsgSetMaximizeState, !this.state.maximized);
  };

  onCloseClick = () => ipcRenderer.send(kMsgCloseWindow);

  onMaximizeStateUpdated = (evt, maximized) => {
    this.setState({ maximized });
  };

  componentDidMount() {
    ipcRenderer.send(kMsgQueryMaximizeState);
    ipcRenderer.addListener(
      kMsgMaximizeStateUpdated,
      this.onMaximizeStateUpdated
    );
  }

  componentWillUnmount() {
    ipcRenderer.removeListener(
      kMsgMaximizeStateUpdated,
      this.onMaximizeStateUpdated
    );
  }

  render() {
    const { maximized } = this.state;
    return (
      <>
        <StyledCtrlBox>
          <AwesomeIcon
            className="ctrl-bug"
            icon="comments"
            iconSet="fas"
            onClick={this.onCommentsClick}
          />
          <AwesomeIcon
            className="ctrl-min"
            icon="window-minimize"
            onClick={this.onMinimizeClick}
          />
          <AwesomeIcon
            className="ctrl-max"
            icon={maximized ? 'window-restore' : 'window-maximize'}
            onClick={this.onMaximizeClick}
          />
          <AwesomeIcon
            className="ctrl-close"
            icon="window-close"
            onClick={this.onCloseClick}
          />
        </StyledCtrlBox>
      </>
    );
  }
}

export default CtrlBox;
