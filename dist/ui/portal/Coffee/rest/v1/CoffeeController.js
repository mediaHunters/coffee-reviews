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
const _multer = require("../../../../common/config/application/express/auth/middlewares/multer");
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
    async add(data, { brand , name , type , description , burntLvl , reflink , CoffeeStatus  }) {
        const coffeeCommand = new _addCoffeeCommand.CreateCoffeeCommand(brand, name, type, data.file, description, burntLvl, reflink || '', CoffeeStatus);
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
    (0, _inversifyExpressUtils.httpPost)('/create', (0, _isAuthenticated.isAuthenticated)(), (0, _multer.uploadSingleImage)('image')),
    __param(0, (0, _inversifyExpressUtils.request)()),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _express.Request === "undefined" ? Object : _express.Request,
        typeof _createCoffeeCommandBody.CreateCoffeeCommandBody === "undefined" ? Object : _createCoffeeCommandBody.CreateCoffeeCommandBody
    ])
], CoffeeController.prototype, "add", null);
__decorate([
    (0, _inversifyExpressUtils.httpPut)('/:id/update', (0, _isAuthenticated.isAuthenticated)()),
    __param(0, (0, _inversifyExpressUtils.requestParam)('id')),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String,
        typeof _updateCoffeeCommandBody.UpdateCoffeeCommandBody === "undefined" ? Object : _updateCoffeeCommandBody.UpdateCoffeeCommandBody
    ])
], CoffeeController.prototype, "update", null);
__decorate([
    (0, _inversifyExpressUtils.httpDelete)('/:id', (0, _isAuthenticated.isAuthenticated)()),
    __param(0, (0, _inversifyExpressUtils.requestParam)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _deleteCoffeeCommandBody.DeleteCoffeeCommandBody === "undefined" ? Object : _deleteCoffeeCommandBody.DeleteCoffeeCommandBody
    ])
], CoffeeController.prototype, "delete", null);
__decorate([
    (0, _inversifyExpressUtils.httpGet)('/:userId/reviews/', (0, _isAuthenticated.isAuthenticated)()),
    __param(0, (0, _inversifyExpressUtils.requestParam)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _getUserReviewsQueryBody.GetUserReviewsQueryBody === "undefined" ? Object : _getUserReviewsQueryBody.GetUserReviewsQueryBody
    ])
], CoffeeController.prototype, "GetUserReviews", null);
__decorate([
    (0, _inversifyExpressUtils.httpPost)('/:coffeeId/reviews/add', (0, _isAuthenticated.isAuthenticated)()),
    __param(0, (0, _inversifyExpressUtils.requestParam)('coffeeId')),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String,
        typeof _addReviewCommandBody.AddReviewCommandBody === "undefined" ? Object : _addReviewCommandBody.AddReviewCommandBody
    ])
], CoffeeController.prototype, "addReview", null);
__decorate([
    (0, _inversifyExpressUtils.httpPut)('/:coffeeId/reviews/:reviewId/update', (0, _isAuthenticated.isAuthenticated)()),
    __param(0, (0, _inversifyExpressUtils.requestParam)('reviewId')),
    __param(1, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String,
        typeof _updateReviewCommandBody.UpdateReviewCommandBody === "undefined" ? Object : _updateReviewCommandBody.UpdateReviewCommandBody
    ])
], CoffeeController.prototype, "updateReview", null);
__decorate([
    (0, _inversifyExpressUtils.httpDelete)('/:id/reviews/delete', (0, _isAuthenticated.isAuthenticated)()),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9wb3J0YWwvQ29mZmVlL3Jlc3QvdjEvQ29mZmVlQ29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IHtcbiAgQmFzZUh0dHBDb250cm9sbGVyLFxuICBjb250cm9sbGVyLFxuICBodHRwRGVsZXRlLFxuICBodHRwR2V0LFxuICBodHRwUG9zdCxcbiAgaHR0cFB1dCxcbiAgcmVxdWVzdCxcbiAgcmVxdWVzdEJvZHksXG4gIHJlcXVlc3RQYXJhbSxcbiAgcmVzdWx0cyxcbn0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnO1xuaW1wb3J0IHsgT0sgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCB7IERPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTIH0gZnJvbSAnY29yZS9Db3JlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBJQ29mZmVlU2VydmljZSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Db2ZmZWUvSUNvZmZlZVNlcnZpY2UnO1xuaW1wb3J0IHsgaXNBdXRoZW50aWNhdGVkIH0gZnJvbSAndWkvY29tbW9uL2NvbmZpZy9hcHBsaWNhdGlvbi9leHByZXNzL2F1dGgvbWlkZGxld2FyZXMvaXNBdXRoZW50aWNhdGVkJztcbmltcG9ydCB7IENyZWF0ZUNvZmZlZUNvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0NyZWF0ZUNvZmZlZUNvbW1hbmRCb2R5JztcbmltcG9ydCB7IERlbGV0ZUNvZmZlZUNvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvRGVsZXRlQ29mZmVlQ29tbWFuZCc7XG5pbXBvcnQgeyBEZWxldGVDb2ZmZWVDb21tYW5kQm9keSB9IGZyb20gJ3VpL3BvcnRhbC9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9EZWxldGVDb2ZmZWVDb21tYW5kQm9keSc7XG5pbXBvcnQgeyBBZGRSZXZpZXdDb21tYW5kQm9keSB9IGZyb20gJ3VpL3BvcnRhbC9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9BZGRSZXZpZXdDb21tYW5kQm9keSc7XG5pbXBvcnQgeyBGaW5kT25lQ29mZmVlUmVwb3NpdG9yeVF1ZXJ5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvVW5pdE9mV29yay9xdWVyeS9GaW5kQ29mZmVlUmVwb3NpdG9yeVF1ZXJ5JztcbmltcG9ydCB7IENyZWF0ZUNvZmZlZUNvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvQWRkQ29mZmVlQ29tbWFuZCc7XG5pbXBvcnQgeyBVcGRhdGVDb2ZmZWVDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL1VwZGF0ZUNvZmZlZUNvbW1hbmQnO1xuaW1wb3J0IHsgRmluZE9uZUNvZmZlZVJlcG9zaXRvcnlRdWVyeUJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL3F1ZXJ5L0ZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnlCb2R5JztcbmltcG9ydCB7IFVwZGF0ZUNvZmZlZUNvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL1VwZGF0ZUNvZmZlZUNvbW1hbmRCb2R5JztcbmltcG9ydCB7IEdldFVzZXJSZXZpZXdzUXVlcnlCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9xdWVyeS9HZXRVc2VyUmV2aWV3c1F1ZXJ5Qm9keSc7XG5pbXBvcnQgeyBJUmV2aWV3U2VydmljZSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9SZXZpZXcvSVJldmlld1NlcnZpY2UnO1xuaW1wb3J0IHsgR2V0VXNlclJldmlld3NRdWVyeSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9SZXZpZXcvcmVxdWVzdHMvcXVlcnkvR2V0VXNlclJldmlld3NRdWVyeSc7XG5pbXBvcnQgeyBBZGRSZXZpZXdDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9jb21tYW5kL0FkZFJldmlld0NvbW1hbmQnO1xuaW1wb3J0IHsgVXBkYXRlUmV2aWV3Q29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9SZXZpZXcvcmVxdWVzdHMvY29tbWFuZC9VcGRhdGVSZXZpZXdDb21tYW5kJztcbmltcG9ydCB7IFVwZGF0ZVJldmlld0NvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL1VwZGF0ZVJldmlld0NvbW1hbmRCb2R5JztcbmltcG9ydCB7IERlbGV0ZVJldmlld0NvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0RlbGV0ZVJldmlld0NvbW1hbmRCb2R5JztcbmltcG9ydCB7IERlbGV0ZVJldmlld0NvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL2NvbW1hbmQvRGVsZXRlUmV2aWV3Q29tbWFuZCc7XG5pbXBvcnQgeyB1cGxvYWRTaW5nbGVJbWFnZSB9IGZyb20gJ3VpL2NvbW1vbi9jb25maWcvYXBwbGljYXRpb24vZXhwcmVzcy9hdXRoL21pZGRsZXdhcmVzL211bHRlcic7XG5cbkBjb250cm9sbGVyKCcvdjEvY29mZmVlJylcbmV4cG9ydCBjbGFzcyBDb2ZmZWVDb250cm9sbGVyIGV4dGVuZHMgQmFzZUh0dHBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChET01BSU5fQVBQTElDQVRJT05fU0VSVklDRV9JREVOVElGSUVSUy5DT0ZGRUVfU0VSVklDRSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvZmZlZVNlcnZpY2U6IElDb2ZmZWVTZXJ2aWNlLFxuICAgIEBpbmplY3QoRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMuUkVWSUVXX1NFUlZJQ0UpXG4gICAgcHJpdmF0ZSByZWFkb25seSByZXZpZXdTZXJ2aWNlOiBJUmV2aWV3U2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgQGh0dHBHZXQoJy8nKVxuICBhc3luYyBHZXRBbGwoKTogUHJvbWlzZTxyZXN1bHRzLkpzb25SZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvZmZlZVNlcnZpY2UuZmluZEFsbCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwR2V0KCcvOmlkJylcbiAgYXN5bmMgZ2V0KFxuICAgIEByZXF1ZXN0UGFyYW0oJ2lkJykgeyBjb2ZmZWVJZCB9OiBGaW5kT25lQ29mZmVlUmVwb3NpdG9yeVF1ZXJ5Qm9keVxuICApOiBQcm9taXNlPHJlc3VsdHMuSnNvblJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29mZmVlU2VydmljZS5maW5kT25lKFxuICAgICAgbmV3IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkoY29mZmVlSWQpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgQGh0dHBQb3N0KCcvY3JlYXRlJywgaXNBdXRoZW50aWNhdGVkKCksIHVwbG9hZFNpbmdsZUltYWdlKCdpbWFnZScpKVxuICBhc3luYyBhZGQoXG4gICAgQHJlcXVlc3QoKSBkYXRhOiBSZXF1ZXN0LFxuICAgIEByZXF1ZXN0Qm9keSgpXG4gICAge1xuICAgICAgYnJhbmQsXG4gICAgICBuYW1lLFxuICAgICAgdHlwZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYnVybnRMdmwsXG4gICAgICByZWZsaW5rLFxuICAgICAgQ29mZmVlU3RhdHVzLFxuICAgIH06IENyZWF0ZUNvZmZlZUNvbW1hbmRCb2R5XG4gICk6IFByb21pc2U8cmVzdWx0cy5Kc29uUmVzdWx0PiB7XG4gICAgY29uc3QgY29mZmVlQ29tbWFuZCA9IG5ldyBDcmVhdGVDb2ZmZWVDb21tYW5kKFxuICAgICAgYnJhbmQsXG4gICAgICBuYW1lLFxuICAgICAgdHlwZSxcbiAgICAgIGRhdGEuZmlsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYnVybnRMdmwsXG4gICAgICByZWZsaW5rIHx8ICcnLFxuICAgICAgQ29mZmVlU3RhdHVzXG4gICAgKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29mZmVlU2VydmljZS5jcmVhdGUoY29mZmVlQ29tbWFuZCk7XG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwUHV0KCcvOmlkL3VwZGF0ZScsIGlzQXV0aGVudGljYXRlZCgpKVxuICBhc3luYyB1cGRhdGUoXG4gICAgQHJlcXVlc3RQYXJhbSgnaWQnKSBjb2ZmZWVJZDogc3RyaW5nLFxuICAgIEByZXF1ZXN0Qm9keSgpIHsgY29mZmVlIH06IFVwZGF0ZUNvZmZlZUNvbW1hbmRCb2R5XG4gICkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29mZmVlU2VydmljZS51cGRhdGUoXG4gICAgICBuZXcgVXBkYXRlQ29mZmVlQ29tbWFuZChjb2ZmZWUsIGNvZmZlZUlkKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgQGh0dHBEZWxldGUoJy86aWQnLCBpc0F1dGhlbnRpY2F0ZWQoKSlcbiAgYXN5bmMgZGVsZXRlKFxuICAgIEByZXF1ZXN0UGFyYW0oKSB7IGlkIH06IERlbGV0ZUNvZmZlZUNvbW1hbmRCb2R5XG4gICk6IFByb21pc2U8cmVzdWx0cy5Kc29uUmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb2ZmZWVTZXJ2aWNlLmRlbGV0ZShuZXcgRGVsZXRlQ29mZmVlQ29tbWFuZChpZCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwR2V0KCcvOnVzZXJJZC9yZXZpZXdzLycsIGlzQXV0aGVudGljYXRlZCgpKVxuICBhc3luYyBHZXRVc2VyUmV2aWV3cyhAcmVxdWVzdFBhcmFtKCkgeyB1c2VySWQgfTogR2V0VXNlclJldmlld3NRdWVyeUJvZHkpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJldmlld1NlcnZpY2UuZ2V0QWxsKFxuICAgICAgbmV3IEdldFVzZXJSZXZpZXdzUXVlcnkodXNlcklkKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwUG9zdCgnLzpjb2ZmZWVJZC9yZXZpZXdzL2FkZCcsIGlzQXV0aGVudGljYXRlZCgpKVxuICBhc3luYyBhZGRSZXZpZXcoXG4gICAgQHJlcXVlc3RQYXJhbSgnY29mZmVlSWQnKSBjb2ZmZWVJZDogc3RyaW5nLFxuICAgIEByZXF1ZXN0Qm9keSgpXG4gICAgeyByYXRpbmcsIGxvb2ssIHNtZWxsLCB0YXN0ZSwgdXNlcklkIH06IEFkZFJldmlld0NvbW1hbmRCb2R5XG4gICk6IFByb21pc2U8cmVzdWx0cy5Kc29uUmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXZpZXdTZXJ2aWNlLmFkZChcbiAgICAgIG5ldyBBZGRSZXZpZXdDb21tYW5kKHVzZXJJZCwgY29mZmVlSWQsIHJhdGluZywgbG9vaywgc21lbGwsIHRhc3RlKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwUHV0KCcvOmNvZmZlZUlkL3Jldmlld3MvOnJldmlld0lkL3VwZGF0ZScsIGlzQXV0aGVudGljYXRlZCgpKVxuICBhc3luYyB1cGRhdGVSZXZpZXcoXG4gICAgQHJlcXVlc3RQYXJhbSgncmV2aWV3SWQnKSByZXZpZXdJZDogc3RyaW5nLFxuICAgIEByZXF1ZXN0Qm9keSgpIHsgcmV2aWV3IH06IFVwZGF0ZVJldmlld0NvbW1hbmRCb2R5XG4gICkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmV2aWV3U2VydmljZS51cGRhdGUoXG4gICAgICBuZXcgVXBkYXRlUmV2aWV3Q29tbWFuZChyZXZpZXcsIHJldmlld0lkKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgQGh0dHBEZWxldGUoJy86aWQvcmV2aWV3cy9kZWxldGUnLCBpc0F1dGhlbnRpY2F0ZWQoKSlcbiAgYXN5bmMgZGVsZXRlUmV2aWV3KFxuICAgIEByZXF1ZXN0UGFyYW0oJ3Jldmlld0lkJykgeyByZXZpZXdJZCB9OiBEZWxldGVSZXZpZXdDb21tYW5kQm9keVxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJldmlld1NlcnZpY2UuZGVsZXRlKG5ldyBEZWxldGVSZXZpZXdDb21tYW5kKHJldmlld0lkKSk7XG5cbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgLy8gQGh0dHBQb3N0KCcvc2VhcmNoJylcbiAgLy8gYXN5bmMgc2VhcmNoKEByZXF1ZXN0UGFyYW0oKSB7IHNvcnRCeSwgc2tpcCwgdGFrZSB9OiBTZWFyY2hRdWVyeUJvZHkpIHtcbiAgLy8gICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgdGhpcy5Db2ZmZWVTZXJ2aWNlLnNvcnRBbmRQYWdpbmF0ZShcbiAgLy8gICAgIG5ldyBTZWFyY2hRdWVyeShzb3J0QnksIHNraXAsIHRha2UpXG4gIC8vICAgKTtcbiAgLy8gfVxufVxuIl0sIm5hbWVzIjpbIkNvZmZlZUNvbnRyb2xsZXIiLCJCYXNlSHR0cENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImNvZmZlZVNlcnZpY2UiLCJyZXZpZXdTZXJ2aWNlIiwiR2V0QWxsIiwicmVzdWx0IiwiZmluZEFsbCIsImpzb24iLCJPSyIsImdldCIsImNvZmZlZUlkIiwiZmluZE9uZSIsIkZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkiLCJhZGQiLCJkYXRhIiwiYnJhbmQiLCJuYW1lIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiYnVybnRMdmwiLCJyZWZsaW5rIiwiQ29mZmVlU3RhdHVzIiwiY29mZmVlQ29tbWFuZCIsIkNyZWF0ZUNvZmZlZUNvbW1hbmQiLCJmaWxlIiwiY3JlYXRlIiwidXBkYXRlIiwiY29mZmVlIiwiVXBkYXRlQ29mZmVlQ29tbWFuZCIsImRlbGV0ZSIsImlkIiwiRGVsZXRlQ29mZmVlQ29tbWFuZCIsIkdldFVzZXJSZXZpZXdzIiwidXNlcklkIiwiZ2V0QWxsIiwiR2V0VXNlclJldmlld3NRdWVyeSIsImFkZFJldmlldyIsInJhdGluZyIsImxvb2siLCJzbWVsbCIsInRhc3RlIiwiQWRkUmV2aWV3Q29tbWFuZCIsInVwZGF0ZVJldmlldyIsInJldmlld0lkIiwicmV2aWV3IiwiVXBkYXRlUmV2aWV3Q29tbWFuZCIsImRlbGV0ZVJldmlldyIsIkRlbGV0ZVJldmlld0NvbW1hbmQiLCJodHRwR2V0IiwicmVxdWVzdFBhcmFtIiwiaHR0cFBvc3QiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1cGxvYWRTaW5nbGVJbWFnZSIsInJlcXVlc3QiLCJyZXF1ZXN0Qm9keSIsImh0dHBQdXQiLCJodHRwRGVsZXRlIiwiY29udHJvbGxlciIsImluamVjdCIsIkRPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTIiwiQ09GRkVFX1NFUlZJQ0UiLCJSRVZJRVdfU0VSVklDRSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF1Q2FBOzthQUFBQTs7MkJBdkNVO3VDQVloQjtpQ0FDWTt5QkFDSzttQ0FFK0I7Z0NBQ3hCO2lDQUNDO3lDQUNRO3FDQUNKO3lDQUNJO3NDQUNIOzJDQUNRO2tDQUNUO3FDQUNBO2tEQUNhO3lDQUNUO3lDQUNBO2dDQUNU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