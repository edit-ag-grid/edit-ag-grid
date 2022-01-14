import React, { FC } from 'react';
import { Input } from 'antd';
import './index.less';

interface InputProps extends React.ComponentProps<typeof Input> { }

const EditInput: FC<InputProps> = () => {
  return <Input className="edit-ag-grid-input" />;
};

export default EditInput;
