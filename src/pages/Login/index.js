import React from 'react';
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, Spin, message} from 'antd';
import './index.less'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({ loading: true });
        setTimeout(() => {
          message.success('登录成功')
          this.props.history.push("/admin");
        }, 1500);
      } else {
        console.log(err)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Spin spinning={this.state.loading}>
        <div className="login-container">
          <div className="login-content">
            <div className="title">登 录</div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('userEmail', {
                  rules: [{ required: true, message: '请输入邮箱或用户名!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱或用户名" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('passWorld', {
                  rules: [{ required: true, message: '请输入密码！' }]
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remeber', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>记住密码</Checkbox>)
                }
                <Link className="login-form-forgot" to="/">忘记密码?</Link>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登 录
              </Button>
              </Form.Item>
            </Form>
            <p className="bottom-text">还没有账号? <Link to="/signup">去注册</Link></p>
          </div>
        </div>
      </Spin>
    );
  }
}

const Login = Form.create({ name: 'login_form' })(LoginForm);

export default Login;