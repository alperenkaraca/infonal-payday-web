import './AppMenu.scss'

import React from 'react'
import { Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'
const { Sider } = Layout;

const AppMenu = () => {
    return (
        <React.Fragment>
            <Sider breakpoint="xs"
                collapsedWidth="0"
                className="site-layout-background">
                <Menu
                    style={{height: '100%' }}
                    mode="inline"
                    theme="dark">
                    <Menu.Item key="1">
                        <Link to="/product" className="nav-text">Products</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/profile" className="nav-text">Profile</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </React.Fragment>
    )
}

export default AppMenu
