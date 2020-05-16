import './CommonLayout.scss'

import React from 'react'
import { Layout } from 'antd'
import AppHeader from './commonLayout/AppHeader'
import AppContent from './commonLayout/AppContent'
import AppMenu from './commonLayout/AppMenu'

const CommonLayout = ({
  content,
  disableHeader,
  disableMenu,
  ...componentProps
}) => {
  return (
    <Layout id="mainLayout">
      {!disableHeader && <AppHeader />}
      <Layout>
        {!disableMenu && <AppMenu />}
        <AppContent content={content} componentProps={componentProps} />
      </Layout>
    </Layout>
  )
}

export default CommonLayout
