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
      <Layout style={{
        height: '100vh',
        paddingTop: '60px'
      }}>
        <Sider width={200} style={{ 
            background: '#fff',
            borderRight: '1px solid #eee',
            overflowY: 'auto'
          }}>
          <NavLeft />
        </Sider>
        <Layout style={{ background: '#fff' }}>
          <ContentHeader />
          <Content
            style={{
              background: '#fff',
              padding: 24
            }}
          >
            Content
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>)
  }
}