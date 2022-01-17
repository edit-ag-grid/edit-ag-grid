import { AutoComplete as AntdAutoComplete } from 'antd';
import React, { FC } from 'react';
import './index.less';

interface IProps {}

const AutoComplete: FC<IProps> = () => {
  return <AntdAutoComplete className="edit-ag-grid-autoComplete" />;
};

export default AutoComplete;