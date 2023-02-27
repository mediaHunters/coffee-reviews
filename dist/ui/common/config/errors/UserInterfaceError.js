"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserInterfaceError", {
    enumerable: true,
    get: ()=>UserInterfaceError
});
const _baseError = require("../../../../core/common/errors/BaseError");
class UserInterfaceError extends _baseError.BaseError {
    constructor(status, code, message = '', name = ''){
        super(code, message, name);
        this.status = status;
        this.code = code;
        this.message = message;
        this.name = name;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2Vycm9ycy9Vc2VySW50ZXJmYWNlRXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSAnY29yZS9jb21tb24vZXJyb3JzL0Jhc2VFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBVc2VySW50ZXJmYWNlRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IGNvZGU/OiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZyA9ICcnLFxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSAnJ1xuICApIHtcbiAgICBzdXBlcihjb2RlLCBtZXNzYWdlLCBuYW1lKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlVzZXJJbnRlcmZhY2VFcnJvciIsIkJhc2VFcnJvciIsImNvbnN0cnVjdG9yIiwic3RhdHVzIiwiY29kZSIsIm1lc3NhZ2UiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7YUFBQUE7OzJCQUZhO0FBRW5CLE1BQU1BLDJCQUEyQkMsb0JBQVM7SUFDL0NDLFlBQ2tCQyxRQUNBQyxNQUNBQyxVQUFrQixFQUFFLEVBQ3BCQyxPQUFlLEVBQUUsQ0FDakM7UUFDQSxLQUFLLENBQUNGLE1BQU1DLFNBQVNDO3NCQUxMSDtvQkFDQUM7dUJBQ0FDO29CQUNBQztJQUdsQjtBQUNGIn0=