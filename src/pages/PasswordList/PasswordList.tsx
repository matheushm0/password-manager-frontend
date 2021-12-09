import React, { useState } from "react";

import { Card, Modal, Button } from "antd";
import PasswordForm from "../PasswordForm/PasswordForm";

const userPasswords = [
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@",
  },
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@",
  },
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@",
  },
  {
    nome: "Teste",
    username: "teste@teste.com",
    senha: "kasjskjqwqwifsaioasiowqioewqó@",
  },
];

const PasswordList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {userPasswords.map((userPassword, index) => (
        <Card
          title={userPassword.nome}
          extra={
            <>
              <Button
                type="primary"
                shape="round"
                icon={<EditOutlined />}
                onClick={showModal}
              />
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <PasswordForm />
              </Modal>
            </>
          }
          style={{ width: 300 }}
          key={index}
        >
          <p>{userPassword.username}</p>
        </Card>
      ))}
    </div>
  );
};

export default PasswordList;
