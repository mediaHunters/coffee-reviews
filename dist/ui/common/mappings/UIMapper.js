"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UIMapper", {
    enumerable: true,
    get: ()=>UIMapper
});
const _inversify = require("inversify");
const _mapper = require("@wufe/mapper");
const _userDomainToUserUI = require("./User/UserDomainToUserUI");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let UIMapper = class UIMapper {
    constructor(){
        this.mapper = new _mapper.Mapper().withConfiguration((configuration)=>configuration.shouldIgnoreSourcePropertiesIfNotInDestination(true).shouldAutomaticallyMapArrays(true));
        this.initialize();
    }
    initialize() {
        (0, _userDomainToUserUI.UserDomainToUserUI)().configureMapping(this.mapper);
    }
};
UIMapper = __decorate([
    (0, _inversify.injectable)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [])
], UIMapper);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91aS9jb21tb24vbWFwcGluZ3MvVUlNYXBwZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5pbXBvcnQgeyBNYXBwZXIgfSBmcm9tICdAd3VmZS9tYXBwZXInO1xuXG5pbXBvcnQgeyBVc2VyRG9tYWluVG9Vc2VyVUkgfSBmcm9tICd1aS9jb21tb24vbWFwcGluZ3MvVXNlci9Vc2VyRG9tYWluVG9Vc2VyVUknO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVUlNYXBwZXIge1xuICBwdWJsaWMgcmVhZG9ubHkgbWFwcGVyOiBNYXBwZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYXBwZXIgPSBuZXcgTWFwcGVyKCkud2l0aENvbmZpZ3VyYXRpb24oKGNvbmZpZ3VyYXRpb24pID0+XG4gICAgICBjb25maWd1cmF0aW9uXG4gICAgICAgIC5zaG91bGRJZ25vcmVTb3VyY2VQcm9wZXJ0aWVzSWZOb3RJbkRlc3RpbmF0aW9uKHRydWUpXG4gICAgICAgIC5zaG91bGRBdXRvbWF0aWNhbGx5TWFwQXJyYXlzKHRydWUpXG4gICAgKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIFVzZXJEb21haW5Ub1VzZXJVSSgpLmNvbmZpZ3VyZU1hcHBpbmcodGhpcy5tYXBwZXIpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVUlNYXBwZXIiLCJjb25zdHJ1Y3RvciIsIm1hcHBlciIsIk1hcHBlciIsIndpdGhDb25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsInNob3VsZElnbm9yZVNvdXJjZVByb3BlcnRpZXNJZk5vdEluRGVzdGluYXRpb24iLCJzaG91bGRBdXRvbWF0aWNhbGx5TWFwQXJyYXlzIiwiaW5pdGlhbGl6ZSIsIlVzZXJEb21haW5Ub1VzZXJVSSIsImNvbmZpZ3VyZU1hcHBpbmciLCJpbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7OytCQU1hQTs7YUFBQUE7OzJCQU5jO3dCQUNKO29DQUVZOzs7Ozs7Ozs7O0lBR3RCQSxXQUFOO0lBR0xDLGFBQWM7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJQyxjQUFNLEdBQUdDLGlCQUFpQixDQUFDLENBQUNDLGdCQUM1Q0EsY0FDR0MsOENBQThDLENBQUMsSUFBSSxFQUNuREMsNEJBQTRCLENBQUMsSUFBSTtRQUd0QyxJQUFJLENBQUNDLFVBQVU7SUFDakI7SUFFUUEsYUFBbUI7UUFDekJDLElBQUFBLHNDQUFrQixJQUFHQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNSLE1BQU07SUFDbkQ7QUFDRjtBQWhCYUY7SUFEWlcsSUFBQUEscUJBQVU7OztHQUNFWCJ9