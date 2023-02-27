"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JWTTokenUtil", {
    enumerable: true,
    get: ()=>JWTTokenUtil
});
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
const _inversify = require("inversify");
const _variables = require("../../../../consts/variables");
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
let JWTTokenUtil = class JWTTokenUtil {
    AUTH_HEADER = 'authorization';
    SCHEME = 'bearer';
    MATCHER = /(\S+)\s+(\S+)/;
    generateToken(payload, secret, expiresIn, payloadKey) {
        return _jsonwebtoken.default.sign(payloadKey ? {
            [payloadKey]: payload
        } : payload, secret, {
            expiresIn
        });
    }
    decodeToken(token) {
        try {
            return _jsonwebtoken.default.verify(token, _variables.APP_TOKEN_SECRET);
        } catch  {
            return null;
        }
    }
    getTokenFromHeaders(headers) {
        const authHeader = headers[this.AUTH_HEADER];
        if (!authHeader) {
            return null;
        }
        const matches = authHeader.match(this.MATCHER);
        return matches && matches[2];
    }
};
JWTTokenUtil = __decorate([
    (0, _inversify.injectable)()
], JWTTokenUtil);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2NvbW1vbi9hdXRoL3V0aWxzL0pXVFRva2VuVXRpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmNvbWluZ0h0dHBIZWFkZXJzIH0gZnJvbSAnaHR0cCc7XG5cbmltcG9ydCBqd3QsIHsgU2VjcmV0IH0gZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5pbXBvcnQgeyBBUFBfVE9LRU5fU0VDUkVUIH0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9jb25zdHMvdmFyaWFibGVzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICd1aS9jb21tb24vbW9kZWxzL1VzZXInO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSldUVG9rZW5VdGlsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBBVVRIX0hFQURFUiA9ICdhdXRob3JpemF0aW9uJztcblxuICBwcml2YXRlIHJlYWRvbmx5IFNDSEVNRSA9ICdiZWFyZXInO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgTUFUQ0hFUiA9IC8oXFxTKylcXHMrKFxcUyspLztcblxuICBnZW5lcmF0ZVRva2VuKFxuICAgIHBheWxvYWQ6IFVzZXIsXG4gICAgc2VjcmV0OiBTZWNyZXQsXG4gICAgZXhwaXJlc0luOiBzdHJpbmcgfCBudW1iZXIsXG4gICAgcGF5bG9hZEtleT86IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBqd3Quc2lnbihwYXlsb2FkS2V5ID8geyBbcGF5bG9hZEtleV06IHBheWxvYWQgfSA6IHBheWxvYWQsIHNlY3JldCwge1xuICAgICAgZXhwaXJlc0luLFxuICAgIH0pO1xuICB9XG5cbiAgZGVjb2RlVG9rZW48UiBleHRlbmRzIG9iamVjdCB8IHN0cmluZyB8IG51bGw+KHRva2VuOiBzdHJpbmcpOiBSIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIEFQUF9UT0tFTl9TRUNSRVQpIGFzIFI7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gbnVsbCBhcyBSO1xuICAgIH1cbiAgfVxuXG4gIGdldFRva2VuRnJvbUhlYWRlcnMoaGVhZGVyczogSW5jb21pbmdIdHRwSGVhZGVycyk6IGFueSB7XG4gICAgY29uc3QgYXV0aEhlYWRlciA9IGhlYWRlcnNbdGhpcy5BVVRIX0hFQURFUl07XG4gICAgaWYgKCFhdXRoSGVhZGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlcyA9IGF1dGhIZWFkZXIubWF0Y2godGhpcy5NQVRDSEVSKTtcbiAgICByZXR1cm4gbWF0Y2hlcyAmJiBtYXRjaGVzWzJdO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSldUVG9rZW5VdGlsIiwiQVVUSF9IRUFERVIiLCJTQ0hFTUUiLCJNQVRDSEVSIiwiZ2VuZXJhdGVUb2tlbiIsInBheWxvYWQiLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJwYXlsb2FkS2V5Iiwiand0Iiwic2lnbiIsImRlY29kZVRva2VuIiwidG9rZW4iLCJ2ZXJpZnkiLCJBUFBfVE9LRU5fU0VDUkVUIiwiZ2V0VG9rZW5Gcm9tSGVhZGVycyIsImhlYWRlcnMiLCJhdXRoSGVhZGVyIiwibWF0Y2hlcyIsIm1hdGNoIiwiaW5qZWN0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFTYUE7O2FBQUFBOzttRUFQZTsyQkFDRDsyQkFFTTs7Ozs7Ozs7Ozs7O0lBSXBCQSxlQUFOO0lBQ1lDLGNBQWMsZ0JBQWdCO0lBRTlCQyxTQUFTLFNBQVM7SUFFbEJDLFVBQVUsZ0JBQWdCO0lBRTNDQyxjQUNFQyxPQUFhLEVBQ2JDLE1BQWMsRUFDZEMsU0FBMEIsRUFDMUJDLFVBQW1CLEVBQ1g7UUFDUixPQUFPQyxxQkFBRyxDQUFDQyxJQUFJLENBQUNGLGFBQWE7WUFBRSxDQUFDQSxXQUFXLEVBQUVIO1FBQVEsSUFBSUEsT0FBTyxFQUFFQyxRQUFRO1lBQ3hFQztRQUNGO0lBQ0Y7SUFFQUksWUFBOENDLEtBQWEsRUFBSztRQUM5RCxJQUFJO1lBQ0YsT0FBT0gscUJBQUcsQ0FBQ0ksTUFBTSxDQUFDRCxPQUFPRSwyQkFBZ0I7UUFDM0MsRUFBRSxPQUFNO1lBQ04sT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUVBQyxvQkFBb0JDLE9BQTRCLEVBQU87UUFDckQsTUFBTUMsYUFBYUQsT0FBTyxDQUFDLElBQUksQ0FBQ2YsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQ2dCLFlBQVk7WUFDZixPQUFPLElBQUk7UUFDYixDQUFDO1FBQ0QsTUFBTUMsVUFBVUQsV0FBV0UsS0FBSyxDQUFDLElBQUksQ0FBQ2hCLE9BQU87UUFDN0MsT0FBT2UsV0FBV0EsT0FBTyxDQUFDLEVBQUU7SUFDOUI7QUFDRjtBQWxDYWxCO0lBRFpvQixJQUFBQSxxQkFBVTtHQUNFcEIifQ==