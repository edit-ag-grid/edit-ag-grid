import React, { FC, useEffect, useRef } from 'react';
import { Input } from 'antd';
import './index.less';

interface InputProps extends React.ComponentProps<typeof Input> {}

const EditInput: FC<InputProps> = () => {
  // TODO anyscript
  const inputRef = useRef<any>();
  useEffect(() => {
    setTimeout(() => inputRef.current.focus());
  }, []);

  return <Input ref={inputRef} autoFocus className="edit-ag-grid-input" />;
};

export default EditInput;
