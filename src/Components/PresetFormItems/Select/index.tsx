import React, { FC } from 'react';
import { Select } from 'antd';
import './index.less';

interface IProps {}

const EditInput: FC<IProps> = () => {
  return <Select autoFocus defaultOpen className="edit-ag-grid-select" />;
};

export default EditInput;
