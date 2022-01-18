import React, { FC, useEffect, useRef, useState } from 'react';
import { Select } from 'antd';
import './index.less';

type SelectRef = React.ComponentRef<typeof Select>;
interface SelectProps extends React.ComponentProps<typeof Select> {}

const EditSelect: FC<SelectProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<SelectRef>({} as SelectRef);
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
