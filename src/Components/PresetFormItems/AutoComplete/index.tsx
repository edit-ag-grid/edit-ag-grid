import { AutoComplete as AntdAutoComplete } from 'antd';
import React, { FC, useEffect, useRef, useState } from 'react';
import './index.less';

type AutoCompleteRef = React.ComponentRef<typeof AntdAutoComplete>;
interface IProps {}

const AutoComplete: FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<AutoCompleteRef>({} as AutoCompleteRef);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      selectRef.current.focus();
    });
  }, []);
  return (
    <AntdAutoComplete
      ref={selectRef}
      open={open}
      className="edit-ag-grid-autoComplete"
    />
  );
};

export default AutoComplete;
