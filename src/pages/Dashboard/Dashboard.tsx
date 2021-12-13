import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import { LockOutlined, BulbOutlined } from "@ant-design/icons";
import PasswordList from "../PasswordList/PasswordList";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";

import "./Dashboard.css";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          <Header className="header">
            <h1 style={{ color: "white" }}>Gerenciador de Senhas</h1>
          </Header>
          <Layout>
            <Sider collapsible className="sider" theme="light">
              <div className="logo" />
              <Menu defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" icon={<LockOutlined />}>
                  Senhas
                  <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2" icon={<BulbOutlined />}>
                  Gerador de Senhas
                  <Link to="/gerar-senha" />
                </Menu.Item>
              </Menu>
            </Sider>
            <Content className="content">
              <Routes>
                <Route path="/" element={<PasswordList />} />
                <Route path="/gerar-senha" element={<PasswordGenerator />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Dashboard;
