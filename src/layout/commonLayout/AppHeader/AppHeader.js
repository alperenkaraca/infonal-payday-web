import './AppHeader.scss'

import React from 'react'
import { connect } from 'react-redux'
import { Layout, Button, Row, Col } from 'antd'
import { logout } from '../../../services/redux/actions'
const { Header } = Layout

const AppHeader = ({ loggingOut, logout }) => (
  <React.Fragment>
    <Header id="appHeader">
      <Row type="flex" justify="space-between">
        <Col className="alignleft">Product prototype</Col>
        <Col className="alignright">
          <Button
            loading={loggingOut}
            onClick={() => logout()}
            className="logout-button"
          >
            Logout
          </Button>
        </Col>
      </Row>
    </Header>
  </React.Fragment>
)

const mapStateToProps = (state) => ({
  loggingOut: state.reducer.loggingOut,
})

const mapDispatchToProps = {
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
