'use client';

import {
  ProForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

export default function Home() {
  // var handleSubmit = () => {};
  // const abd = 1;
  return (
    <ProForm
      onFinish={async (values) => {
        // Đảm bảo luôn có key 'category'
        console.log('Submitted values:', { ...values });
        console.log(123);
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
        }}
      />
      <ProFormText name="name" />
    </ProForm>
  );
}
