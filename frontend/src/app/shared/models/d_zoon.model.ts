



export interface paramiter {
  d_zoonHeight?: number;
  d_zoonWidth?: number;
  d_zoonHeightUnit?: string;
  d_zoonWidthUnit?: string;
  d_zoonrowUnit?: string;
  d_zoonColUnit?: string;
  d_zoonDiraction?: 'horizontal' | 'vertical';
}

export interface dZonnData {
  row: number|number[];
  cols: any;
  child?: dZonnData | dZonnData[];
}
