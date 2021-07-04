import express, { Application, Router } from "express";
import { ok, fail, error } from "../plugins/response-builder";
import { onError, onLost } from "../plugins/error-handler";
import apply from "../routers";

export default function(server: Application) {
  const router: Router = Router();

  // Handle JSON Request
  server.use(express.json());

  // Register Response Builder
  server.response.ok = ok;
  server.response.fail = fail;
  server.response.error = error;

  // Mount router;
  server.use(apply(router));

  // Error handler
  server.use(onLost);
  server.use(onError);

  return server;
}
