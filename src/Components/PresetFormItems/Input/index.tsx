import React, { FC } from 'react';
import { Input } from 'antd';
import './index.less';

interface IProps {}

const EditInput: FC<IProps> = () => {
  return <Input className="edit-ag-grid-input" />;
};

export default EditInput;
