import React, { FC, useEffect, useRef } from 'react';
import { Input } from 'antd';
import './index.less';

type InputRef = React.ComponentRef<typeof Input>;
interface InputProps extends React.ComponentProps<typeof Input> {}

const EditInput: FC<InputProps> = () => {
  const inputRef = useRef<InputRef>({} as InputRef);
  useEffect(() => {
    setTimeout(() => inputRef.current.focus());
  }, []);

  return <Input ref={inputRef} autoFocus className="edit-ag-grid-input" />;
};

export default EditInput;
