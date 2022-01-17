import { DatePicker as AntdDatePicker } from 'antd';
import React, { FC } from 'react';
import './index.less';

interface IProps {}

const DatePicker: FC<IProps> = () => {
  return <AntdDatePicker className="edit-ag-grid-date-picker" />;
};

export default DatePicker;