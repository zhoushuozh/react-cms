import React from 'react';
import { Link } from "react-router-dom";
import {
  Form, Icon, Input, Button, Spin, message
} from 'antd';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmDirty: false,
      loading: false
    };
  }
  
  // 提交
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({loading: true})
        const hide = message.loading('正在注册', 0)
        setTimeout(() => {
          hide()
          message.success('注册成功')
          this.props.history.push("/admin");
        }, 1500);
      } else {
        console.log(err)
      }
    });
  }

  // 密码验证
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  // 确认密码
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致！');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Spin spinning={this.state.loading}>
        <div className="login-container">
          <div className="login-content">
            <div className="title">注 册</div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [
                    { required: true, message: '请输入用户名！' },
                    { pattern: '[a-zA-Z0-9\u4e00-\u9fa5]+$', message: '只能包含汉字、数字、字母！' },
                    { pattern: '^[a-zA-Z\u4e00-\u9fa5]', message: '只能以汉字或字母开头' },
                    { min: 2, max: 8, message: '请输入2到8个字符' },
                  ],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('userEmail', {
                  rules: [{
                    type: 'email', message: '邮箱格式不正确！',
                  }, {
                    required: true, message: '请输入邮箱地址！',
                  }],
                })(
                  <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱地址" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: '请输入密码！' },
                    { min: 6, max: 14, message: '请输入6到14位的密码' },
                    { validator: this.validateToNextPassword }
                  ]
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('confirm', {
                  rules: [
                    { required: true, message: '请再次确认密码！' },
                    { min: 6, max: 14, message: '请输入6到14位的密码' },
                    { validator: this.compareToFirstPassword }
                  ]
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" onBlur={this.handleConfirmBlur} placeholder="确认密码" />
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  注 册
              </Button>
              </Form.Item>
            </Form>
            <p className="bottom-text"><Link to="/login">登录已有账号</Link></p>
          </div>
        </div>
      </Spin>
    );
  }
}

const SignUp = Form.create({ name: 'sign_up_form' })(SignUpForm);

export default SignUp;