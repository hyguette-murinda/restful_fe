import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import EmployeeForm from './employeeForm';
const AddModal = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='flex justify-end'>
      <Button type="primary" onClick={() => setOpen(true)} className='bg-[#0B1355] p-5'>
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
    </div>
  );
};
export default AddModal;