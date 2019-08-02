import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import ContentHeader from './components/ContentHeader'

const { Content, Sider } = Layout;

export default class Admin extends React.Component {
  render() {
    return (<div>
        <Header />
        <Layout className="container">
          <Sider width={200} className="left-sider">
            <NavLeft />
          </Sider>
          <Layout className="right-container">
            <ContentHeader />
            <Content className="content">
              {this.props.children}
            </Content>
            <Footer />
          </Layout>
        </Layout>
    </div>)
  }
}