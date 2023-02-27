"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JWTAuthenticationHandler", {
    enumerable: true,
    get: ()=>JWTAuthenticationHandler
});
const _inversify = require("inversify");
const _httpStatusCodes = require("http-status-codes");
const _uimoduleSymbols = require("../../../../../UIModuleSymbols");
const _jwttokenUtil = require("../../common/auth/utils/JWTTokenUtil");
const _variables = require("../../../consts/variables");
const _uimapper = require("../../../../mappings/UIMapper");
const _userInterfaceError = require("../../../errors/UserInterfaceError");
const _iauthenticationService = require("../../../../../../core/applicationServices/Authentication/IAuthenticationService");
const _coreModuleSymbols = require("../../../../../../core/CoreModuleSymbols");
const _authentication = require("../../common/auth/models/Authentication");
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
const PAYLOAD_KEY = 'user';
let JWTAuthenticationHandler = class JWTAuthenticationHandler {
    constructor(jwtTokenUtil, authenticationService, uiMapper){
        this.jwtTokenUtil = jwtTokenUtil;
        this.authenticationService = authenticationService;
        this.uiMapper = uiMapper;
    }
    async authenticate(request) {
        const user = await this.authenticationService.verifyCredentials(request);
        if (!user) {
            throw new _userInterfaceError.UserInterfaceError(_httpStatusCodes.NOT_FOUND, 'USER_NOT_FOUND');
        }
        const userUi = this.uiMapper.mapper.map({
            destination: _uimoduleSymbols.UI_MAPPINGS_IDENTIFIERS.USER_UI,
            source: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.USER_DOMAIN
        }, user);
        return new _authentication.Authentication(this.jwtTokenUtil.generateToken(userUi, _variables.APP_TOKEN_SECRET, _variables.APP_TOKEN_LIFE, PAYLOAD_KEY), user);
    }
};
JWTAuthenticationHandler = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_uimoduleSymbols.UI_APPLICATION_IDENTIFIERS.JWT_TOKEN_UTIL)),
    __param(1, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.AUTHENTICATION_SERVICE)),
    __param(2, (0, _inversify.inject)(_uimoduleSymbols.UI_IDENTIFIERS.UI_MAPPER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _jwttokenUtil.JWTTokenUtil === "undefined" ? Object : _jwttokenUtil.JWTTokenUtil,
        typeof _iauthenticationService.IAuthenticationService === "undefined" ? Object : _iauthenticationService.IAuthenticationService,
        typeof _uimapper.UIMapper === "undefined" ? Object : _uimapper.UIMapper
    ])
], JWTAuthenticationHandler);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC9KV1RBdXRoZW50aWNhdGlvbkhhbmRsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuaW1wb3J0IHsgTk9UX0ZPVU5EIH0gZnJvbSAnaHR0cC1zdGF0dXMtY29kZXMnO1xuXG5pbXBvcnQge1xuICBVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUyxcbiAgVUlfSURFTlRJRklFUlMsXG4gIFVJX01BUFBJTkdTX0lERU5USUZJRVJTLFxufSBmcm9tICd1aS9VSU1vZHVsZVN5bWJvbHMnO1xuaW1wb3J0IHsgSldUVG9rZW5VdGlsIH0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9hcHBsaWNhdGlvbi9jb21tb24vYXV0aC91dGlscy9KV1RUb2tlblV0aWwnO1xuaW1wb3J0IHsgSUF1dGhlbnRpY2F0aW9uSGFuZGxlciB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvYXBwbGljYXRpb24vY29tbW9uL2F1dGgvSUF1dGhlbnRpY2F0aW9uSGFuZGxlcic7XG5pbXBvcnQge1xuICBBUFBfVE9LRU5fTElGRSxcbiAgQVBQX1RPS0VOX1NFQ1JFVCxcbn0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9jb25zdHMvdmFyaWFibGVzJztcbmltcG9ydCB7IFVJTWFwcGVyIH0gZnJvbSAndWkvY29tbW9uL21hcHBpbmdzL1VJTWFwcGVyJztcbmltcG9ydCB7IFVzZXIgYXMgVXNlclVJIH0gZnJvbSAndWkvY29tbW9uL21vZGVscy9Vc2VyJztcbmltcG9ydCB7IFVzZXJJbnRlcmZhY2VFcnJvciB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvZXJyb3JzL1VzZXJJbnRlcmZhY2VFcnJvcic7XG5cbmltcG9ydCB7IElBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQXV0aGVudGljYXRpb24vSUF1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5cbmltcG9ydCB7XG4gIERPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTLFxuICBET01BSU5fTUFQUElOR19JREVOVElGSUVSUyxcbn0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICdjb3JlL2RvbWFpbi9Vc2VyL1VzZXInO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25RdWVyeSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9BdXRoZW50aWNhdGlvbi9yZXF1ZXN0cy9oYW5kbGVyL3F1ZXJ5L0F1dGhlbnRpY2F0aW9uUXVlcnknO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2NvbW1vbi9hdXRoL21vZGVscy9BdXRoZW50aWNhdGlvbic7XG5cbmNvbnN0IFBBWUxPQURfS0VZID0gJ3VzZXInO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSldUQXV0aGVudGljYXRpb25IYW5kbGVyIGltcGxlbWVudHMgSUF1dGhlbnRpY2F0aW9uSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoVUlfQVBQTElDQVRJT05fSURFTlRJRklFUlMuSldUX1RPS0VOX1VUSUwpXG4gICAgcHJpdmF0ZSByZWFkb25seSBqd3RUb2tlblV0aWw6IEpXVFRva2VuVXRpbCxcbiAgICBAaW5qZWN0KERPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTLkFVVEhFTlRJQ0FUSU9OX1NFUlZJQ0UpXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IElBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgQGluamVjdChVSV9JREVOVElGSUVSUy5VSV9NQVBQRVIpXG4gICAgcHJpdmF0ZSByZWFkb25seSB1aU1hcHBlcjogVUlNYXBwZXJcbiAgKSB7fVxuXG4gIGFzeW5jIGF1dGhlbnRpY2F0ZShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblF1ZXJ5KSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnZlcmlmeUNyZWRlbnRpYWxzKHJlcXVlc3QpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnRlcmZhY2VFcnJvcihOT1RfRk9VTkQsICdVU0VSX05PVF9GT1VORCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJVaSA9IHRoaXMudWlNYXBwZXIubWFwcGVyLm1hcDxVc2VyLCBVc2VyVUk+KFxuICAgICAge1xuICAgICAgICBkZXN0aW5hdGlvbjogVUlfTUFQUElOR1NfSURFTlRJRklFUlMuVVNFUl9VSSxcbiAgICAgICAgc291cmNlOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5VU0VSX0RPTUFJTixcbiAgICAgIH0sXG4gICAgICB1c2VyXG4gICAgKTtcblxuICAgIHJldHVybiBuZXcgQXV0aGVudGljYXRpb24oXG4gICAgICB0aGlzLmp3dFRva2VuVXRpbC5nZW5lcmF0ZVRva2VuKFxuICAgICAgICB1c2VyVWksXG4gICAgICAgIEFQUF9UT0tFTl9TRUNSRVQsXG4gICAgICAgIEFQUF9UT0tFTl9MSUZFLFxuICAgICAgICBQQVlMT0FEX0tFWVxuICAgICAgKSxcbiAgICAgIHVzZXJcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSldUQXV0aGVudGljYXRpb25IYW5kbGVyIiwiUEFZTE9BRF9LRVkiLCJjb25zdHJ1Y3RvciIsImp3dFRva2VuVXRpbCIsImF1dGhlbnRpY2F0aW9uU2VydmljZSIsInVpTWFwcGVyIiwiYXV0aGVudGljYXRlIiwicmVxdWVzdCIsInVzZXIiLCJ2ZXJpZnlDcmVkZW50aWFscyIsIlVzZXJJbnRlcmZhY2VFcnJvciIsIk5PVF9GT1VORCIsInVzZXJVaSIsIm1hcHBlciIsIm1hcCIsImRlc3RpbmF0aW9uIiwiVUlfTUFQUElOR1NfSURFTlRJRklFUlMiLCJVU0VSX1VJIiwic291cmNlIiwiRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMiLCJVU0VSX0RPTUFJTiIsIkF1dGhlbnRpY2F0aW9uIiwiZ2VuZXJhdGVUb2tlbiIsIkFQUF9UT0tFTl9TRUNSRVQiLCJBUFBfVE9LRU5fTElGRSIsImluamVjdGFibGUiLCJpbmplY3QiLCJVSV9BUFBMSUNBVElPTl9JREVOVElGSUVSUyIsIkpXVF9UT0tFTl9VVElMIiwiRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMiLCJBVVRIRU5USUNBVElPTl9TRVJWSUNFIiwiVUlfSURFTlRJRklFUlMiLCJVSV9NQVBQRVIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaUNhQTs7YUFBQUE7OzJCQWpDc0I7aUNBRVQ7aUNBTW5COzhCQUNzQjsyQkFLdEI7MEJBQ2tCO29DQUVVO3dDQUVJO21DQUtoQztnQ0FJd0I7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixNQUFNQyxjQUFjO0lBR1BELDJCQUFOO0lBQ0xFLFlBRW1CQyxjQUVBQyx1QkFFQUMsU0FDakI7NEJBTGlCRjtxQ0FFQUM7d0JBRUFDO0lBQ2hCO0lBRUgsTUFBTUMsYUFBYUMsT0FBNEIsRUFBRTtRQUMvQyxNQUFNQyxPQUFPLE1BQU0sSUFBSSxDQUFDSixxQkFBcUIsQ0FBQ0ssaUJBQWlCLENBQUNGO1FBQ2hFLElBQUksQ0FBQ0MsTUFBTTtZQUNULE1BQU0sSUFBSUUsc0NBQWtCLENBQUNDLDBCQUFTLEVBQUUsa0JBQWtCO1FBQzVELENBQUM7UUFFRCxNQUFNQyxTQUFTLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxNQUFNLENBQUNDLEdBQUcsQ0FDckM7WUFDRUMsYUFBYUMsd0NBQXVCLENBQUNDLE9BQU87WUFDNUNDLFFBQVFDLDZDQUEwQixDQUFDQyxXQUFXO1FBQ2hELEdBQ0FaO1FBR0YsT0FBTyxJQUFJYSw4QkFBYyxDQUN2QixJQUFJLENBQUNsQixZQUFZLENBQUNtQixhQUFhLENBQzdCVixRQUNBVywyQkFBZ0IsRUFDaEJDLHlCQUFjLEVBQ2R2QixjQUVGTztJQUVKO0FBQ0Y7QUFsQ2FSO0lBRFp5QixJQUFBQSxxQkFBVTtJQUdOQyxXQUFBQSxJQUFBQSxpQkFBTSxFQUFDQywyQ0FBMEIsQ0FBQ0MsY0FBYztJQUVoREYsV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0cseURBQXNDLENBQUNDLHNCQUFzQjtJQUVwRUosV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0ssK0JBQWMsQ0FBQ0MsU0FBUzs7O2VBSEQsMEJBQVksNEJBQVosMEJBQVk7ZUFFSCw4Q0FBc0IsNEJBQXRCLDhDQUFzQjtlQUVuQyxrQkFBUSw0QkFBUixrQkFBUTs7R0FQMUJoQyJ9