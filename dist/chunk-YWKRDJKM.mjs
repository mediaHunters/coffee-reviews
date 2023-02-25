import {
  ErrorResponse
} from "./chunk-27DXFCLH.mjs";
import {
  CoreError
} from "./chunk-AS2UT6IH.mjs";
import {
  UserInterfaceError
} from "./chunk-SROXNPPD.mjs";
import {
  BaseError
} from "./chunk-2CGUJ2VR.mjs";
import {
  __name
} from "./chunk-C22X3M6A.mjs";

// src/ui/common/config/errors/handlers/errorHandler.ts
import {
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  UNPROCESSABLE_ENTITY
} from "http-status-codes";
var errorHandler = /* @__PURE__ */ __name((app) => app.use(
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
), "errorHandler");

export {
  errorHandler
};
//# sourceMappingURL=chunk-YWKRDJKM.mjs.map