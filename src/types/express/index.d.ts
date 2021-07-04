declare namespace Express {
  export interface Response {
    ok: (code: number, data: object | null, meta?: object) => Response<any, Record<string, any>>;
    fail: (code: number, data: object) => Response<any, Record<string, any>>;
    error: (code: number, err: Error) => Response<any, Record<string, any>>;
  }

  export interface Application {
    response: Response
  }
}
