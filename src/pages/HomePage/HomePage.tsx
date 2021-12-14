import React from "react";

import { Tabs } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

import "./HomePage.css";

const { TabPane } = Tabs;

const HomePage = () => {
  return (
    <>
      <h2 className="title">Gerenciador de Senhas</h2>

      <Tabs defaultActiveKey="1" className="container">
        <TabPane tab="Login" key="1">
          <LoginForm />
        </TabPane>
        <TabPane tab="Cadastre-se" key="2">
          <RegisterForm />
        </TabPane>
      </Tabs>
    </>
  );
};

export default HomePage;
