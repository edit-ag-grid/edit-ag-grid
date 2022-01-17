import { ColDef, GridOptions } from 'ag-grid-community';

const EDIT_TYPE = ['input', 'select', 'treeSelect', 'datePicker', 'autoComplete', 'cascader'] as const;
export type EditType = typeof EDIT_TYPE[number];

export type IEditParams = {
  editType?: EditType;
  [key: string]: any;
};

export interface IEditColDefs extends ColDef {
  cellEditorParams?: IEditParams;
}

export interface IEditAgGrid extends GridOptions {
  columnDefs?: IEditColDefs[];
}
