import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Input } from 'antd';

import tv from '../themes/themeVars';

import CtrlBox from './CtrlBox';

const StyledTopbar = styled.div`
  user-select: none;
  height: 36px;
  display: flex;
  align-items: flex-start;
  color: ${tv.topbarForeColor};
  background-color: ${tv.topbarBackColor};
  box-shadow: ${tv.topbarBoxShadow};
  -webkit-app-region: drag;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border: 1px solid ${tv.frameBorderColor};
  border-bottom: none;
  .resizer {
    -webkit-app-region: no-drag;
    position: absolute;
    top: 0;
    width: 100%;
    height: 20%;
  }
  .btns-group {
    -webkit-app-region: no-drag;
    height: 100%;
    display: flex;
    align-items: center;
    > .anticon {
      margin: auto;
      height: 100%;
      width: 48px;
      font-size: 18px;
      cursor: pointer;
      -webkit-app-region: no-drag;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: ${tv.siderMenuActiveBackColor};
        color: ${tv.siderMenuActiveForeColor};
      }
    }
    > .divSearch {
      height: 28px;
      overflow-y: hidden;
      border-radius: 4px;
      margin-left: 4px;
      input {
        background-color: ${tv.searchInputBackColor};
        color: ${tv.searchInputForeColor};
        min-height: 28px;
        height: 28px;
        border-radius: 0;
        border: none;
      }
      i.ant-input-search-icon {
        color: ${tv.searchInputForeColor};
      }
    }
  }
  .title-group {
    text-align: center;
    height: 32px;
    line-height: 28px;
    margin-top: 4px;
    flex-grow: 100;
  }
`;

class Topbar extends Component {
  render() {
    const { collapsed, toggleCollapsed } = this.props;
    return (
      <>
        <StyledTopbar>
          <div className="resizer" />
          <div className="btns-group">
            <Icon
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggleCollapsed}
            />
            <div className="divSearch">
              <Input.Search />
            </div>
          </div>
          <div className="title-group">阿里妈妈MUX倾力打造</div>
          <CtrlBox />
        </StyledTopbar>
      </>
    );
  }
}

export default Topbar;
