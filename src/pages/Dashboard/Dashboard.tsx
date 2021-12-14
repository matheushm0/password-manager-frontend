import React, { useState } from "react";

import { Layout, Menu } from "antd";
import { LockOutlined, BulbOutlined } from "@ant-design/icons";
import PasswordList from "../PasswordList/PasswordList";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";

import "./Dashboard.css";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  const componentsSwitch = (key: string) => {
    switch (key) {
      case "1":
        return <PasswordList />;
      case "2":
        return <PasswordGenerator />;
      default:
        break;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header className="header">
          <h1 style={{ color: "white" }}>Gerenciador de Senhas</h1>
        </Header>
        <Layout>
          <Sider collapsible className="sider" theme="light">
            <div className="logo" />
            <Menu
              defaultSelectedKeys={[selectedMenuItem]}
              mode="inline"
              onClick={(e) => setSelectedMenuItem(e.key)}
            >
              <Menu.Item key="1" icon={<LockOutlined />}>
                Senhas
              </Menu.Item>
              <Menu.Item key="2" icon={<BulbOutlined />}>
                Gerador de Senhas
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <div className="content">{componentsSwitch(selectedMenuItem)}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
