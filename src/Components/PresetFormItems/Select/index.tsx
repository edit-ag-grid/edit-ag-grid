import React, { FC } from 'react';
import { Select } from 'antd';
import './index.less';
interface SelectProps extends React.ComponentProps<typeof Select> { }

const EditSelect: FC<SelectProps> = (props) => {
  console.log('select ', props)
  return <Select {...props} autoFocus defaultOpen className="edit-ag-grid-select" />;
}

export default EditSelect;
