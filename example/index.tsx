/* eslint-disable import/no-extraneous-dependencies */
// import 'react-app-polyfill/ie11';
import * as React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.min.css';

import './index.less';
import { useEffect, useState } from 'react';
import Thing from '..';

const App = () => {
  const [tableData, setTableData] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    const _tableData: Record<string, any>[] = [];
    for (let i = 0; i < 100; i++) {
      _tableData.push({
        id: `id${i}`,
      });
    }
    setTableData(_tableData);
  }, []);

  return (
    <Thing
      columnDefs={[
        {
          field: 'input',
          headerName: '输入框',
          cellEditorParams: {
            editType: 'input',
            cellHeight: '66px',
          },
        },
        {
          field: 'select',
          colId: 'select',
          width: 500,
          headerName: '选择框',
          cellEditorParams: {
            editType: 'select',
            options: [
              {
                key: 'male',
                label: '男',
              },
              {
                key: 'female',
                label: '女',
              },
            ],
          },
        },
        {
          field: 'treeSelect',
          headerName: '树形选择框',
          cellEditorParams: {
            editType: 'treeSelect',
          },
        },
        {
          field: 'datePicker',
          headerName: '时间选择',
          cellEditorParams: {
            editType: 'datePicker',
          },
        },
        {
          field: 'autoComplete',
          headerName: '自动完成',
          cellEditorParams: {
            editType: 'autoComplete',
          },
        },
        {
          field: 'cascader',
          headerName: '级联选择器',
          cellEditorParams: {
            editType: 'cascader',
          },
        },
      ]}
      rowData={tableData}
    />
  );
};
render(<App />, document.getElementById('root'));
