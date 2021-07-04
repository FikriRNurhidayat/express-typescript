import { ErrorRequestHandler, Request, Response, NextFunction, RequestHandler } from "express";

export const onError: ErrorRequestHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => res.error(500, err);
export const onLost: RequestHandler = (req: Request, res: Response) => res.fail(404, {
  method: req.method,
  url: req.url
});
