import {
  BaseApplication
} from "./chunk-CYFBHW4K.mjs";
import {
  SWAGGER_BASE_PATH,
  SWAGGER_HOST
} from "./chunk-KZ524EFB.mjs";
import {
  UI_APPLICATION_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";
import {
  __decorateClass,
  __decorateParam
} from "./chunk-CT3ESYKG.mjs";

// src/ui/common/config/application/express/ExpressApplication.ts
import express from "express";
import morgan from "morgan";
import methodOverride from "method-override";
import helmet from "helmet";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { inject, injectable } from "inversify";

// src/ui/common/config/swagger.json
var swagger_default = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "CR API",
    description: "Api documentation for CR project \n",
    contact: {
      name: "MediaHunters"
    },
    license: {
      name: "[PUT LICENSE NAME HERE]"
    }
  },
  host: "localhost:3000",
  basePath: "/v1",
  tags: [
    {
      name: "auth",
      description: "Api endpoints related to authentication"
    }
  ],
  securityDefinitions: {
    bearer: {
      type: "apiKey",
      name: "Authorization",
      in: "header"
    }
  },
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/user": {
      delete: {
        security: [
          {
            bearer: []
          }
        ],
        tags: ["user"],
        description: "User endpoint",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              $ref: "#/definitions/UserDeleteRequest"
            }
          }
        ],
        responses: {
          "200": {
            description: "Returns authentication token"
          }
        }
      }
    }
  }
};

// src/ui/common/config/application/express/ExpressApplication.ts
var ExpressApplication = class extends BaseApplication {
  constructor(logger, app, router) {
    super(app);
    this.logger = logger;
    this.router = router;
  }
  initialize() {
    this.initializeSecurity();
    this.initializeBodyParsers();
    if (process.env.NODE_ENV !== "test") {
      this.initializeLogging();
    }
    this.initializeHandlers();
    this.initializePlugins();
    this.initializeExtensions();
  }
  initializeSecurity() {
    this.app.use(express.urlencoded({ extended: false }));
  }
  initializeBodyParsers() {
    this.app.use(express.json());
  }
  initializeLogging() {
    this.logger.initialize();
    morgan.token(
      "body",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (req) => `
REQUEST BODY: ${JSON.stringify(req.body)}`
    );
    this.app.use(
      morgan(
        ":method :url HTTP/:http-version :status :response-time ms :referrer :user-agent - :body",
        { stream: this.logger }
      )
    );
  }
  initializeHandlers() {
    Error("NOT IMPLEMENTED");
  }
  initializePlugins() {
    this.app.use(methodOverride());
    this.app.use(helmet());
    this.app.use(cors());
  }
  initializeExtensions() {
    if (SWAGGER_HOST) {
      swagger_default.host = SWAGGER_HOST;
      this.app.use(
        SWAGGER_BASE_PATH,
        swaggerUi.serve,
        swaggerUi.setup(swagger_default)
      );
    }
  }
};
ExpressApplication = __decorateClass([
  injectable(),
  __decorateParam(0, inject(UI_APPLICATION_IDENTIFIERS.LOGGER_WINSTON)),
  __decorateParam(1, inject(UI_APPLICATION_IDENTIFIERS.EXPRESS)),
  __decorateParam(2, inject(UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER))
], ExpressApplication);

export {
  ExpressApplication
};
//# sourceMappingURL=chunk-NGF5B4C7.mjs.map