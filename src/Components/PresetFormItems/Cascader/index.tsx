import React, { FC, useEffect, useRef, useState } from 'react';
import { Cascader as AntdCascader } from 'antd';
import './index.less';

interface IProps {}

const Cascader: FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  // TODO PT anyscript
  const selectRef = useRef<any>();
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      selectRef.current.focus();
    });
  }, []);

  // TODO LH showSearch
  return (
    <AntdCascader
      ref={selectRef}
      open={open}
      showSearch
      className="edit-ag-grid-cascader"
    />
  );
};

export default Cascader;
