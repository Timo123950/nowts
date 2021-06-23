import { Response } from "express";

import { NotImplementedError } from "../../errors";
import { ExpressMiddleware } from "../../interfaces";
import { catchErrors } from "../../utils";

import { sendSuccess } from "./helpers";
import {
  RequestWithRestContext,
  RestController,
} from "./rest-controller.interface";

export function getDeleteHandler(
  controller: RestController
): ExpressMiddleware {
  return catchErrors(async function handler(
    req: RequestWithRestContext,
    res: Response
  ) {
    if (!controller.delete) {
      throw new NotImplementedError();
    }
    const data = await controller.delete(
      req.now.context.id,
      req.now.context.params
    );
    sendSuccess(res, 200, data);
  });
}

export function getGetHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(
    req: RequestWithRestContext,
    res: Response
  ) {
    if (!controller.get) {
      throw new NotImplementedError();
    }
    const data = await controller.get(
      req.now.context.id,
      req.now.context.params
    );
    sendSuccess(res, 200, data);
  });
}

export function getPatchHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(
    req: RequestWithRestContext,
    res: Response
  ) {
    if (!controller.patch) {
      throw new NotImplementedError();
    }
    const data = await controller.patch(
      req.now.context.id,
      req.now.context.data,
      req.now.context.params
    );
    sendSuccess(res, 200, data);
  });
}

export function getPostHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(
    req: RequestWithRestContext,
    res: Response
  ) {
    if (!controller.create) {
      throw new NotImplementedError();
    }
    const data = await controller.create(
      req.now.context.data,
      req.now.context.params
    );
    sendSuccess(res, 201, data);
  });
}

export function getPutHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(
    req: RequestWithRestContext,
    res: Response
  ) {
    if (!controller.patch) {
      throw new NotImplementedError();
    }
    const data = await controller.update(
      req.now.context.id,
      req.now.context.data,
      req.now.context.params
    );
    sendSuccess(res, 200, data);
  });
}
