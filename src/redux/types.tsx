export type EmptyObject = {
  [K in any]: any;
};

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  items: any;
}
