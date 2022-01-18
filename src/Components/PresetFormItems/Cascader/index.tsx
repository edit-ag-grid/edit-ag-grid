import React, { FC, useEffect, useRef, useState } from 'react';
import { Cascader as AntdCascader } from 'antd';
import './index.less';

type CascaderRef = React.ComponentRef<typeof AntdCascader>;
interface IProps {}

const Cascader: FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const selectRef = useRef<CascaderRef>({} as CascaderRef);
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
