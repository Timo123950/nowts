import { HttpError } from "../errors";
import { ExpressMiddleware } from "../interfaces";

export function catchErrors(middleware: ExpressMiddleware): ExpressMiddleware {
  return async (req, res, next) => {
    try {
      // Add await support promise errors. Nothing happens if middleware
      // Does not return a promise
      await middleware(req, res, next);
    } catch (error) {
      if (error instanceof HttpError) {
        res.sendStatus(error.statusCode);
      } else {
        console.error(error);
        res.sendStatus(500);
      }
    }
  };
}
