import { Router } from "express";
import { root } from "../controllers";

export default function apply(router: Router): Router {
  router.get("/", root);

  return router;
};
