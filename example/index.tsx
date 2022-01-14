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
          colId: 'input',
          headerName: '输入框',
          cellEditorParams: {
            editType: 'input',
          },
        },
        {
          field: 'select',
          colId: 'select',
          headerName: '选择框',
          cellEditorParams: {
            editType: 'select',
          },
        },
      ]}
      rowData={[{ id: '234' }]}
    />
  );
};
render(<App />, document.getElementById('root'));
