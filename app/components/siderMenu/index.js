import React, { Component } from 'react';
import { Icon, Menu } from 'antd';

import StyledSiderMenu, { siderMenuPopupClassName } from './styled';

class SiderMenu extends Component {
  state = {
    keyPath: ['1']
  };

  onMenuClick = e => {
    // console.log('click ', e);
    this.setState({ keyPath: e.keyPath });
  };
  
  render() {
    const {keyPath} = this.state;
    return (
      <StyledSiderMenu
        onClick={this.onMenuClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={this.props.collapsed}
      >
        <Menu.Item key="1">
          <Icon
            type="home"
            theme={keyPath.indexOf('1') < 0 ? 'outlined' : 'filled'}
          />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon
            type="pie-chart"
            theme={keyPath.indexOf('2') < 0 ? 'outlined' : 'filled'}
          />
          <span>Option 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon
            type="mail"
            theme={keyPath.indexOf('3') < 0 ? 'outlined' : 'filled'}
          />
          <span>Option 3</span>
        </Menu.Item>
        <Menu.SubMenu
          key="4"
          className={siderMenuPopupClassName}
          title={
            <span>
              <Icon
                type="mail"
                theme={keyPath.indexOf('4') < 0 ? 'outlined' : 'filled'}
              />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="40" title="Item 1">
            <Menu.Item key="41">Option 1</Menu.Item>
            <Menu.Item key="42">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="45" title="Item 2">
            <Menu.Item key="46">Option 3</Menu.Item>
            <Menu.Item key="47">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="5"
          className={siderMenuPopupClassName}
          title={
            <span>
              <Icon
                type="appstore"
                theme={keyPath.indexOf('5') < 0 ? 'outlined' : 'filled'}
              />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="51">Option 5</Menu.Item>
          <Menu.Item key="52">Option 6</Menu.Item>
          <Menu.SubMenu key="55" title="Submenu">
            <Menu.Item key="56">Option 7</Menu.Item>
            <Menu.Item key="57">Option 8</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="6"
          className={siderMenuPopupClassName}
          title={
            <span>
              <Icon
                type="setting"
                theme={keyPath.indexOf('6') < 0 ? 'outlined' : 'filled'}
              />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="61">Option 9</Menu.Item>
          <Menu.Item key="62">Option 10</Menu.Item>
          <Menu.Item key="63">Option 11</Menu.Item>
          <Menu.Item key="64">Option 12</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="7">
          <Icon
            type="meh"
            theme={keyPath.indexOf('7') < 0 ? 'outlined' : 'filled'}
          />
          <span>Option 73</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon
            type="meh"
            theme={keyPath.indexOf('8') < 0 ? 'outlined' : 'filled'}
          />
          <span>Option 74</span>
        </Menu.Item>
      </StyledSiderMenu>
    );
  }
}

export default SiderMenu;
