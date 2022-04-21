import React from 'react'
import { Layout } from 'antd';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default function index() {

    return (
        <Header className="site-layout-background" style={{backgroundColor:'blue'}}>
            <div style={{ float: 'right' }}>
                <Link to="/home">
                    <Button type="primary" danger>用户仓库</Button>
                </Link>
            </div>
        </Header>
    )
}