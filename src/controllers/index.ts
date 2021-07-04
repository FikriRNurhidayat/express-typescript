import { Request, Response, RequestHandler } from "express";

export const root: RequestHandler = (_request: Request, response: Response) => response.ok(200, null);
