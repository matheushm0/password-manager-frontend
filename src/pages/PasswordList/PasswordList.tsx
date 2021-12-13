import React, { useState } from "react";

import { Card, Modal, Tooltip, Button } from "antd";
import { EditOutlined, CopyOutlined } from "@ant-design/icons";

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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
                  <PasswordForm />
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
        <Button>AASSA</Button>
      </div>
    </>
  );
};

export default PasswordList;
