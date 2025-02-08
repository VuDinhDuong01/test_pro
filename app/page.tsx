'use client';

import {
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { useRef } from 'react';
export default function Home() {
  const formRef = useRef(null);






  

  return (
                       <ProForm
      formRef={formRef}
                         onFinish={async (values) => {
        // Đảm bảo luôn có key 'category'
        console.log('Submitted values:', { ...values });
      }}
    >
      <ProFormSelect
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
        name="category"
        placeholder="Please select"
        fieldProps={{
          allowClear: true, // Cho phép xóa dữ liệu
          onChange: (value) => {
            formRef.current?.setFieldsValue({
              category: value === undefined ? '' : value,
            });
          },
        }}
      />
      <ProFormText name="name" />
      <ProFormDatePicker
        name="dob"
        fieldProps={{
          allowClear: true, // Cho phép xóa dữ liệu
          onChange: (value) => {
            formRef.current?.setFieldsValue({
              dob: value === null ? '' : value,
            });
          },
        }}
      />
    </ProForm>
  );
}
