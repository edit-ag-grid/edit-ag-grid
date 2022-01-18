import { TreeSelect } from 'antd';
import React, { FC, useEffect, useRef, useState } from 'react';
import './index.less';

type TreeSelectRef = React.ComponentRef<typeof TreeSelect>;
interface IProps {}

const Temp: FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<TreeSelectRef>({} as TreeSelectRef);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      console.log('selectRef', selectRef.current);

      selectRef.current.focus();
    });
  }, []);

  // TODO LH remove showSearch
  return (
    <TreeSelect
      ref={selectRef}
      multiple
      showSearch
      open={open}
      className="edit-ag-grid-tree-select"
    />
  );
};

export default Temp;
