import React, { FC } from 'react';
import { Cascader as AntdCascader } from 'antd';
import './index.less';

interface IProps {}

const Cascader: FC<IProps> = () => {
  return <AntdCascader className="edit-ag-grid-cascader" />;
};

export default Cascader;