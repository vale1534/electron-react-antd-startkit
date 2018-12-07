import React, { Component } from 'react';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ipc from '../../common/emiters';
import { kMsgUpdateTheme } from '../../common/defs';

import {
  SiderIcon,
  StyledLayout,
  StyledContent,
  ScrollbarGlobalStyle
} from './MainLayout.styled';

import SiderMenu from '../siderMenu';
import MockSection1 from './MockSection1';
import MockSection2 from './MockSection2';
import SettingIcon from './SettingIcon';
import Topbar from './Topbar';

const { Sider, Content } = Layout;

class MainLayout extends Component {
  state = {
    darkMode: false,
    collapsed: true
  };

  toggleCollapsed = () => {
    this.setState(state => ({
      collapsed: !state.collapsed
    }));
  };

  toggleDark = () => {
    this.setState(
      state => ({ darkMode: !state.darkMode }),
      () => ipc.emit(kMsgUpdateTheme, this.state.darkMode ? 'dark' : 'light')
    );
  };

  render() {
    const { collapsed, darkMode } = this.state;
    const darkIcon = darkMode ? 'moon' : 'sun';
    return (
      <>
        <ScrollbarGlobalStyle />
        <StyledLayout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={48}
          >
            <div className="logo" />
            <SiderMenu />
            <SiderIcon onClick={this.toggleDark}>
              <FontAwesomeIcon icon={darkIcon} />
            </SiderIcon>
            <SettingIcon type="setting" />
          </Sider>
          <Content>
            <Topbar
              collapsed={collapsed}
              toggleCollapsed={this.toggleCollapsed}
            />
            <StyledContent>
              <div className="content">
                <MockSection1 />
                <MockSection2 />
              </div>
            </StyledContent>
          </Content>
        </StyledLayout>
      </>
    );
  }
}

export default MainLayout;
