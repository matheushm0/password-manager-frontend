import React, { useState } from "react";

import { Form, Button, Slider, InputNumber, Row, Col, Card } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const PasswordGenerator = () => {
  const [form] = Form.useForm();

  const [inputValue, setInputValue] = useState(8);

  const onFinish = (values: any) => {
    console.log("*Add api get here* \n", values);
  };

  return (
    <div>
      <Card title="Gere uma senha segura" style={{ width: 800, height: 300 }}>
        <Form {...formItemLayout} form={form} onFinish={onFinish}>
          <Form.Item name="size" label="Número de caracteres da senha">
            <Row>
              <Col span={6}>
                <InputNumber
                  min={8}
                  max={50}
                  style={{ margin: "0 16px" }}
                  value={inputValue}
                  onChange={(value) => setInputValue(value)}
                />
              </Col>
              <Col span={15}>
                <Slider
                  min={8}
                  max={50}
                  onChange={(value) => setInputValue(value)}
                  value={typeof inputValue === "number" ? inputValue : 0}
                />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Gerar senha
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default PasswordGenerator;
