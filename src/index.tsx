/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/prefer-default-export
import React, { FC, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './index.less';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { PresetCellEditorFramework } from './Components';
import { IEditAgGrid } from './index.d';

const Thing: FC<IEditAgGrid> = props => {
  const { columnDefs } = props;

  /** cellEditorParams有editType时添加预设编辑组件 */
  const addRenderEditCol = useMemo(() => {
    return columnDefs?.map(col => {
      const editable = !!col.cellEditorParams?.editType;
      return {
        cellEditorFramework: editable ? PresetCellEditorFramework : undefined,
        editable,
        resizable: true,
        ...col,
      };
    });
  }, [columnDefs]);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        // stopEditingWhenGridLosesFocus
        singleClickEdit
        {...props}
        columnDefs={addRenderEditCol}
      />
    </div>
  );
};

export default Thing;
