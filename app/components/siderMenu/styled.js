import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Menu } from 'antd';

import tv from '../themes/themeVars';

const GlobalStyle = createGlobalStyle`
  .sider-menu-popup-xyz1.ant-menu-submenu-popup, 
  .sider-menu-popup-xyz1.ant-menu-submenu-popup .ant-menu-submenu-popup, .sider-menu-popup-xyz1.ant-menu-submenu-popup .ant-menu-sub {
    background-color: ${tv.siderMenuBackColor};
    background: ${tv.siderMenuBackColor};
    color: ${tv.siderMenuForeColor};
    
    .ant-menu-submenu-title:hover,
    .ant-menu-item:hover {
      background-color: ${tv.siderMenuActiveBackColor};
      color: ${tv.siderMenuActiveForeColor};
    }

    .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-title .ant-menu-submenu-arrow:after {
      background: ${tv.siderMenuForeColor} !important;
    }

    .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after {
      background: ${tv.siderMenuActiveForeColor} !important;
    }

    .ant-menu-submenu-title:active,
    .ant-menu-submenu-arrow:active,
    .ant-menu-item:active {
      background-color: ${tv.siderMenuActiveBackColor};
      color: ${tv.siderMenuActiveForeColor};
    }
    
    .ant-menu-item-selected {
      background-color: ${tv.siderMenuSelectedBackColor} !important;
      color: ${tv.siderMenuSelectedForeColor} !important;
      &::after {
        display: none;
      }
    }

    .ant-menu-item-group-title {
      color: ${tv.siderMenuDisableForeColor};
    }

    .ant-menu-submenu-active > .ant-menu-submenu-title {
      background-color: ${tv.siderMenuActiveBackColor};
      color: ${tv.siderMenuActiveForeColor};
    }

    .ant-menu-submenu-selected > .ant-menu-submenu-title {
      background-color: ${tv.siderMenuSelectedBackColor} !important;
      background: ${tv.siderMenuSelectedBackColor} !important;
      color: ${tv.siderMenuSelectedForeColor} !important;
    }
  }
`;

const StyledMenu = styled(Menu)`
  user-select: none;
  flex-grow: 100;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid ${tv.siderMenuBackColor};
  /* transition: border-right 0.1s linear; */
  &,
  .ant-menu-inline,
  .ant-menu-item-group-title,
  .ant-menu-submenu-popup > .ant-menu-sub {
    background-color: ${tv.siderMenuBackColor};
    color: ${tv.siderMenuForeColor};
  }

  && {
    .ant-menu-submenu-title:hover,
    .ant-menu-item:hover {
      background-color: ${tv.siderMenuActiveBackColor};
      color: ${tv.siderMenuActiveForeColor};
    }

    .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-title .ant-menu-submenu-arrow:after {
      background: ${tv.siderMenuForeColor} !important;
    }

    .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,
    .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after {
      background: ${tv.siderMenuActiveForeColor} !important;
    }

    .ant-menu-submenu-title:active,
    .ant-menu-submenu-arrow:active,
    .ant-menu-item:active {
      background-color: ${tv.siderMenuActiveBackColor};
      color: ${tv.siderMenuActiveForeColor};
    }

    .ant-menu-item-selected {
      background-color: ${tv.siderMenuSelectedBackColor} !important;
      color: ${tv.siderMenuSelectedForeColor} !important;
      &::after {
        display: none;
      }
    }

    .ant-menu-item-group-title {
      color: ${tv.siderMenuDisableForeColor};
    }
  }

  &.ant-menu-inline-collapsed {
    width: 48px;
    .ant-menu-submenu-title,
    .ant-menu-item {
      padding: 0 16px !important;
    }

    .ant-menu-submenu-active > .ant-menu-submenu-title {
      background-color: ${tv.siderMenuActiveBackColor};
      color: ${tv.siderMenuActiveForeColor};
    }

    .ant-menu-submenu-selected > .ant-menu-submenu-title {
      background-color: ${tv.siderMenuSelectedBackColor} !important;
      background: ${tv.siderMenuSelectedBackColor} !important;
      color: ${tv.siderMenuSelectedForeColor} !important;
    }
  }
`;

class StyledSiderMenu extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <StyledMenu {...this.props}>{this.props.children}</StyledMenu>
      </>
    );
  }
}

export const siderMenuPopupClassName = 'sider-menu-popup-xyz1';

export default StyledSiderMenu;
