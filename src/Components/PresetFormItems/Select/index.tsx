import React, { FC, useEffect, useRef, useState } from 'react';
import { Select } from 'antd';
import './index.less';

interface SelectProps extends React.ComponentProps<typeof Select> {}

const EditSelect: FC<SelectProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  // TODO PT anyscript
  const selectRef = useRef<any>();
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      selectRef.current.focus();
    });
  }, []);
  // TODO LH remove showSearch
  return (
    <Select
      ref={selectRef}
      open={open}
      showSearch
      className="edit-ag-grid-select"
    />
  );
};

export default EditSelect;
