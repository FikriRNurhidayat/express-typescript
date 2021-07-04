import { Response } from "express";
import { Status } from "../types";

export function ok(this: Response, code: number, data: object | null, meta?: object): void {
  this.status(code).json({
    status: Status.OK,
    meta,
    data
  })
}

export function fail(this: Response, code: number, data: object): void {
  this.status(code).json({
    status: Status.FAIL,
    data
  })
}

export function error(this: Response, code: number, err: Error): void {
  this.status(code).json({
    status: Status.ERROR,
    data: {
      name: err.name,
      message: err.message,
      stack: err.stack
    }
  })
}
