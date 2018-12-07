import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import themeMap from './themes/themeMap';
import ipc from '../common/emiters';
import { kMsgUpdateTheme } from '../common/defs';

import MainLayout from './layout/MainLayout';

class App extends Component {
  state = { theme: 'light' };

  componentDidMount() {
    ipc.addListener(kMsgUpdateTheme, this.onUpdateTheme);
  }

  componentWillUnmount() {
    ipc.removeListener(kMsgUpdateTheme, this.onUpdateTheme);
  }

  onUpdateTheme = theme => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={themeMap[theme]}>
        <MainLayout />
      </ThemeProvider>
    );
  }
}

export default App;
