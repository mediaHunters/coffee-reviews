import {
  ErrorResponse
} from "./chunk-SWK2OFMK.mjs";
import {
  CoreError
} from "./chunk-SJBQMJN5.mjs";
import {
  UserInterfaceError
} from "./chunk-XRVKF5DQ.mjs";
import {
  BaseError
} from "./chunk-6TCJVVRE.mjs";

// src/ui/common/config/errors/handlers/errorHandler.ts
import {
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  UNPROCESSABLE_ENTITY
} from "http-status-codes";
var errorHandler = (app) => app.use(
  (error, req, res, next) => {
    next();
    switch (error.constructor) {
      case UserInterfaceError:
        return res.status(error.status).json(new ErrorResponse(error.code, error.message));
      case CoreError:
        return res.status(UNPROCESSABLE_ENTITY).json(new ErrorResponse(error.code, error.message));
      case BaseError:
        return res.status(NOT_FOUND).json(new ErrorResponse(error.code, error.message));
      default:
        return res.status(INTERNAL_SERVER_ERROR).json(
          new ErrorResponse(INTERNAL_SERVER_ERROR.toString(), error.message)
        );
    }
  }
);

export {
  errorHandler
};
//# sourceMappingURL=chunk-BOA6SWSX.mjs.map