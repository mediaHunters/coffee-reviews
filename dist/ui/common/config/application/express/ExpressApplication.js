"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExpressApplication", {
    enumerable: true,
    get: ()=>ExpressApplication
});
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _morgan = /*#__PURE__*/ _interopRequireDefault(require("morgan"));
const _methodOverride = /*#__PURE__*/ _interopRequireDefault(require("method-override"));
const _helmet = /*#__PURE__*/ _interopRequireDefault(require("helmet"));
const _cors = /*#__PURE__*/ _interopRequireDefault(require("cors"));
const _swaggerUiExpress = /*#__PURE__*/ _interopRequireDefault(require("swagger-ui-express"));
const _inversify = require("inversify");
const _expressFileupload = /*#__PURE__*/ _interopRequireDefault(require("express-fileupload"));
const _baseApplication = require("../common/BaseApplication");
const _ilogger = require("../../logger/ILogger");
const _variables = require("../../consts/variables");
const _uimoduleSymbols = require("../../../../UIModuleSymbols");
const _swaggerJson = /*#__PURE__*/ _interopRequireDefault(require("../../swagger.json"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (void 0) && (void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
let ExpressApplication = class ExpressApplication extends _baseApplication.BaseApplication {
    constructor(logger, app, router){
        super(app);
        this.logger = logger;
        this.router = router;
    }
    initialize() {
        this.initializeSecurity();
        this.initializeBodyParsers();
        if (process.env.NODE_ENV !== 'test') {
            this.initializeLogging();
        }
        this.initializeHandlers();
        this.initializePlugins();
        this.initializeExtensions();
        this.initializeFileUpload();
    }
    initializeSecurity() {
        this.app.use(_express.default.urlencoded({
            extended: false
        }));
    }
    initializeBodyParsers() {
        this.app.use(_express.default.json());
    }
    initializeFileUpload() {
        this.app.use((0, _expressFileupload.default)());
    }
    initializeLogging() {
        this.logger.initialize();
        _morgan.default.token('body', // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (req)=>`\nREQUEST BODY: ${JSON.stringify(req.body)}`);
        /**
     * @description you may consider what you want to log on production
     * keep in mind to obfuscate sensitive data if you want to log request or response bodies
     * format can be moved to some other place for easier configuration
     */ this.app.use((0, _morgan.default)(':method :url HTTP/:http-version :status :response-time ms :referrer :user-agent - :body', {
            stream: this.logger
        }));
    }
    initializeHandlers() {
        Error('NOT IMPLEMENTED');
    }
    initializePlugins() {
        this.app.use((0, _methodOverride.default)());
        this.app.use((0, _helmet.default)());
        this.app.use((0, _cors.default)());
    }
    initializeExtensions() {
        if (_variables.SWAGGER_HOST) {
            _swaggerJson.default.host = _variables.SWAGGER_HOST;
            this.app.use(_variables.SWAGGER_BASE_PATH, _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swaggerJson.default));
        }
    }
};
ExpressApplication = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.LOGGER_WINSTON)),
    __param(1, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.EXPRESS)),
    __param(2, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.EXPRESS_ROUTER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _ilogger.ILogger === "undefined" ? Object : _ilogger.ILogger,
        typeof _express.default === "undefined" || typeof _express.default.Application === "undefined" ? Object : _express.default.Application,
        typeof _express.default === "undefined" || typeof _express.default.Router === "undefined" ? Object : _express.default.Router
    ])
], ExpressApplication);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvRXhwcmVzc0FwcGxpY2F0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IG1ldGhvZE92ZXJyaWRlIGZyb20gJ21ldGhvZC1vdmVycmlkZSc7XG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBzd2FnZ2VyVWkgZnJvbSAnc3dhZ2dlci11aS1leHByZXNzJztcbmltcG9ydCB7IGluamVjdCwgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5pbXBvcnQgZmlsZVVwbG9hZCBmcm9tICdleHByZXNzLWZpbGV1cGxvYWQnO1xuXG5pbXBvcnQgeyBJQXBwbGljYXRpb24gfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2NvbW1vbi9JQXBwbGljYXRpb24nO1xuaW1wb3J0IHsgQmFzZUFwcGxpY2F0aW9uIH0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9hcHBsaWNhdGlvbi9jb21tb24vQmFzZUFwcGxpY2F0aW9uJztcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2xvZ2dlci9JTG9nZ2VyJztcbmltcG9ydCB7XG4gIFNXQUdHRVJfQkFTRV9QQVRILFxuICBTV0FHR0VSX0hPU1QsXG59IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvY29uc3RzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUyB9IGZyb20gJ3VpL1VJTW9kdWxlU3ltYm9scyc7XG5cbmltcG9ydCBzd2FnZ2VyRG9jdW1lbnQgZnJvbSAndWkvY29tbW9uL2NvbmZpZy9zd2FnZ2VyLmpzb24nO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXhwcmVzc0FwcGxpY2F0aW9uXG4gIGV4dGVuZHMgQmFzZUFwcGxpY2F0aW9uPGV4cHJlc3MuQXBwbGljYXRpb24+XG4gIGltcGxlbWVudHMgSUFwcGxpY2F0aW9uXG57XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBJTG9nZ2VyO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBleHByZXNzLlJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFVJX0FQUExJQ0FUSU9OX0lERU5USUZJRVJTLkxPR0dFUl9XSU5TVE9OKSBsb2dnZXI6IElMb2dnZXIsXG4gICAgQGluamVjdChVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUy5FWFBSRVNTKSBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24sXG4gICAgQGluamVjdChVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUy5FWFBSRVNTX1JPVVRFUikgcm91dGVyOiBleHByZXNzLlJvdXRlclxuICApIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsaXplU2VjdXJpdHkoKTtcbiAgICB0aGlzLmluaXRpYWxpemVCb2R5UGFyc2VycygpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVMb2dnaW5nKCk7XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbGl6ZUhhbmRsZXJzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplUGx1Z2lucygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUV4dGVuc2lvbnMoKTtcbiAgICB0aGlzLmluaXRpYWxpemVGaWxlVXBsb2FkKCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZVNlY3VyaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVCb2R5UGFyc2VycygpOiB2b2lkIHtcbiAgICB0aGlzLmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVGaWxlVXBsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwLnVzZShmaWxlVXBsb2FkKCkpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVMb2dnaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9nZ2VyLmluaXRpYWxpemUoKTtcbiAgICBtb3JnYW4udG9rZW4oXG4gICAgICAnYm9keScsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgKHJlcSk6IHN0cmluZyA9PiBgXFxuUkVRVUVTVCBCT0RZOiAke0pTT04uc3RyaW5naWZ5KChyZXEgYXMgYW55KS5ib2R5KX1gXG4gICAgKTtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24geW91IG1heSBjb25zaWRlciB3aGF0IHlvdSB3YW50IHRvIGxvZyBvbiBwcm9kdWN0aW9uXG4gICAgICoga2VlcCBpbiBtaW5kIHRvIG9iZnVzY2F0ZSBzZW5zaXRpdmUgZGF0YSBpZiB5b3Ugd2FudCB0byBsb2cgcmVxdWVzdCBvciByZXNwb25zZSBib2RpZXNcbiAgICAgKiBmb3JtYXQgY2FuIGJlIG1vdmVkIHRvIHNvbWUgb3RoZXIgcGxhY2UgZm9yIGVhc2llciBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgdGhpcy5hcHAudXNlKFxuICAgICAgbW9yZ2FuKFxuICAgICAgICAnOm1ldGhvZCA6dXJsIEhUVFAvOmh0dHAtdmVyc2lvbiA6c3RhdHVzIDpyZXNwb25zZS10aW1lIG1zIDpyZWZlcnJlciA6dXNlci1hZ2VudCAtIDpib2R5JyxcbiAgICAgICAgeyBzdHJlYW06IHRoaXMubG9nZ2VyIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVIYW5kbGVycygpOiB2b2lkIHtcbiAgICBFcnJvcignTk9UIElNUExFTUVOVEVEJyk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZVBsdWdpbnMoKTogdm9pZCB7XG4gICAgdGhpcy5hcHAudXNlKG1ldGhvZE92ZXJyaWRlKCkpO1xuICAgIHRoaXMuYXBwLnVzZShoZWxtZXQoKSk7XG4gICAgdGhpcy5hcHAudXNlKGNvcnMoKSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZUV4dGVuc2lvbnMoKTogdm9pZCB7XG4gICAgaWYgKFNXQUdHRVJfSE9TVCkge1xuICAgICAgc3dhZ2dlckRvY3VtZW50Lmhvc3QgPSBTV0FHR0VSX0hPU1Q7XG4gICAgICB0aGlzLmFwcC51c2UoXG4gICAgICAgIFNXQUdHRVJfQkFTRV9QQVRILFxuICAgICAgICBzd2FnZ2VyVWkuc2VydmUsXG4gICAgICAgIHN3YWdnZXJVaS5zZXR1cChzd2FnZ2VyRG9jdW1lbnQpXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkV4cHJlc3NBcHBsaWNhdGlvbiIsIkJhc2VBcHBsaWNhdGlvbiIsImNvbnN0cnVjdG9yIiwibG9nZ2VyIiwiYXBwIiwicm91dGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVTZWN1cml0eSIsImluaXRpYWxpemVCb2R5UGFyc2VycyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImluaXRpYWxpemVMb2dnaW5nIiwiaW5pdGlhbGl6ZUhhbmRsZXJzIiwiaW5pdGlhbGl6ZVBsdWdpbnMiLCJpbml0aWFsaXplRXh0ZW5zaW9ucyIsImluaXRpYWxpemVGaWxlVXBsb2FkIiwidXNlIiwiZXhwcmVzcyIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJmaWxlVXBsb2FkIiwibW9yZ2FuIiwidG9rZW4iLCJyZXEiLCJKU09OIiwic3RyaW5naWZ5IiwiYm9keSIsInN0cmVhbSIsIkVycm9yIiwibWV0aG9kT3ZlcnJpZGUiLCJoZWxtZXQiLCJjb3JzIiwiU1dBR0dFUl9IT1NUIiwic3dhZ2dlckRvY3VtZW50IiwiaG9zdCIsIlNXQUdHRVJfQkFTRV9QQVRIIiwic3dhZ2dlclVpIiwic2VydmUiLCJzZXR1cCIsImluamVjdGFibGUiLCJpbmplY3QiLCJVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUyIsIkxPR0dFUl9XSU5TVE9OIiwiRVhQUkVTUyIsIkVYUFJFU1NfUk9VVEVSIl0sIm1hcHBpbmdzIjoiOzs7OytCQXFCYUE7O2FBQUFBOzs4REFyQk87NkRBQ0Q7cUVBQ1E7NkRBQ1I7MkRBQ0Y7dUVBQ0s7MkJBQ2E7d0VBQ1o7aUNBR1M7eUJBQ1I7MkJBSWpCO2lDQUNvQztrRUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHZkEscUJBQU4saUNBQ0dDLGdDQUFlO0lBT3ZCQyxZQUNFLEFBQW1EQyxNQUFlLEVBQ2xFLEFBQTRDQyxHQUF3QixFQUNwRSxBQUFtREMsTUFBc0IsQ0FDekU7UUFDQSxLQUFLLENBQUNEO1FBQ04sSUFBSSxDQUFDRCxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDRSxNQUFNLEdBQUdBO0lBQ2hCO0lBRU9DLGFBQW1CO1FBQ3hCLElBQUksQ0FBQ0Msa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQ0MscUJBQXFCO1FBQzFCLElBQUlDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLLFFBQVE7WUFDbkMsSUFBSSxDQUFDQyxpQkFBaUI7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQ0Msa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCO1FBQ3RCLElBQUksQ0FBQ0Msb0JBQW9CO1FBQ3pCLElBQUksQ0FBQ0Msb0JBQW9CO0lBQzNCO0lBRU9ULHFCQUEyQjtRQUNoQyxJQUFJLENBQUNILEdBQUcsQ0FBQ2EsR0FBRyxDQUFDQyxnQkFBTyxDQUFDQyxVQUFVLENBQUM7WUFBRUMsVUFBVSxLQUFLO1FBQUM7SUFDcEQ7SUFFT1osd0JBQThCO1FBQ25DLElBQUksQ0FBQ0osR0FBRyxDQUFDYSxHQUFHLENBQUNDLGdCQUFPLENBQUNHLElBQUk7SUFDM0I7SUFFT0wsdUJBQTZCO1FBQ2xDLElBQUksQ0FBQ1osR0FBRyxDQUFDYSxHQUFHLENBQUNLLElBQUFBLDBCQUFVO0lBQ3pCO0lBRU9WLG9CQUEwQjtRQUMvQixJQUFJLENBQUNULE1BQU0sQ0FBQ0csVUFBVTtRQUN0QmlCLGVBQU0sQ0FBQ0MsS0FBSyxDQUNWLFFBQ0EsOERBQThEO1FBQzlELENBQUNDLE1BQWdCLENBQUMsZ0JBQWdCLEVBQUVDLEtBQUtDLFNBQVMsQ0FBQyxBQUFDRixJQUFZRyxJQUFJLEVBQUUsQ0FBQztRQUV6RTs7OztLQUlDLEdBQ0QsSUFBSSxDQUFDeEIsR0FBRyxDQUFDYSxHQUFHLENBQ1ZNLElBQUFBLGVBQU0sRUFDSiwyRkFDQTtZQUFFTSxRQUFRLElBQUksQ0FBQzFCLE1BQU07UUFBQztJQUc1QjtJQUVPVSxxQkFBMkI7UUFDaENpQixNQUFNO0lBQ1I7SUFFT2hCLG9CQUEwQjtRQUMvQixJQUFJLENBQUNWLEdBQUcsQ0FBQ2EsR0FBRyxDQUFDYyxJQUFBQSx1QkFBYztRQUMzQixJQUFJLENBQUMzQixHQUFHLENBQUNhLEdBQUcsQ0FBQ2UsSUFBQUEsZUFBTTtRQUNuQixJQUFJLENBQUM1QixHQUFHLENBQUNhLEdBQUcsQ0FBQ2dCLElBQUFBLGFBQUk7SUFDbkI7SUFFT2xCLHVCQUE2QjtRQUNsQyxJQUFJbUIsdUJBQVksRUFBRTtZQUNoQkMsb0JBQWUsQ0FBQ0MsSUFBSSxHQUFHRix1QkFBWTtZQUNuQyxJQUFJLENBQUM5QixHQUFHLENBQUNhLEdBQUcsQ0FDVm9CLDRCQUFpQixFQUNqQkMseUJBQVMsQ0FBQ0MsS0FBSyxFQUNmRCx5QkFBUyxDQUFDRSxLQUFLLENBQUNMLG9CQUFlO1FBRW5DLENBQUM7SUFDSDtBQUNGO0FBbEZhbkM7SUFEWnlDLElBQUFBLHFCQUFVO0lBVU5DLFdBQUFBLElBQUFBLGlCQUFNLEVBQUNDLDJDQUEwQixDQUFDQyxjQUFjO0lBQ2hERixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQywyQ0FBMEIsQ0FBQ0UsT0FBTztJQUN6Q0gsV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0MsMkNBQTBCLENBQUNHLGNBQWM7OztlQUZVLGdCQUFPLDRCQUFQLGdCQUFPO2VBQ2pCLGdCQUFPLDJCQUFQLGdCQUFPLENBQUMsdUNBQVIsZ0JBQU8sQ0FBQztlQUNFLGdCQUFPLDJCQUFQLGdCQUFPLENBQUMsa0NBQVIsZ0JBQU8sQ0FBQzs7R0FYMUQ5QyJ9