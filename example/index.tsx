/* eslint-disable import/no-extraneous-dependencies */
// import 'react-app-polyfill/ie11';
import * as React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.min.css';

import './index.less';
import Thing from '..';

const App = () => {
  return (
    <Thing
      columnDefs={[
        {
          field: 'input',
          headerName: '输入框',
          cellEditorParams: {
            editType: 'input',
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
                label: '男'
              },
              {
                key: 'female',
                label: '女'
              }
            ]
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
      rowData={[{ id: '234' }]}
    />
  );
};
render(<App />, document.getElementById('root'));
