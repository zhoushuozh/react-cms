import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

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
            borderRight: '1px solid #eee'
          }}>
          <Navigation />
        </Sider>
        <Layout style={{ background: '#fff' }}>
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