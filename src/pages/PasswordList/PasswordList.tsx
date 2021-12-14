import React, { useState } from "react";

import { Card, Modal, Tooltip, Button } from "antd";
import { EditOutlined, CopyOutlined, PlusOutlined } from "@ant-design/icons";

import PasswordForm from "../PasswordForm/PasswordForm";

import "./PasswordList.css";

const userPasswords = [
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@1",
  },
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@2",
  },
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@3",
  },
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@4",
  },
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@4",
  },
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@4",
  },
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@4",
  },
];

const PasswordList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showAddModal = () => {
    setAddModalVisible(true);
  };

  const handleCancelAdd = () => {
    setAddModalVisible(false);
  };

  return (
    <>
      <div className="container">
        {userPasswords.map((userPassword, index) => (
          <Card
            title={userPassword.nome}
            actions={[
              <>
                <Tooltip title="Editar senha">
                  <EditOutlined onClick={showModal} />
                </Tooltip>
                <Modal
                  title="Editar Senha"
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <PasswordForm formType="edit" />
                </Modal>
              </>,
              <Tooltip title="Copiar senha">
                <CopyOutlined
                  onClick={() => {
                    navigator.clipboard.writeText(userPassword.senha);
                  }}
                />
              </Tooltip>,
            ]}
            style={{ width: 385 }}
            key={index}
          >
            <p>{userPassword.username}</p>
          </Card>
        ))}
      </div>
      <div>
        <Button className="button" size="large" shape="circle">
          <PlusOutlined style={{ fontSize: 28 }} onClick={showAddModal} />
          <Modal
            title="Adicionar nova senha"
            visible={isAddModalVisible}
            onCancel={handleCancelAdd}
            footer={null}
          >
            <PasswordForm formType="new" />
          </Modal>
        </Button>
      </div>
    </>
  );
};

export default PasswordList;
