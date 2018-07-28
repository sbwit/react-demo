import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import UserQuery from "../user/UserQuery"
import PermissionQuery from "../user/PermissionQuery"
import RoleQuery from "../user/RoleQuery"
import RoleQuery from "../NotFound"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class CommonLayout extends React.Component{
  
  render(){
    
    
    return (
      <BrowserRouter>
        <Layout>
          <Header className="header">
            <div className="logo" >
              
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">User测试</Menu.Item>
              <Menu.Item key="2">Promo练习</Menu.Item>
              <Menu.Item key="3">任务</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />用户</span>}>
                  <Menu.Item key="1">
                    <NavLink lassName="nav-link" activeClassName="active" to="/user/query">用户查询</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink lassName="nav-link" activeClassName="active" to="/user/permission">权限查询</NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <NavLink lassName="nav-link" activeClassName="active" to="/user/role">角色查询</NavLink>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />营销</span>}>
                  <Menu.Item key="5">活动查询</Menu.Item>
                  <Menu.Item key="6">人群查询</Menu.Item>
                  <Menu.Item key="7">卷模板查询</Menu.Item>
                  <Menu.Item key="8">规则设置</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />任务</span>}>
                  <Menu.Item key="9">待处理任务</Menu.Item>
                  <Menu.Item key="10">新建任务</Menu.Item>
                  <Menu.Item key="11">已处理任务</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <Switch>
                  <Route path="/user/query" component={UserQuery}/>
                  <Route path="/user/permission" component={PermissionQuery}/>
                  <Route path="/user/role" component={RoleQuery}/>
                  <Route component={NotFound}/>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }

}
