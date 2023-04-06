



export interface paramiter {
  d_zoonHeight?: number;
  d_zoonWidth?: number;
  d_zoonHeightUnit?: string;
  d_zoonWidthUnit?: string;
  d_zoonrowUnit?: string;
  d_zoonColUnit?: string;
  d_zoonDiraction?: 'horizontal' | 'vertical';
}

export interface ZoneParameter {
  img: ZoneImg;
}


export interface ZoneImg {
  type: string;
  src?: string;
  alt?: string;
  height?: number;
  width?: number;
  url?: string;
  defaultImg?: string;
  srcset?: string;
  sizes?: string;
  border?: string;
  decoding?: string;
  ismap?: string;
  loading?: string;
  usemap?: string;
  showForm?: boolean;
}