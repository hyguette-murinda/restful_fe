import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  message,
} from 'antd';
import { api } from '../api/api';

const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const EmployeeForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await api.post('http://localhost:5000/api/v1/laptop/new', values);
      message.success('Employee data submitted successfully');
      console.log('Response:', response.data);
    } catch (error) {
      message.error('Failed to submit employee data');
      console.error('Error:', error);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        label="First Name"
        name="firstname"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="National Id"
        name="nationalid"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Telephone"
        name="mobile"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Department"
        name="department"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Position"
        name="position"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Manufacturer"
        name="laptopmanu"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Model"
        name="model"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Serial Number"
        name="serialnumber"
        rules={[
          { required: true, message: 'Please input!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmployeeForm;
