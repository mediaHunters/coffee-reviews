"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoffeeController", {
    enumerable: true,
    get: ()=>CoffeeController
});
const _inversify = require("inversify");
const _inversifyExpressUtils = require("inversify-express-utils");
const _httpStatusCodes = require("http-status-codes");
const _express = require("express");
const _coreModuleSymbols = require("../../../../../core/CoreModuleSymbols");
const _icoffeeService = require("../../../../../core/applicationServices/Coffee/ICoffeeService");
const _isAuthenticated = require("../../../../common/config/application/express/auth/middlewares/isAuthenticated");
const _userRole = require("../../../../../core/domain/User/UserRole");
const _createCoffeeCommandBody = require("../../requests/command/CreateCoffeeCommandBody");
const _deleteCoffeeCommand = require("../../../../../core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand");
const _deleteCoffeeCommandBody = require("../../requests/command/DeleteCoffeeCommandBody");
const _addReviewCommandBody = require("../../requests/command/AddReviewCommandBody");
const _findCoffeeRepositoryQuery = require("../../../../../core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery");
const _addCoffeeCommand = require("../../../../../core/applicationServices/Coffee/requests/command/AddCoffeeCommand");
const _updateCoffeeCommand = require("../../../../../core/applicationServices/Coffee/requests/command/UpdateCoffeeCommand");
const _findOneCoffeeRepositoryQueryBody = require("../../requests/query/FindOneCoffeeRepositoryQueryBody");
const _updateCoffeeCommandBody = require("../../requests/command/UpdateCoffeeCommandBody");
const _getUserReviewsQueryBody = require("../../requests/query/GetUserReviewsQueryBody");
const _ireviewService = require("../../../../../core/applicationServices/Review/IReviewService");
const _getUserReviewsQuery = require("../../../../../core/applicationServices/Review/requests/query/GetUserReviewsQuery");
const _addReviewCommand = require("../../../../../core/applicationServices/Review/requests/command/AddReviewCommand");
const _updateReviewCommand = require("../../../../../core/applicationServices/Review/requests/command/UpdateReviewCommand");
const _updateReviewCommandBody = require("../../requests/command/UpdateReviewCommandBody");
const _deleteReviewCommandBody = require("../../requests/command/DeleteReviewCommandBody");
const _deleteReviewCommand = require("../../../../../core/applicationServices/Review/requests/command/DeleteReviewCommand");
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
let CoffeeController = class CoffeeController extends _inversifyExpressUtils.BaseHttpController {
    constructor(coffeeService, reviewService){
        super();
        this.coffeeService = coffeeService;
        this.reviewService = reviewService;
    }
    async GetAll() {
        const result = await this.coffeeService.findAll();
        return this.json(result, _httpStatusCodes.OK);
    }
    async get({ coffeeId  }) {
        const result = await this.coffeeService.findOne(new _findCoffeeRepositoryQuery.FindOneCoffeeRepositoryQuery(coffeeId));
        return this.json(result, _httpStatusCodes.OK);
    }
    async add({ files  }, { brand , name , type , description , burntLvl , reflink , CoffeeStatus  }) {
        if (!files || !('image' in files)) {
            throw new Error('No image file found');
        }
        const { image  } = files;
        const coffeeCommand = new _addCoffeeCommand.CreateCoffeeCommand(brand, name, type, image, description, burntLvl, reflink || '', CoffeeStatus);
        const result = await this.coffeeService.create(coffeeCommand);
        return this.json(result, _httpStatusCodes.OK);
    }
    async update(coffeeId, { coffee  }) {
        const result = await this.coffeeService.update(new _updateCoffeeCommand.UpdateCoffeeCommand(coffee, coffeeId));
        return this.json(result, _httpStatusCodes.OK);
    }
    async delete({ id  }) {
        const result = await this.coffeeService.delete(new _deleteCoffeeCommand.DeleteCoffeeCommand(id));
        return this.json(result, _httpStatusCodes.OK);
    }
    async GetUserReviews({ userId  }) {
        const result = await this.reviewService.getAll(new _getUserReviewsQuery.GetUserReviewsQuery(userId));
        return this.json(result, _httpStatusCodes.OK);
    }
    async addReview(coffeeId, { rating , look , smell , taste , userId  }) {
        const result = await this.reviewService.add(new _addReviewCommand.AddReviewCommand(userId, coffeeId, rating, look, smell, taste));
        return this.json(result, _httpStatusCodes.OK);
    }
    async updateReview(reviewId, { review  }) {
        const result = this.reviewService.update(new _updateReviewCommand.UpdateReviewCommand(review, reviewId));
        return this.json(result, _httpStatusCodes.OK);
    }
    async deleteReview({ reviewId  }) {
        const result = this.reviewService.delete(new _deleteReviewCommand.DeleteReviewCommand(reviewId));
        return this.json(result, _httpStatusCodes.OK);
    }
};
__decorate([
    (0, _inversifyExpressUtils.httpGet)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [])
], CoffeeController.prototype, "GetAll", null);
__decorate([
    (0, _inversifyExpressUtils.httpGet)('/:id'),
    __param(0, (0, _inversifyExpressUtils.requestParam)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _findOneCoffeeRepositoryQueryBody.FindOneCoffeeRepositoryQueryBody === "undefined" ? Object : _findOneCoffeeRepositoryQueryBody.FindOneCoffeeRepositoryQueryBody
    ])
], CoffeeController.prototype, "get", null);
__decorate([
    (0, _inversifyExpressUtils.httpPost)('/create', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.request)()),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _express.Request === "undefined" ? Object : _express.Request,
        typeof _createCoffeeCommandBody.CreateCoffeeCommandBody === "undefined" ? Object : _createCoffeeCommandBody.CreateCoffeeCommandBody
    ])
], CoffeeController.prototype, "add", null);
__decorate([
    (0, _inversifyExpressUtils.httpPut)('/:id/update', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)('id')),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String,
        typeof _updateCoffeeCommandBody.UpdateCoffeeCommandBody === "undefined" ? Object : _updateCoffeeCommandBody.UpdateCoffeeCommandBody
    ])
], CoffeeController.prototype, "update", null);
__decorate([
    (0, _inversifyExpressUtils.httpDelete)('/:id', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _deleteCoffeeCommandBody.DeleteCoffeeCommandBody === "undefined" ? Object : _deleteCoffeeCommandBody.DeleteCoffeeCommandBody
    ])
], CoffeeController.prototype, "delete", null);
__decorate([
    (0, _inversifyExpressUtils.httpGet)('/:userId/reviews/', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _getUserReviewsQueryBody.GetUserReviewsQueryBody === "undefined" ? Object : _getUserReviewsQueryBody.GetUserReviewsQueryBody
    ])
], CoffeeController.prototype, "GetUserReviews", null);
__decorate([
    (0, _inversifyExpressUtils.httpPost)('/:coffeeId/reviews/add', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)('coffeeId')),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String,
        typeof _addReviewCommandBody.AddReviewCommandBody === "undefined" ? Object : _addReviewCommandBody.AddReviewCommandBody
    ])
], CoffeeController.prototype, "addReview", null);
__decorate([
    (0, _inversifyExpressUtils.httpPut)('/:coffeeId/reviews/:reviewId/update', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)('reviewId')),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String,
        typeof _updateReviewCommandBody.UpdateReviewCommandBody === "undefined" ? Object : _updateReviewCommandBody.UpdateReviewCommandBody
    ])
], CoffeeController.prototype, "updateReview", null);
__decorate([
    (0, _inversifyExpressUtils.httpDelete)('/:id/reviews/delete', (0, _isAuthenticated.isAuthenticated)({
        role: _userRole.USER_ROLE.MEMBER
    })),
    __param(0, (0, _inversifyExpressUtils.requestParam)('reviewId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _deleteReviewCommandBody.DeleteReviewCommandBody === "undefined" ? Object : _deleteReviewCommandBody.DeleteReviewCommandBody
    ])
], CoffeeController.prototype, "deleteReview", null);
CoffeeController = __decorate([
    (0, _inversifyExpressUtils.controller)('/v1/coffee'),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE)),
    __param(1, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _icoffeeService.ICoffeeService === "undefined" ? Object : _icoffeeService.ICoffeeService,
        typeof _ireviewService.IReviewService === "undefined" ? Object : _ireviewService.IReviewService
    ])
], CoffeeController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9wb3J0YWwvQ29mZmVlL3Jlc3QvdjEvQ29mZmVlQ29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IHtcbiAgQmFzZUh0dHBDb250cm9sbGVyLFxuICBjb250cm9sbGVyLFxuICBodHRwRGVsZXRlLFxuICBodHRwR2V0LFxuICBodHRwUG9zdCxcbiAgaHR0cFB1dCxcbiAgcmVxdWVzdCxcbiAgcmVxdWVzdEJvZHksXG4gIHJlcXVlc3RQYXJhbSxcbiAgcmVzdWx0cyxcbn0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnO1xuaW1wb3J0IHsgT0sgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHsgVXBsb2FkZWRGaWxlIH0gZnJvbSAnZXhwcmVzcy1maWxldXBsb2FkJztcblxuaW1wb3J0IHsgRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMgfSBmcm9tICdjb3JlL0NvcmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IElDb2ZmZWVTZXJ2aWNlIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0NvZmZlZS9JQ29mZmVlU2VydmljZSc7XG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC9taWRkbGV3YXJlcy9pc0F1dGhlbnRpY2F0ZWQnO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnY29yZS9kb21haW4vVXNlci9Vc2VyUm9sZSc7XG5pbXBvcnQgeyBDcmVhdGVDb2ZmZWVDb21tYW5kQm9keSB9IGZyb20gJ3VpL3BvcnRhbC9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9DcmVhdGVDb2ZmZWVDb21tYW5kQm9keSc7XG5pbXBvcnQgeyBEZWxldGVDb2ZmZWVDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0RlbGV0ZUNvZmZlZUNvbW1hbmQnO1xuaW1wb3J0IHsgRGVsZXRlQ29mZmVlQ29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvRGVsZXRlQ29mZmVlQ29tbWFuZEJvZHknO1xuaW1wb3J0IHsgQWRkUmV2aWV3Q29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvQWRkUmV2aWV3Q29tbWFuZEJvZHknO1xuaW1wb3J0IHsgRmluZE9uZUNvZmZlZVJlcG9zaXRvcnlRdWVyeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL1VuaXRPZldvcmsvcXVlcnkvRmluZENvZmZlZVJlcG9zaXRvcnlRdWVyeSc7XG5pbXBvcnQgeyBDcmVhdGVDb2ZmZWVDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0FkZENvZmZlZUNvbW1hbmQnO1xuaW1wb3J0IHsgVXBkYXRlQ29mZmVlQ29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9VcGRhdGVDb2ZmZWVDb21tYW5kJztcbmltcG9ydCB7IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnlCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9xdWVyeS9GaW5kT25lQ29mZmVlUmVwb3NpdG9yeVF1ZXJ5Qm9keSc7XG5pbXBvcnQgeyBVcGRhdGVDb2ZmZWVDb21tYW5kQm9keSB9IGZyb20gJ3VpL3BvcnRhbC9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9VcGRhdGVDb2ZmZWVDb21tYW5kQm9keSc7XG5pbXBvcnQgeyBHZXRVc2VyUmV2aWV3c1F1ZXJ5Qm9keSB9IGZyb20gJ3VpL3BvcnRhbC9Db2ZmZWUvcmVxdWVzdHMvcXVlcnkvR2V0VXNlclJldmlld3NRdWVyeUJvZHknO1xuaW1wb3J0IHsgSVJldmlld1NlcnZpY2UgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvUmV2aWV3L0lSZXZpZXdTZXJ2aWNlJztcbmltcG9ydCB7IEdldFVzZXJSZXZpZXdzUXVlcnkgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL3F1ZXJ5L0dldFVzZXJSZXZpZXdzUXVlcnknO1xuaW1wb3J0IHsgQWRkUmV2aWV3Q29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9SZXZpZXcvcmVxdWVzdHMvY29tbWFuZC9BZGRSZXZpZXdDb21tYW5kJztcbmltcG9ydCB7IFVwZGF0ZVJldmlld0NvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlUmV2aWV3Q29tbWFuZCc7XG5pbXBvcnQgeyBVcGRhdGVSZXZpZXdDb21tYW5kQm9keSB9IGZyb20gJ3VpL3BvcnRhbC9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9VcGRhdGVSZXZpZXdDb21tYW5kQm9keSc7XG5pbXBvcnQgeyBEZWxldGVSZXZpZXdDb21tYW5kQm9keSB9IGZyb20gJ3VpL3BvcnRhbC9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9EZWxldGVSZXZpZXdDb21tYW5kQm9keSc7XG5pbXBvcnQgeyBEZWxldGVSZXZpZXdDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9jb21tYW5kL0RlbGV0ZVJldmlld0NvbW1hbmQnO1xuXG5AY29udHJvbGxlcignL3YxL2NvZmZlZScpXG5leHBvcnQgY2xhc3MgQ29mZmVlQ29udHJvbGxlciBleHRlbmRzIEJhc2VIdHRwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMuQ09GRkVFX1NFUlZJQ0UpXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb2ZmZWVTZXJ2aWNlOiBJQ29mZmVlU2VydmljZSxcbiAgICBAaW5qZWN0KERPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTLlJFVklFV19TRVJWSUNFKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmV2aWV3U2VydmljZTogSVJldmlld1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIEBodHRwR2V0KCcvJylcbiAgYXN5bmMgR2V0QWxsKCk6IFByb21pc2U8cmVzdWx0cy5Kc29uUmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb2ZmZWVTZXJ2aWNlLmZpbmRBbGwoKTtcblxuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cEdldCgnLzppZCcpXG4gIGFzeW5jIGdldChcbiAgICBAcmVxdWVzdFBhcmFtKCdpZCcpIHsgY29mZmVlSWQgfTogRmluZE9uZUNvZmZlZVJlcG9zaXRvcnlRdWVyeUJvZHlcbiAgKTogUHJvbWlzZTxyZXN1bHRzLkpzb25SZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvZmZlZVNlcnZpY2UuZmluZE9uZShcbiAgICAgIG5ldyBGaW5kT25lQ29mZmVlUmVwb3NpdG9yeVF1ZXJ5KGNvZmZlZUlkKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwUG9zdCgnL2NyZWF0ZScsIGlzQXV0aGVudGljYXRlZCh7IHJvbGU6IFVTRVJfUk9MRS5NRU1CRVIgfSkpXG4gIGFzeW5jIGFkZChcbiAgICBAcmVxdWVzdCgpIHsgZmlsZXMgfTogUmVxdWVzdCxcbiAgICBAcmVxdWVzdEJvZHkoKVxuICAgIHtcbiAgICAgIGJyYW5kLFxuICAgICAgbmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGJ1cm50THZsLFxuICAgICAgcmVmbGluayxcbiAgICAgIENvZmZlZVN0YXR1cyxcbiAgICB9OiBDcmVhdGVDb2ZmZWVDb21tYW5kQm9keVxuICApOiBQcm9taXNlPHJlc3VsdHMuSnNvblJlc3VsdD4ge1xuICAgIGlmICghZmlsZXMgfHwgISgnaW1hZ2UnIGluIGZpbGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbWFnZSBmaWxlIGZvdW5kJyk7XG4gICAgfVxuICAgIGNvbnN0IHsgaW1hZ2UgfSA9IGZpbGVzO1xuXG4gICAgY29uc3QgY29mZmVlQ29tbWFuZCA9IG5ldyBDcmVhdGVDb2ZmZWVDb21tYW5kKFxuICAgICAgYnJhbmQsXG4gICAgICBuYW1lLFxuICAgICAgdHlwZSxcbiAgICAgIGltYWdlIGFzIFVwbG9hZGVkRmlsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYnVybnRMdmwsXG4gICAgICByZWZsaW5rIHx8ICcnLFxuICAgICAgQ29mZmVlU3RhdHVzXG4gICAgKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29mZmVlU2VydmljZS5jcmVhdGUoY29mZmVlQ29tbWFuZCk7XG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwUHV0KCcvOmlkL3VwZGF0ZScsIGlzQXV0aGVudGljYXRlZCh7IHJvbGU6IFVTRVJfUk9MRS5NRU1CRVIgfSkpXG4gIGFzeW5jIHVwZGF0ZShcbiAgICBAcmVxdWVzdFBhcmFtKCdpZCcpIGNvZmZlZUlkOiBzdHJpbmcsXG4gICAgQHJlcXVlc3RCb2R5KCkgeyBjb2ZmZWUgfTogVXBkYXRlQ29mZmVlQ29tbWFuZEJvZHlcbiAgKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb2ZmZWVTZXJ2aWNlLnVwZGF0ZShcbiAgICAgIG5ldyBVcGRhdGVDb2ZmZWVDb21tYW5kKGNvZmZlZSwgY29mZmVlSWQpXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cERlbGV0ZSgnLzppZCcsIGlzQXV0aGVudGljYXRlZCh7IHJvbGU6IFVTRVJfUk9MRS5NRU1CRVIgfSkpXG4gIGFzeW5jIGRlbGV0ZShcbiAgICBAcmVxdWVzdFBhcmFtKCkgeyBpZCB9OiBEZWxldGVDb2ZmZWVDb21tYW5kQm9keVxuICApOiBQcm9taXNlPHJlc3VsdHMuSnNvblJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29mZmVlU2VydmljZS5kZWxldGUobmV3IERlbGV0ZUNvZmZlZUNvbW1hbmQoaWQpKTtcblxuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cEdldCgnLzp1c2VySWQvcmV2aWV3cy8nLCBpc0F1dGhlbnRpY2F0ZWQoeyByb2xlOiBVU0VSX1JPTEUuTUVNQkVSIH0pKVxuICBhc3luYyBHZXRVc2VyUmV2aWV3cyhAcmVxdWVzdFBhcmFtKCkgeyB1c2VySWQgfTogR2V0VXNlclJldmlld3NRdWVyeUJvZHkpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJldmlld1NlcnZpY2UuZ2V0QWxsKFxuICAgICAgbmV3IEdldFVzZXJSZXZpZXdzUXVlcnkodXNlcklkKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwUG9zdChcbiAgICAnLzpjb2ZmZWVJZC9yZXZpZXdzL2FkZCcsXG4gICAgaXNBdXRoZW50aWNhdGVkKHsgcm9sZTogVVNFUl9ST0xFLk1FTUJFUiB9KVxuICApXG4gIGFzeW5jIGFkZFJldmlldyhcbiAgICBAcmVxdWVzdFBhcmFtKCdjb2ZmZWVJZCcpIGNvZmZlZUlkOiBzdHJpbmcsXG4gICAgQHJlcXVlc3RCb2R5KClcbiAgICB7IHJhdGluZywgbG9vaywgc21lbGwsIHRhc3RlLCB1c2VySWQgfTogQWRkUmV2aWV3Q29tbWFuZEJvZHlcbiAgKTogUHJvbWlzZTxyZXN1bHRzLkpzb25SZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJldmlld1NlcnZpY2UuYWRkKFxuICAgICAgbmV3IEFkZFJldmlld0NvbW1hbmQodXNlcklkLCBjb2ZmZWVJZCwgcmF0aW5nLCBsb29rLCBzbWVsbCwgdGFzdGUpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgQGh0dHBQdXQoXG4gICAgJy86Y29mZmVlSWQvcmV2aWV3cy86cmV2aWV3SWQvdXBkYXRlJyxcbiAgICBpc0F1dGhlbnRpY2F0ZWQoeyByb2xlOiBVU0VSX1JPTEUuTUVNQkVSIH0pXG4gIClcbiAgYXN5bmMgdXBkYXRlUmV2aWV3KFxuICAgIEByZXF1ZXN0UGFyYW0oJ3Jldmlld0lkJykgcmV2aWV3SWQ6IHN0cmluZyxcbiAgICBAcmVxdWVzdEJvZHkoKSB7IHJldmlldyB9OiBVcGRhdGVSZXZpZXdDb21tYW5kQm9keVxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJldmlld1NlcnZpY2UudXBkYXRlKFxuICAgICAgbmV3IFVwZGF0ZVJldmlld0NvbW1hbmQocmV2aWV3LCByZXZpZXdJZClcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwRGVsZXRlKFxuICAgICcvOmlkL3Jldmlld3MvZGVsZXRlJyxcbiAgICBpc0F1dGhlbnRpY2F0ZWQoeyByb2xlOiBVU0VSX1JPTEUuTUVNQkVSIH0pXG4gIClcbiAgYXN5bmMgZGVsZXRlUmV2aWV3KFxuICAgIEByZXF1ZXN0UGFyYW0oJ3Jldmlld0lkJykgeyByZXZpZXdJZCB9OiBEZWxldGVSZXZpZXdDb21tYW5kQm9keVxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJldmlld1NlcnZpY2UuZGVsZXRlKG5ldyBEZWxldGVSZXZpZXdDb21tYW5kKHJldmlld0lkKSk7XG5cbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgLy8gQGh0dHBQb3N0KCcvc2VhcmNoJylcbiAgLy8gYXN5bmMgc2VhcmNoKEByZXF1ZXN0UGFyYW0oKSB7IHNvcnRCeSwgc2tpcCwgdGFrZSB9OiBTZWFyY2hRdWVyeUJvZHkpIHtcbiAgLy8gICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgdGhpcy5Db2ZmZWVTZXJ2aWNlLnNvcnRBbmRQYWdpbmF0ZShcbiAgLy8gICAgIG5ldyBTZWFyY2hRdWVyeShzb3J0QnksIHNraXAsIHRha2UpXG4gIC8vICAgKTtcbiAgLy8gfVxufVxuIl0sIm5hbWVzIjpbIkNvZmZlZUNvbnRyb2xsZXIiLCJCYXNlSHR0cENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImNvZmZlZVNlcnZpY2UiLCJyZXZpZXdTZXJ2aWNlIiwiR2V0QWxsIiwicmVzdWx0IiwiZmluZEFsbCIsImpzb24iLCJPSyIsImdldCIsImNvZmZlZUlkIiwiZmluZE9uZSIsIkZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkiLCJhZGQiLCJmaWxlcyIsImJyYW5kIiwibmFtZSIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImJ1cm50THZsIiwicmVmbGluayIsIkNvZmZlZVN0YXR1cyIsIkVycm9yIiwiaW1hZ2UiLCJjb2ZmZWVDb21tYW5kIiwiQ3JlYXRlQ29mZmVlQ29tbWFuZCIsImNyZWF0ZSIsInVwZGF0ZSIsImNvZmZlZSIsIlVwZGF0ZUNvZmZlZUNvbW1hbmQiLCJkZWxldGUiLCJpZCIsIkRlbGV0ZUNvZmZlZUNvbW1hbmQiLCJHZXRVc2VyUmV2aWV3cyIsInVzZXJJZCIsImdldEFsbCIsIkdldFVzZXJSZXZpZXdzUXVlcnkiLCJhZGRSZXZpZXciLCJyYXRpbmciLCJsb29rIiwic21lbGwiLCJ0YXN0ZSIsIkFkZFJldmlld0NvbW1hbmQiLCJ1cGRhdGVSZXZpZXciLCJyZXZpZXdJZCIsInJldmlldyIsIlVwZGF0ZVJldmlld0NvbW1hbmQiLCJkZWxldGVSZXZpZXciLCJEZWxldGVSZXZpZXdDb21tYW5kIiwiaHR0cEdldCIsInJlcXVlc3RQYXJhbSIsImh0dHBQb3N0IiwiaXNBdXRoZW50aWNhdGVkIiwicm9sZSIsIlVTRVJfUk9MRSIsIk1FTUJFUiIsInJlcXVlc3QiLCJyZXF1ZXN0Qm9keSIsImh0dHBQdXQiLCJodHRwRGVsZXRlIiwiY29udHJvbGxlciIsImluamVjdCIsIkRPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTIiwiQ09GRkVFX1NFUlZJQ0UiLCJSRVZJRVdfU0VSVklDRSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEwQ2FBOzthQUFBQTs7MkJBMUNVO3VDQVloQjtpQ0FDWTt5QkFFSzttQ0FJK0I7Z0NBQ3hCO2lDQUNDOzBCQUNOO3lDQUNjO3FDQUNKO3lDQUNJO3NDQUNIOzJDQUNRO2tDQUNUO3FDQUNBO2tEQUNhO3lDQUNUO3lDQUNBO2dDQUNUO3FDQUNLO2tDQUNIO3FDQUNHO3lDQUNJO3lDQUNBO3FDQUNKOzs7Ozs7Ozs7Ozs7Ozs7SUFHdkJBLG1CQUFOLCtCQUErQkMseUNBQWtCO0lBQ3REQyxZQUVtQkMsZUFFQUMsY0FDakI7UUFDQSxLQUFLOzZCQUpZRDs2QkFFQUM7SUFHbkI7SUFFQSxNQUNNQyxTQUFzQztRQUMxQyxNQUFNQyxTQUFTLE1BQU0sSUFBSSxDQUFDSCxhQUFhLENBQUNJLE9BQU87UUFFL0MsT0FBTyxJQUFJLENBQUNDLElBQUksQ0FBQ0YsUUFBUUcsbUJBQUU7SUFDN0I7SUFFQSxNQUNNQyxJQUNKLEFBQW9CLEVBQUVDLFNBQVEsRUFBb0MsRUFDckM7UUFDN0IsTUFBTUwsU0FBUyxNQUFNLElBQUksQ0FBQ0gsYUFBYSxDQUFDUyxPQUFPLENBQzdDLElBQUlDLHVEQUE0QixDQUFDRjtRQUVuQyxPQUFPLElBQUksQ0FBQ0gsSUFBSSxDQUFDRixRQUFRRyxtQkFBRTtJQUM3QjtJQUVBLE1BQ01LLElBQ0osQUFBVyxFQUFFQyxNQUFLLEVBQVcsRUFDN0IsQUFDQSxFQUNFQyxNQUFLLEVBQ0xDLEtBQUksRUFDSkMsS0FBSSxFQUNKQyxZQUFXLEVBQ1hD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