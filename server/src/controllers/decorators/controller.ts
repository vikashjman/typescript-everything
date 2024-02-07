import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { NextFunction, RequestHandler, Request, Response } from "express";

function bodyValidator(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("Invalid Request");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send("Invalid Request");
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (let key of Object.getOwnPropertyNames(target.prototype)) {
      if (key !== "constructor") {
        const routeHandler = target.prototype[key];
        const path = Reflect.getMetadata(
          MetadataKeys.path,
          target.prototype,
          key
        );
        const method: Methods = Reflect.getMetadata(
          MetadataKeys.method,
          target.prototype,
          key
        );

        const middlewares =
          Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
          [];

        const requiredBodyProps =
          Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
          [];

        const validator = bodyValidator(requiredBodyProps);

        if (path) {
          router[method](
            `${routePrefix}${path}`,
            ...middlewares,
            validator,
            routeHandler
          );
        }
      }
    }
  };
}

// Class gives function
// Methods return prototype

//   const secret = Reflect.getMetadata("secret", target.prototype, key);
