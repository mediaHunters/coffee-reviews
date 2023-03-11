"use strict";
<<<<<<< HEAD
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ui/common/config/logger/BaseLogger.ts
var BaseLogger_exports = {};
__export(BaseLogger_exports, {
  BaseLogger: () => BaseLogger
});
module.exports = __toCommonJS(BaseLogger_exports);
var BaseLogger = class {
  constructor(logger) {
    this.logger = logger;
  }
  getLogger() {
    return this.logger;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseLogger
});
//# sourceMappingURL=BaseLogger.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseLogger", {
    enumerable: true,
    get: ()=>BaseLogger
});
class BaseLogger {
    constructor(logger){
        this.logger = logger;
    }
    getLogger() {
        return this.logger;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vY29uZmlnL2xvZ2dlci9CYXNlTG9nZ2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTG9nZ2VyPFQ+IHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGxvZ2dlcjogVDtcblxuICBjb25zdHJ1Y3Rvcihsb2dnZXI6IFQpIHtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMb2dnZXIoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmFzZUxvZ2dlciIsImNvbnN0cnVjdG9yIiwibG9nZ2VyIiwiZ2V0TG9nZ2VyIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFzQkE7O2FBQUFBOztBQUFmLE1BQWVBO0lBR3BCQyxZQUFZQyxNQUFTLENBQUU7UUFDckIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO0lBQ2hCO0lBRU9DLFlBQWU7UUFDcEIsT0FBTyxJQUFJLENBQUNELE1BQU07SUFDcEI7QUFDRiJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
