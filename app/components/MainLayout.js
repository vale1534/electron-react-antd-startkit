// @flow
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, withRouter } from 'react-router';
import type { Match, Location } from 'react-router';
import { NavLink } from 'react-router-dom';

import * as routes from './routes';
import NewCounter from './NewCounter';

const { Sider, Content } = Layout;

const styles = {
  layout: {
    minHeight: '100vh'
  },
  sider: {
    background: '#fff'
  },
  navLink: {
    display: 'inline-block',
    userSelect: 'none'
  }
};

const Link = props => (
  <>
    <Icon type={props.icon} />
    <NavLink style={styles.navLink} replace {...props}>
      {props.text}
    </NavLink>
  </>
);

type Props = {
  match: Match,
  location: Location
};

class MainLayout extends React.Component<Props> {
  props: Props;

  render() {
    const { location } = this.props;
    return (
      <Layout style={styles.layout}>
        <Sider style={styles.sider}>
          <div className="logo" />
          <Menu selectedKeys={[location.pathname]}>
            <Menu.Item key={routes.k_home}>
              <Link icon="home" to={routes.k_home} text="Home" />
            </Menu.Item>
            <Menu.Item key={routes.k_counter}>
              <Link icon="rocket" to={routes.k_counter} text="New Counter" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route exact path={routes.k_counter} component={NewCounter} />
              <Route
                exact
                path={routes.k_home}
                render={({ match }) => (
                  <>
                    <h2>Home</h2>
                    <p>Route render match: {JSON.stringify(match)}</p>
                  </>
                )}
              />
            </Switch>
          </Content>
          <Layout.Footer>
            <p>{JSON.stringify(this.props)}</p>
          </Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(MainLayout);
