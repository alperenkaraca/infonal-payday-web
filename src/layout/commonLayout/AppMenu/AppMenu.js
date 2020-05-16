import './AppMenu.scss'

import React from 'react'
import { Menu, Layout } from 'antd'
const { Sider } = Layout;

const AppMenu = () => {
    return (
        <React.Fragment>
            <Sider width={200} className="site-layout-background">
                <Menu
                    style={{ width: 256, height: '100%' }}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="dark">
                    <Menu.Item key="1">
                        Products
                </Menu.Item>
                    <Menu.Item key="2">
                        Profile
                </Menu.Item>
                </Menu>
            </Sider>
        </React.Fragment>
    )
}

export default AppMenu
