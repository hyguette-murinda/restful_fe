import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import EmployeeForm from './employeeForm';
const App = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Employee
      </Button>
      <Modal
        title="Add Employee"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <EmployeeForm />
      </Modal>
      <br />
      <br />
    </>
  );
};
export default App;