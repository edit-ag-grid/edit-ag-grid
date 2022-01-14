import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react';
import { EditType } from '../../index.d';
import { Input, Select } from '../PresetFormItems';

const defaultFormItemMap = {
  input: Input,
  select: Select,
};

interface IProps {
  editType: EditType;
}

const PresetCellEditorFramework: ForwardRefRenderFunction<any, IProps> = (
  props,
  ref
) => {
  const { editType } = props;
  console.log('log: ~ file: index.tsx ~ line 8 ~ props', props);
  const [value] = useState<any>();

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return value;
      },
      isPopup() {
        return false;
      },
      refresh() {},
    };
  });
  const Compoment = defaultFormItemMap[editType];
  return <Compoment />;
};

export default forwardRef(PresetCellEditorFramework);
