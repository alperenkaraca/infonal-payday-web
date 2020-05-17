import './ProfilePage.scss'

import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { getUserInfo, updateUserInfo } from '../../services/auth/actions'

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"",
      email:"",
      title:"",
    }
  }

  componentDidMount() {
    this.props.getUserInfo()
  }

  render() {
    const { form, loggingIn, userInfo, updateUserInfo } = this.props
    const handleSubmit = (e) => {
      e.preventDefault()
      form.validateFields((err, values) => {
        if (!err) {
          values.id = userInfo.id
          updateUserInfo(values)
        }
      })
    }
    const { getFieldDecorator } = form
    return (
      <Form id="profilePageForm" onSubmit={handleSubmit}>
        <Form.Item
          label="Username">
          {getFieldDecorator('username', {
            initialValue: userInfo != null ? userInfo.username : null ,
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              placeholder="Username"
            />)}
        </Form.Item>
        <Form.Item
          label="E-Mail">
          {getFieldDecorator('email', {
            initialValue: userInfo !=null ? userInfo.email : null,
            rules: [{ required: true, message: 'Please input your email address!' }],
          })(
            <Input
              placeholder="E-Mail"
            />)}
        </Form.Item>
        <Form.Item
          label="Title">
          {getFieldDecorator('title', {
            initialValue: userInfo != null ? userInfo.title : null,
            rules: [{ required: true, message: 'Please input your Title!' }],
          })(
            <Input
              placeholder="Title"
            />)}
        </Form.Item>
        <Form.Item>
          <Button
            loading={loggingIn}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Save
            </Button>
        </Form.Item>
      </Form>
    )
  }
}


const mapStateToProps = (state) => ({
  userInfo: state.authReducer.userInfo,
})

const mapDispatchToProps = {
  getUserInfo,
  updateUserInfo
}

const ProfileForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(ProfilePage))

ProfilePage.propTypes = {}

export default ProfileForm
