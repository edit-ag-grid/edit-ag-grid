import React from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import './index.less';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// eslint-disable-next-line import/prefer-default-export
const Thing = () => {
  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={[
          { make: 'Toyota', model: 'Celica', price: 35000 },
          { make: 'Ford', model: 'Mondeo', price: 32000 },
          { make: 'Porsche', model: 'Boxter', price: 72000 },
        ]}
      >
        <AgGridColumn field="make" />
        <AgGridColumn field="model" />
        <AgGridColumn field="price" />
        <AgGridColumn headerName="Athlete" field="athlete" />
        <AgGridColumn headerName="Sport" field="sport" />
      </AgGridReact>
    </div>
  );
};

export default Thing;
