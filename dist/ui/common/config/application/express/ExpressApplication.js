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
    // this.app.use(fileUpload());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvRXhwcmVzc0FwcGxpY2F0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IG1ldGhvZE92ZXJyaWRlIGZyb20gJ21ldGhvZC1vdmVycmlkZSc7XG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBzd2FnZ2VyVWkgZnJvbSAnc3dhZ2dlci11aS1leHByZXNzJztcbmltcG9ydCB7IGluamVjdCwgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IElBcHBsaWNhdGlvbiB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvYXBwbGljYXRpb24vY29tbW9uL0lBcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBCYXNlQXBwbGljYXRpb24gfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2NvbW1vbi9CYXNlQXBwbGljYXRpb24nO1xuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvbG9nZ2VyL0lMb2dnZXInO1xuaW1wb3J0IHtcbiAgU1dBR0dFUl9CQVNFX1BBVEgsXG4gIFNXQUdHRVJfSE9TVCxcbn0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9jb25zdHMvdmFyaWFibGVzJztcbmltcG9ydCB7IFVJX0FQUExJQ0FUSU9OX0lERU5USUZJRVJTIH0gZnJvbSAndWkvVUlNb2R1bGVTeW1ib2xzJztcblxuaW1wb3J0IHN3YWdnZXJEb2N1bWVudCBmcm9tICd1aS9jb21tb24vY29uZmlnL3N3YWdnZXIuanNvbic7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHByZXNzQXBwbGljYXRpb25cbiAgZXh0ZW5kcyBCYXNlQXBwbGljYXRpb248ZXhwcmVzcy5BcHBsaWNhdGlvbj5cbiAgaW1wbGVtZW50cyBJQXBwbGljYXRpb25cbntcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IElMb2dnZXI7XG5cbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMuTE9HR0VSX1dJTlNUT04pIGxvZ2dlcjogSUxvZ2dlcixcbiAgICBAaW5qZWN0KFVJX0FQUExJQ0FUSU9OX0lERU5USUZJRVJTLkVYUFJFU1MpIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbixcbiAgICBAaW5qZWN0KFVJX0FQUExJQ0FUSU9OX0lERU5USUZJRVJTLkVYUFJFU1NfUk9VVEVSKSByb3V0ZXI6IGV4cHJlc3MuUm91dGVyXG4gICkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxpemVTZWN1cml0eSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUJvZHlQYXJzZXJzKCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUxvZ2dpbmcoKTtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsaXplSGFuZGxlcnMoKTtcbiAgICB0aGlzLmluaXRpYWxpemVQbHVnaW5zKCk7XG4gICAgdGhpcy5pbml0aWFsaXplRXh0ZW5zaW9ucygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZpbGVVcGxvYWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplU2VjdXJpdHkoKTogdm9pZCB7XG4gICAgdGhpcy5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZUJvZHlQYXJzZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZUZpbGVVcGxvYWQoKTogdm9pZCB7XG4gICAgLy8gdGhpcy5hcHAudXNlKGZpbGVVcGxvYWQoKSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZUxvZ2dpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnZXIuaW5pdGlhbGl6ZSgpO1xuICAgIG1vcmdhbi50b2tlbihcbiAgICAgICdib2R5JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAocmVxKTogc3RyaW5nID0+IGBcXG5SRVFVRVNUIEJPRFk6ICR7SlNPTi5zdHJpbmdpZnkoKHJlcSBhcyBhbnkpLmJvZHkpfWBcbiAgICApO1xuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiB5b3UgbWF5IGNvbnNpZGVyIHdoYXQgeW91IHdhbnQgdG8gbG9nIG9uIHByb2R1Y3Rpb25cbiAgICAgKiBrZWVwIGluIG1pbmQgdG8gb2JmdXNjYXRlIHNlbnNpdGl2ZSBkYXRhIGlmIHlvdSB3YW50IHRvIGxvZyByZXF1ZXN0IG9yIHJlc3BvbnNlIGJvZGllc1xuICAgICAqIGZvcm1hdCBjYW4gYmUgbW92ZWQgdG8gc29tZSBvdGhlciBwbGFjZSBmb3IgZWFzaWVyIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICB0aGlzLmFwcC51c2UoXG4gICAgICBtb3JnYW4oXG4gICAgICAgICc6bWV0aG9kIDp1cmwgSFRUUC86aHR0cC12ZXJzaW9uIDpzdGF0dXMgOnJlc3BvbnNlLXRpbWUgbXMgOnJlZmVycmVyIDp1c2VyLWFnZW50IC0gOmJvZHknLFxuICAgICAgICB7IHN0cmVhbTogdGhpcy5sb2dnZXIgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZUhhbmRsZXJzKCk6IHZvaWQge1xuICAgIEVycm9yKCdOT1QgSU1QTEVNRU5URUQnKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplUGx1Z2lucygpOiB2b2lkIHtcbiAgICB0aGlzLmFwcC51c2UobWV0aG9kT3ZlcnJpZGUoKSk7XG4gICAgdGhpcy5hcHAudXNlKGhlbG1ldCgpKTtcbiAgICB0aGlzLmFwcC51c2UoY29ycygpKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplRXh0ZW5zaW9ucygpOiB2b2lkIHtcbiAgICBpZiAoU1dBR0dFUl9IT1NUKSB7XG4gICAgICBzd2FnZ2VyRG9jdW1lbnQuaG9zdCA9IFNXQUdHRVJfSE9TVDtcbiAgICAgIHRoaXMuYXBwLnVzZShcbiAgICAgICAgU1dBR0dFUl9CQVNFX1BBVEgsXG4gICAgICAgIHN3YWdnZXJVaS5zZXJ2ZSxcbiAgICAgICAgc3dhZ2dlclVpLnNldHVwKHN3YWdnZXJEb2N1bWVudClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiRXhwcmVzc0FwcGxpY2F0aW9uIiwiQmFzZUFwcGxpY2F0aW9uIiwiY29uc3RydWN0b3IiLCJsb2dnZXIiLCJhcHAiLCJyb3V0ZXIiLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZVNlY3VyaXR5IiwiaW5pdGlhbGl6ZUJvZHlQYXJzZXJzIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaW5pdGlhbGl6ZUxvZ2dpbmciLCJpbml0aWFsaXplSGFuZGxlcnMiLCJpbml0aWFsaXplUGx1Z2lucyIsImluaXRpYWxpemVFeHRlbnNpb25zIiwiaW5pdGlhbGl6ZUZpbGVVcGxvYWQiLCJ1c2UiLCJleHByZXNzIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsIm1vcmdhbiIsInRva2VuIiwicmVxIiwiSlNPTiIsInN0cmluZ2lmeSIsImJvZHkiLCJzdHJlYW0iLCJFcnJvciIsIm1ldGhvZE92ZXJyaWRlIiwiaGVsbWV0IiwiY29ycyIsIlNXQUdHRVJfSE9TVCIsInN3YWdnZXJEb2N1bWVudCIsImhvc3QiLCJTV0FHR0VSX0JBU0VfUEFUSCIsInN3YWdnZXJVaSIsInNlcnZlIiwic2V0dXAiLCJpbmplY3RhYmxlIiwiaW5qZWN0IiwiVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMiLCJMT0dHRVJfV0lOU1RPTiIsIkVYUFJFU1MiLCJFWFBSRVNTX1JPVVRFUiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFvQmFBOzthQUFBQTs7OERBcEJPOzZEQUNEO3FFQUNROzZEQUNSOzJEQUNGO3VFQUNLOzJCQUNhO2lDQUdIO3lCQUNSOzJCQUlqQjtpQ0FDb0M7a0VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2ZBLHFCQUFOLGlDQUNHQyxnQ0FBZTtJQU92QkMsWUFDRSxBQUFtREMsTUFBZSxFQUNsRSxBQUE0Q0MsR0FBd0IsRUFDcEUsQUFBbURDLE1BQXNCLENBQ3pFO1FBQ0EsS0FBSyxDQUFDRDtRQUNOLElBQUksQ0FBQ0QsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0UsTUFBTSxHQUFHQTtJQUNoQjtJQUVPQyxhQUFtQjtRQUN4QixJQUFJLENBQUNDLGtCQUFrQjtRQUN2QixJQUFJLENBQUNDLHFCQUFxQjtRQUMxQixJQUFJQyxRQUFRQyxHQUFHLENBQUNDLFFBQVEsS0FBSyxRQUFRO1lBQ25DLElBQUksQ0FBQ0MsaUJBQWlCO1FBQ3hCLENBQUM7UUFDRCxJQUFJLENBQUNDLGtCQUFrQjtRQUN2QixJQUFJLENBQUNDLGlCQUFpQjtRQUN0QixJQUFJLENBQUNDLG9CQUFvQjtRQUN6QixJQUFJLENBQUNDLG9CQUFvQjtJQUMzQjtJQUVPVCxxQkFBMkI7UUFDaEMsSUFBSSxDQUFDSCxHQUFHLENBQUNhLEdBQUcsQ0FBQ0MsZ0JBQU8sQ0FBQ0MsVUFBVSxDQUFDO1lBQUVDLFVBQVUsS0FBSztRQUFDO0lBQ3BEO0lBRU9aLHdCQUE4QjtRQUNuQyxJQUFJLENBQUNKLEdBQUcsQ0FBQ2EsR0FBRyxDQUFDQyxnQkFBTyxDQUFDRyxJQUFJO0lBQzNCO0lBRU9MLHVCQUE2QjtJQUNsQyw4QkFBOEI7SUFDaEM7SUFFT0osb0JBQTBCO1FBQy9CLElBQUksQ0FBQ1QsTUFBTSxDQUFDRyxVQUFVO1FBQ3RCZ0IsZUFBTSxDQUFDQyxLQUFLLENBQ1YsUUFDQSw4REFBOEQ7UUFDOUQsQ0FBQ0MsTUFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRUMsS0FBS0MsU0FBUyxDQUFDLEFBQUNGLElBQVlHLElBQUksRUFBRSxDQUFDO1FBRXpFOzs7O0tBSUMsR0FDRCxJQUFJLENBQUN2QixHQUFHLENBQUNhLEdBQUcsQ0FDVkssSUFBQUEsZUFBTSxFQUNKLDJGQUNBO1lBQUVNLFFBQVEsSUFBSSxDQUFDekIsTUFBTTtRQUFDO0lBRzVCO0lBRU9VLHFCQUEyQjtRQUNoQ2dCLE1BQU07SUFDUjtJQUVPZixvQkFBMEI7UUFDL0IsSUFBSSxDQUFDVixHQUFHLENBQUNhLEdBQUcsQ0FBQ2EsSUFBQUEsdUJBQWM7UUFDM0IsSUFBSSxDQUFDMUIsR0FBRyxDQUFDYSxHQUFHLENBQUNjLElBQUFBLGVBQU07UUFDbkIsSUFBSSxDQUFDM0IsR0FBRyxDQUFDYSxHQUFHLENBQUNlLElBQUFBLGFBQUk7SUFDbkI7SUFFT2pCLHVCQUE2QjtRQUNsQyxJQUFJa0IsdUJBQVksRUFBRTtZQUNoQkMsb0JBQWUsQ0FBQ0MsSUFBSSxHQUFHRix1QkFBWTtZQUNuQyxJQUFJLENBQUM3QixHQUFHLENBQUNhLEdBQUcsQ0FDVm1CLDRCQUFpQixFQUNqQkMseUJBQVMsQ0FBQ0MsS0FBSyxFQUNmRCx5QkFBUyxDQUFDRSxLQUFLLENBQUNMLG9CQUFlO1FBRW5DLENBQUM7SUFDSDtBQUNGO0FBbEZhbEM7SUFEWndDLElBQUFBLHFCQUFVO0lBVU5DLFdBQUFBLElBQUFBLGlCQUFNLEVBQUNDLDJDQUEwQixDQUFDQyxjQUFjO0lBQ2hERixXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQywyQ0FBMEIsQ0FBQ0UsT0FBTztJQUN6Q0gsV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0MsMkNBQTBCLENBQUNHLGNBQWM7OztlQUZVLGdCQUFPLDRCQUFQLGdCQUFPO2VBQ2pCLGdCQUFPLDJCQUFQLGdCQUFPLENBQUMsdUNBQVIsZ0JBQU8sQ0FBQztlQUNFLGdCQUFPLDJCQUFQLGdCQUFPLENBQUMsa0NBQVIsZ0JBQU8sQ0FBQzs7R0FYMUQ3QyJ9