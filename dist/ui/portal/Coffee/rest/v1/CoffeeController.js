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
    async add({ brand , name , type , description , burntLvl , reflink , CoffeeStatus , image  }) {
        // console.log(requestData)
        // if (!requestData.files || !('image' in requestData.files)) {
        //   throw new Error('No image file found');
        // }
        // const { image } = requestData.files;
        console.log(image[0]);
        const coffeeCommand = new _addCoffeeCommand.CreateCoffeeCommand(brand, name, type, image[0], description, burntLvl, reflink || '', CoffeeStatus);
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
    (0, _inversifyExpressUtils.httpPost)('/create', (0, _isAuthenticated.isAuthenticated)()),
    __param(0, (0, _inversifyExpressUtils.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9wb3J0YWwvQ29mZmVlL3Jlc3QvdjEvQ29mZmVlQ29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IHtcbiAgQmFzZUh0dHBDb250cm9sbGVyLFxuICBjb250cm9sbGVyLFxuICBodHRwRGVsZXRlLFxuICBodHRwR2V0LFxuICBodHRwUG9zdCxcbiAgaHR0cFB1dCxcbiAgcmVxdWVzdCxcbiAgcmVxdWVzdEJvZHksXG4gIHJlcXVlc3RQYXJhbSxcbiAgcmVzdWx0cyxcbn0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnO1xuaW1wb3J0IHsgT0sgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHsgVXBsb2FkZWRGaWxlIH0gZnJvbSAnZXhwcmVzcy1maWxldXBsb2FkJztcblxuaW1wb3J0IHsgRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMgfSBmcm9tICdjb3JlL0NvcmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IElDb2ZmZWVTZXJ2aWNlIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL0NvZmZlZS9JQ29mZmVlU2VydmljZSc7XG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICd1aS9jb21tb24vY29uZmlnL2FwcGxpY2F0aW9uL2V4cHJlc3MvYXV0aC9taWRkbGV3YXJlcy9pc0F1dGhlbnRpY2F0ZWQnO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlQ29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvQ3JlYXRlQ29mZmVlQ29tbWFuZEJvZHknO1xuaW1wb3J0IHsgRGVsZXRlQ29mZmVlQ29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9EZWxldGVDb2ZmZWVDb21tYW5kJztcbmltcG9ydCB7IERlbGV0ZUNvZmZlZUNvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0RlbGV0ZUNvZmZlZUNvbW1hbmRCb2R5JztcbmltcG9ydCB7IEFkZFJldmlld0NvbW1hbmRCb2R5IH0gZnJvbSAndWkvcG9ydGFsL0NvZmZlZS9yZXF1ZXN0cy9jb21tYW5kL0FkZFJldmlld0NvbW1hbmRCb2R5JztcbmltcG9ydCB7IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnkgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL0NvZmZlZS9yZXF1ZXN0cy9Vbml0T2ZXb3JrL3F1ZXJ5L0ZpbmRDb2ZmZWVSZXBvc2l0b3J5UXVlcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29mZmVlQ29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9Db2ZmZWUvcmVxdWVzdHMvY29tbWFuZC9BZGRDb2ZmZWVDb21tYW5kJztcbmltcG9ydCB7IFVwZGF0ZUNvZmZlZUNvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlQ29mZmVlQ29tbWFuZCc7XG5pbXBvcnQgeyBGaW5kT25lQ29mZmVlUmVwb3NpdG9yeVF1ZXJ5Qm9keSB9IGZyb20gJ3VpL3BvcnRhbC9Db2ZmZWUvcmVxdWVzdHMvcXVlcnkvRmluZE9uZUNvZmZlZVJlcG9zaXRvcnlRdWVyeUJvZHknO1xuaW1wb3J0IHsgVXBkYXRlQ29mZmVlQ29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlQ29mZmVlQ29tbWFuZEJvZHknO1xuaW1wb3J0IHsgR2V0VXNlclJldmlld3NRdWVyeUJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL3F1ZXJ5L0dldFVzZXJSZXZpZXdzUXVlcnlCb2R5JztcbmltcG9ydCB7IElSZXZpZXdTZXJ2aWNlIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9JUmV2aWV3U2VydmljZSc7XG5pbXBvcnQgeyBHZXRVc2VyUmV2aWV3c1F1ZXJ5IH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9xdWVyeS9HZXRVc2VyUmV2aWV3c1F1ZXJ5JztcbmltcG9ydCB7IEFkZFJldmlld0NvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL2NvbW1hbmQvQWRkUmV2aWV3Q29tbWFuZCc7XG5pbXBvcnQgeyBVcGRhdGVSZXZpZXdDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9jb21tYW5kL1VwZGF0ZVJldmlld0NvbW1hbmQnO1xuaW1wb3J0IHsgVXBkYXRlUmV2aWV3Q29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlUmV2aWV3Q29tbWFuZEJvZHknO1xuaW1wb3J0IHsgRGVsZXRlUmV2aWV3Q29tbWFuZEJvZHkgfSBmcm9tICd1aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL2NvbW1hbmQvRGVsZXRlUmV2aWV3Q29tbWFuZEJvZHknO1xuaW1wb3J0IHsgRGVsZXRlUmV2aWV3Q29tbWFuZCB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9SZXZpZXcvcmVxdWVzdHMvY29tbWFuZC9EZWxldGVSZXZpZXdDb21tYW5kJztcblxuQGNvbnRyb2xsZXIoJy92MS9jb2ZmZWUnKVxuZXhwb3J0IGNsYXNzIENvZmZlZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlSHR0cENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KERPTUFJTl9BUFBMSUNBVElPTl9TRVJWSUNFX0lERU5USUZJRVJTLkNPRkZFRV9TRVJWSUNFKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29mZmVlU2VydmljZTogSUNvZmZlZVNlcnZpY2UsXG4gICAgQGluamVjdChET01BSU5fQVBQTElDQVRJT05fU0VSVklDRV9JREVOVElGSUVSUy5SRVZJRVdfU0VSVklDRSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJldmlld1NlcnZpY2U6IElSZXZpZXdTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBAaHR0cEdldCgnLycpXG4gIGFzeW5jIEdldEFsbCgpOiBQcm9taXNlPHJlc3VsdHMuSnNvblJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29mZmVlU2VydmljZS5maW5kQWxsKCk7XG5cbiAgICByZXR1cm4gdGhpcy5qc29uKHJlc3VsdCwgT0spO1xuICB9XG5cbiAgQGh0dHBHZXQoJy86aWQnKVxuICBhc3luYyBnZXQoXG4gICAgQHJlcXVlc3RQYXJhbSgnaWQnKSB7IGNvZmZlZUlkIH06IEZpbmRPbmVDb2ZmZWVSZXBvc2l0b3J5UXVlcnlCb2R5XG4gICk6IFByb21pc2U8cmVzdWx0cy5Kc29uUmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb2ZmZWVTZXJ2aWNlLmZpbmRPbmUoXG4gICAgICBuZXcgRmluZE9uZUNvZmZlZVJlcG9zaXRvcnlRdWVyeShjb2ZmZWVJZClcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cFBvc3QoJy9jcmVhdGUnLCBpc0F1dGhlbnRpY2F0ZWQoKSlcbiAgYXN5bmMgYWRkKFxuICAgIEByZXF1ZXN0Qm9keSgpXG4gICAge1xuICAgICAgYnJhbmQsXG4gICAgICBuYW1lLFxuICAgICAgdHlwZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYnVybnRMdmwsXG4gICAgICByZWZsaW5rLFxuICAgICAgQ29mZmVlU3RhdHVzLFxuICAgICAgaW1hZ2VcbiAgICB9OiBDcmVhdGVDb2ZmZWVDb21tYW5kQm9keVxuICApOiBQcm9taXNlPHJlc3VsdHMuSnNvblJlc3VsdD4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3REYXRhKVxuICAgIC8vIGlmICghcmVxdWVzdERhdGEuZmlsZXMgfHwgISgnaW1hZ2UnIGluIHJlcXVlc3REYXRhLmZpbGVzKSkge1xuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbWFnZSBmaWxlIGZvdW5kJyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnN0IHsgaW1hZ2UgfSA9IHJlcXVlc3REYXRhLmZpbGVzO1xuICAgIGNvbnNvbGUubG9nKGltYWdlWzBdKVxuICAgIGNvbnN0IGNvZmZlZUNvbW1hbmQgPSBuZXcgQ3JlYXRlQ29mZmVlQ29tbWFuZChcbiAgICAgIGJyYW5kLFxuICAgICAgbmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICBpbWFnZVswXSBhcyBVcGxvYWRlZEZpbGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGJ1cm50THZsLFxuICAgICAgcmVmbGluayB8fCAnJyxcbiAgICAgIENvZmZlZVN0YXR1c1xuICAgICk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvZmZlZVNlcnZpY2UuY3JlYXRlKGNvZmZlZUNvbW1hbmQpO1xuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cFB1dCgnLzppZC91cGRhdGUnLCBpc0F1dGhlbnRpY2F0ZWQoKSlcbiAgYXN5bmMgdXBkYXRlKFxuICAgIEByZXF1ZXN0UGFyYW0oJ2lkJykgY29mZmVlSWQ6IHN0cmluZyxcbiAgICBAcmVxdWVzdEJvZHkoKSB7IGNvZmZlZSB9OiBVcGRhdGVDb2ZmZWVDb21tYW5kQm9keVxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvZmZlZVNlcnZpY2UudXBkYXRlKFxuICAgICAgbmV3IFVwZGF0ZUNvZmZlZUNvbW1hbmQoY29mZmVlLCBjb2ZmZWVJZClcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwRGVsZXRlKCcvOmlkJywgaXNBdXRoZW50aWNhdGVkKCkpXG4gIGFzeW5jIGRlbGV0ZShcbiAgICBAcmVxdWVzdFBhcmFtKCkgeyBpZCB9OiBEZWxldGVDb2ZmZWVDb21tYW5kQm9keVxuICApOiBQcm9taXNlPHJlc3VsdHMuSnNvblJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29mZmVlU2VydmljZS5kZWxldGUobmV3IERlbGV0ZUNvZmZlZUNvbW1hbmQoaWQpKTtcblxuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cEdldCgnLzp1c2VySWQvcmV2aWV3cy8nLCBpc0F1dGhlbnRpY2F0ZWQoKSlcbiAgYXN5bmMgR2V0VXNlclJldmlld3MoQHJlcXVlc3RQYXJhbSgpIHsgdXNlcklkIH06IEdldFVzZXJSZXZpZXdzUXVlcnlCb2R5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXZpZXdTZXJ2aWNlLmdldEFsbChcbiAgICAgIG5ldyBHZXRVc2VyUmV2aWV3c1F1ZXJ5KHVzZXJJZClcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cFBvc3QoJy86Y29mZmVlSWQvcmV2aWV3cy9hZGQnLCBpc0F1dGhlbnRpY2F0ZWQoKSlcbiAgYXN5bmMgYWRkUmV2aWV3KFxuICAgIEByZXF1ZXN0UGFyYW0oJ2NvZmZlZUlkJykgY29mZmVlSWQ6IHN0cmluZyxcbiAgICBAcmVxdWVzdEJvZHkoKVxuICAgIHsgcmF0aW5nLCBsb29rLCBzbWVsbCwgdGFzdGUsIHVzZXJJZCB9OiBBZGRSZXZpZXdDb21tYW5kQm9keVxuICApOiBQcm9taXNlPHJlc3VsdHMuSnNvblJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmV2aWV3U2VydmljZS5hZGQoXG4gICAgICBuZXcgQWRkUmV2aWV3Q29tbWFuZCh1c2VySWQsIGNvZmZlZUlkLCByYXRpbmcsIGxvb2ssIHNtZWxsLCB0YXN0ZSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmpzb24ocmVzdWx0LCBPSyk7XG4gIH1cblxuICBAaHR0cFB1dCgnLzpjb2ZmZWVJZC9yZXZpZXdzLzpyZXZpZXdJZC91cGRhdGUnLCBpc0F1dGhlbnRpY2F0ZWQoKSlcbiAgYXN5bmMgdXBkYXRlUmV2aWV3KFxuICAgIEByZXF1ZXN0UGFyYW0oJ3Jldmlld0lkJykgcmV2aWV3SWQ6IHN0cmluZyxcbiAgICBAcmVxdWVzdEJvZHkoKSB7IHJldmlldyB9OiBVcGRhdGVSZXZpZXdDb21tYW5kQm9keVxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJldmlld1NlcnZpY2UudXBkYXRlKFxuICAgICAgbmV3IFVwZGF0ZVJldmlld0NvbW1hbmQocmV2aWV3LCByZXZpZXdJZClcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIEBodHRwRGVsZXRlKCcvOmlkL3Jldmlld3MvZGVsZXRlJywgaXNBdXRoZW50aWNhdGVkKCkpXG4gIGFzeW5jIGRlbGV0ZVJldmlldyhcbiAgICBAcmVxdWVzdFBhcmFtKCdyZXZpZXdJZCcpIHsgcmV2aWV3SWQgfTogRGVsZXRlUmV2aWV3Q29tbWFuZEJvZHlcbiAgKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXZpZXdTZXJ2aWNlLmRlbGV0ZShuZXcgRGVsZXRlUmV2aWV3Q29tbWFuZChyZXZpZXdJZCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuanNvbihyZXN1bHQsIE9LKTtcbiAgfVxuXG4gIC8vIEBodHRwUG9zdCgnL3NlYXJjaCcpXG4gIC8vIGFzeW5jIHNlYXJjaChAcmVxdWVzdFBhcmFtKCkgeyBzb3J0QnksIHNraXAsIHRha2UgfTogU2VhcmNoUXVlcnlCb2R5KSB7XG4gIC8vICAgY29uc3QgX3Jlc3VsdCA9IGF3YWl0IHRoaXMuQ29mZmVlU2VydmljZS5zb3J0QW5kUGFnaW5hdGUoXG4gIC8vICAgICBuZXcgU2VhcmNoUXVlcnkoc29ydEJ5LCBza2lwLCB0YWtlKVxuICAvLyAgICk7XG4gIC8vIH1cbn1cbiJdLCJuYW1lcyI6WyJDb2ZmZWVDb250cm9sbGVyIiwiQmFzZUh0dHBDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJjb2ZmZWVTZXJ2aWNlIiwicmV2aWV3U2VydmljZSIsIkdldEFsbCIsInJlc3VsdCIsImZpbmRBbGwiLCJqc29uIiwiT0siLCJnZXQiLCJjb2ZmZWVJZCIsImZpbmRPbmUiLCJGaW5kT25lQ29mZmVlUmVwb3NpdG9yeVF1ZXJ5IiwiYWRkIiwiYnJhbmQiLCJuYW1lIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiYnVybnRMdmwiLCJyZWZsaW5rIiwiQ29mZmVlU3RhdHVzIiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiY29mZmVlQ29tbWFuZCIsIkNyZWF0ZUNvZmZlZUNvbW1hbmQiLCJjcmVhdGUiLCJ1cGRhdGUiLCJjb2ZmZWUiLCJVcGRhdGVDb2ZmZWVDb21tYW5kIiwiZGVsZXRlIiwiaWQiLCJEZWxldGVDb2ZmZWVDb21tYW5kIiwiR2V0VXNlclJldmlld3MiLCJ1c2VySWQiLCJnZXRBbGwiLCJHZXRVc2VyUmV2aWV3c1F1ZXJ5IiwiYWRkUmV2aWV3IiwicmF0aW5nIiwibG9vayIsInNtZWxsIiwidGFzdGUiLCJBZGRSZXZpZXdDb21tYW5kIiwidXBkYXRlUmV2aWV3IiwicmV2aWV3SWQiLCJyZXZpZXciLCJVcGRhdGVSZXZpZXdDb21tYW5kIiwiZGVsZXRlUmV2aWV3IiwiRGVsZXRlUmV2aWV3Q29tbWFuZCIsImh0dHBHZXQiLCJyZXF1ZXN0UGFyYW0iLCJodHRwUG9zdCIsImlzQXV0aGVudGljYXRlZCIsInJlcXVlc3RCb2R5IiwiaHR0cFB1dCIsImh0dHBEZWxldGUiLCJjb250cm9sbGVyIiwiaW5qZWN0IiwiRE9NQUlOX0FQUExJQ0FUSU9OX1NFUlZJQ0VfSURFTlRJRklFUlMiLCJDT0ZGRUVfU0VSVklDRSIsIlJFVklFV19TRVJWSUNFIl0sIm1h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