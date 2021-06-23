import { Router } from "express";

import { ExpressContextDef, ExpressMiddleware } from "../../interfaces";
import { ControllerBinder } from "../controller.binder";

import {
  getDeleteHandler,
  getGetHandler,
  getPatchHandler,
  getPostHandler,
  getPutHandler,
} from "./handlers";
import { RestController } from "./rest-controller.interface";

class RestBinder extends ControllerBinder<RestController> {
  protected expressRouter(
    path: string,
    controller: RestController,
    getExpressMiddlewares: (
      methodName: string,
      defaultContextDef?: ExpressContextDef
    ) => ExpressMiddleware[]
  ): Router {
    const router = Router();

    const defaultContextDef: ExpressContextDef = [
      { req: "body", ctx: "data" },
      { req: "params.id", ctx: "id" },
      { req: "query", ctx: "params.query" },
    ];

    router
      .route(path)
      .get(
        getExpressMiddlewares("get", defaultContextDef),
        getGetHandler(controller)
      )
      .post(
        getExpressMiddlewares("create", defaultContextDef),
        getPostHandler(controller)
      );

    router
      .route(`${path}/:id`)
      .delete(
        getExpressMiddlewares("delete", defaultContextDef),
        getDeleteHandler(controller)
      )
      .get(
        getExpressMiddlewares("get", defaultContextDef),
        getGetHandler(controller)
      )
      .patch(
        getExpressMiddlewares("patch", defaultContextDef),
        getPatchHandler(controller)
      )
      .put(
        getExpressMiddlewares("update", defaultContextDef),
        getPutHandler(controller)
      );

    return router;
  }
}

export const rest = new RestBinder();
