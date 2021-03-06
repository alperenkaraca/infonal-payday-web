import './LoginPage.scss'

import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button } from 'antd'
import { requestLogin } from '../../services/redux/actions'

const LoginPage = ({ form, loggingIn, requestLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        const { email, password } = values
        requestLogin(email, password)
      }
    })
  }

  const { getFieldDecorator } = form
  return (
    <Form id="loginPageForm" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your email!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="E-Mail"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button
          loading={loggingIn}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

const mapStateToProps = (state) => ({
  loggingIn: state.reducer.loggingIn,
})

const mapDispatchToProps = {
  requestLogin,
}

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(LoginPage))

export default LoginForm
