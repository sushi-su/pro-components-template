export namespace API {
  type ResponseData = null | any[] | Record<any, any> | number | boolean | string;

  export interface Response<D = ResponseData> {
    ret: number;
    errCode: string;
    msg: string;
    data: D;
  }
}
