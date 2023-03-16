import { TempletesV1Component } from './../../components/templetes-example/templetes-v1/templetes-v1.component';
import { pipe } from '../pipes/generic.pipe';
export interface OnDeleteEvent {
  id: string[];
  etat: 'etatObjet.archive';
}
type ColorType = any;
type Colors =
  | 'blue'
  | 'brown'
  | 'gray'
  | 'green'
  | 'indigo'
  | 'lime'
  | 'orange'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow';



  export type FlterType=

    | 'file'
    | 'img'
    | 'chips'
    | 'text'
    | 'date'
    | 'numeric'
    | 'boolean'
    | 'template'
    | 'multiSelect'
    | 'price'
    | 'phone'
    | 'email'
    | 'range'
    | 'percentage'
    | 'address';

export interface ListHeader {
  field: string;
  header: string;
  sort?: boolean;
  filter?: boolean;
  optionLabel?: string | string[];
  filterType?: FlterType;
  filterData?: [];
  templatePath?: string[] | string;
  pipes?: pipe[];
  colorize?: Partial<Record<Colors, ColorType>>;
  colorizeStyle?: {
    match: ColorType;
    backgroundColor: string;
    color: string;
  }[];
  filterParameter?: any;
}
export interface filterParameter extends Partial<List> {
  sectiontwo?: boolean;
  MatchType?: string;
  filterTypeOne?: any;
  inputValueOne?: any;
  filterTypeTwo?: any;
  inputValueTwo?: any;
  value?: any;
  valueOne?: any;
  valueTwo?: any;
  values?: any[];
  filterActive?: boolean
}
export interface expanded extends Partial<List> {
  dataField?: string;
}
export interface Button {
  label?: string;
  icon?: string;
  class?: string;
  style?: { [key: string]: any };
  command?: (rowIndex: number, rowData: any) => void;
}
export interface ListCaptionConfig {
  tibleTitale?: string;
  globalFilter?: boolean;
  csv?: boolean;
  pdf?: boolean;
  xls?: boolean;

  selection?: boolean;
  displayedColumns?: boolean;
  clearTable?: boolean;
  refreshData?: boolean;
  expanded?: expanded | null;
  rowNamber?: boolean
  addButton?: any;
  sort?: boolean;
  headerFilterType?: string;
  headerFilterfield?: string;
  imgPopUp?: boolean;
  selectionType?: 'single' | 'multiple';
  summary?: {
    enabled?: boolean;
    message?: string;
  };
  buttons?: Button[];
  actions?: {
    clone?: boolean;
    delete?: boolean;
    edit?: boolean;
    detail?: boolean;
    close?: boolean;
  };
}
export interface List {
  _id?: string;
  headers: ListHeader[];
  captionConfig: ListCaptionConfig | null;
  etatObjet?: 'etatObject.active' | 'etatObjet.archive';
  etatCreation?: string;
}
