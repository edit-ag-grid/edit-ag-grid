import { DatePicker as AntdDatePicker } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import './index.less';

interface IProps {}

const DatePicker: FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setOpen(true));
  }, []);
  return <AntdDatePicker open={open} className="edit-ag-grid-date-picker" />;
};

export default DatePicker;
