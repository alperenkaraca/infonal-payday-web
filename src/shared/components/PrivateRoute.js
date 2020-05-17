import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import CommonLayout from '../../layout/CommonLayout'

const PrivateRoute = ({ componentProps, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <CommonLayout {...props} {...componentProps} />
      ) : (
        <Redirect
          to={{ pathname: '/', state: { from: props.location } }}
        />
      )
    }
  />
)

export default PrivateRoute
