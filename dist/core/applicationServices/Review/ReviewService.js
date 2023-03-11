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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/core/applicationServices/Review/ReviewService.ts
var ReviewService_exports = {};
__export(ReviewService_exports, {
  ReviewService: () => ReviewService
});
module.exports = __toCommonJS(ReviewService_exports);
var import_inversify = require("inversify");

// src/core/CoreModuleSymbols.ts
var DOMAIN_APPLICATION_SERVICE_IDENTIFIERS = {
  USER_SERVICE: Symbol.for("UserService"),
  AUTHENTICATION_SERVICE: Symbol.for("AuthenticationService"),
  COFFEE_SERVICE: Symbol.for("CoffeeService"),
  REVIEW_SERVICE: Symbol.for("ReviewService")
};
var DOMAIN_MAPPING_IDENTIFIERS = {
  USER_DOMAIN: Symbol.for("UserDomain"),
  ROLE_DOMAIN: Symbol.for("RoleDomain"),
  COFFEE_DOMAIN: Symbol.for("CoffeeDomain"),
  REVIEW_DOMAIN: Symbol.for("ReviewDomain")
};
var DOMAIN_REPOSITORY_IDENTIFIERS = {
  ROLE_REPOSITORY: Symbol.for("RoleRepository"),
  USER_REPOSITORY: Symbol.for("UserRepository"),
  COFFEE_REPOSITORY: Symbol.for("CoffeeRepository"),
  REVIEW_REPOSITORY: Symbol.for("ReviewRepository")
};
var DOMAIN_UNIT_OF_WORK_IDENTIFIERS = {
  USER_UNIT_OF_WORK: Symbol.for("UserUnitOfWork"),
  COFFEE_UNIT_OF_WORK: Symbol.for("CoffeeUnitOfWork")
};

// src/core/domainServices/Review/requests/command/AddReviewRepositoryCommand.ts
var AddReviewRepositoryCommand = class {
  constructor(userId, coffeeId, rating, look, smell, taste) {
    this.userId = userId;
    this.coffeeId = coffeeId;
    this.rating = rating;
    this.look = look;
    this.smell = smell;
    this.taste = taste;
  }
};

// src/core/domainServices/Review/requests/query/GetReviewsRepositoryQuery.ts
var GetReviewsRepositoryQuery = class {
  constructor(userId) {
    this.userId = userId;
  }
};

// src/core/domainServices/Review/requests/command/UpdateReviewRepositoryCommand.ts
var UpdateReviewRepositoryCommand = class {
  constructor(review, reviewId) {
    this.review = review;
    this.reviewId = reviewId;
  }
};

// src/core/domainServices/Review/requests/command/DeleteReviewRepositoryCommand.ts
var DeleteReviewRepositoryCommand = class {
  constructor(reviewId) {
    this.reviewId = reviewId;
  }
};

// src/core/applicationServices/Review/ReviewService.ts
var ReviewService = class {
  constructor(reviewRepository) {
    this.reviewRepository = reviewRepository;
  }
  getAll({ userId }) {
    return this.reviewRepository.getReviews(
      new GetReviewsRepositoryQuery(userId)
    );
  }
  add({
    userId,
    coffeeId,
    rating,
    look,
    smell,
    taste
  }) {
    return this.reviewRepository.addReview(
      new AddReviewRepositoryCommand(
        userId,
        coffeeId,
        rating,
        look,
        smell,
        taste
      )
    );
  }
  update({ reviewId, review }) {
    return this.reviewRepository.updateReview(
      new UpdateReviewRepositoryCommand(review, reviewId)
    );
  }
  delete({ reviewId }) {
    return this.reviewRepository.deleteReview(
      new DeleteReviewRepositoryCommand(reviewId)
    );
  }
};
ReviewService = __decorateClass([
  (0, import_inversify.injectable)(),
  __decorateParam(0, (0, import_inversify.inject)(DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY))
], ReviewService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReviewService
});
//# sourceMappingURL=ReviewService.js.map
=======
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReviewService", {
    enumerable: true,
    get: ()=>ReviewService
});
const _inversify = require("inversify");
const _coreModuleSymbols = require("../../CoreModuleSymbols");
const _ireviewRepository = require("../../domainServices/Review/IReviewRepository");
const _addReviewRepositoryCommand = require("../../domainServices/Review/requests/command/AddReviewRepositoryCommand");
const _getReviewsRepositoryQuery = require("../../domainServices/Review/requests/query/GetReviewsRepositoryQuery");
const _updateReviewRepositoryCommand = require("../../domainServices/Review/requests/command/UpdateReviewRepositoryCommand");
const _deleteReviewRepositoryCommand = require("../../domainServices/Review/requests/command/DeleteReviewRepositoryCommand");
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
let ReviewService = class ReviewService {
    constructor(reviewRepository){
        this.reviewRepository = reviewRepository;
    }
    getAll({ userId  }) {
        return this.reviewRepository.getReviews(new _getReviewsRepositoryQuery.GetReviewsRepositoryQuery(userId));
    }
    add({ userId , coffeeId , rating , look , smell , taste  }) {
        return this.reviewRepository.addReview(new _addReviewRepositoryCommand.AddReviewRepositoryCommand(userId, coffeeId, rating, look, smell, taste));
    }
    update({ reviewId , review  }) {
        return this.reviewRepository.updateReview(new _updateReviewRepositoryCommand.UpdateReviewRepositoryCommand(review, reviewId));
    }
    delete({ reviewId  }) {
        return this.reviewRepository.deleteReview(new _deleteReviewRepositoryCommand.DeleteReviewRepositoryCommand(reviewId));
    }
};
ReviewService = __decorate([
    (0, _inversify.injectable)(),
    __param(0, (0, _inversify.inject)(_coreModuleSymbols.DOMAIN_REPOSITORY_IDENTIFIERS.REVIEW_REPOSITORY)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _ireviewRepository.IReviewRepository === "undefined" ? Object : _ireviewRepository.IReviewRepository
    ])
], ReviewService);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvUmV2aWV3L1Jldmlld1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuaW1wb3J0IHsgVXBkYXRlUmVzdWx0IH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IElSZXZpZXdTZXJ2aWNlIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9JUmV2aWV3U2VydmljZSc7XG5pbXBvcnQgeyBBZGRSZXZpZXdDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9jb21tYW5kL0FkZFJldmlld0NvbW1hbmQnO1xuaW1wb3J0IHsgRE9NQUlOX1JFUE9TSVRPUllfSURFTlRJRklFUlMgfSBmcm9tICdjb3JlL0NvcmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJ2NvcmUvZG9tYWluL1Jldmlldy9SZXZpZXcnO1xuaW1wb3J0IHsgSVJldmlld1JlcG9zaXRvcnkgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL1Jldmlldy9JUmV2aWV3UmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBBZGRSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZCB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL2NvbW1hbmQvQWRkUmV2aWV3UmVwb3NpdG9yeUNvbW1hbmQnO1xuaW1wb3J0IHsgR2V0UmV2aWV3c1JlcG9zaXRvcnlRdWVyeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL3F1ZXJ5L0dldFJldmlld3NSZXBvc2l0b3J5UXVlcnknO1xuaW1wb3J0IHsgR2V0VXNlclJldmlld3NRdWVyeSB9IGZyb20gJ2NvcmUvYXBwbGljYXRpb25TZXJ2aWNlcy9SZXZpZXcvcmVxdWVzdHMvcXVlcnkvR2V0VXNlclJldmlld3NRdWVyeSc7XG5pbXBvcnQgeyBVcGRhdGVSZXZpZXdDb21tYW5kIH0gZnJvbSAnY29yZS9hcHBsaWNhdGlvblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9jb21tYW5kL1VwZGF0ZVJldmlld0NvbW1hbmQnO1xuaW1wb3J0IHsgVXBkYXRlUmV2aWV3UmVwb3NpdG9yeUNvbW1hbmQgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9jb21tYW5kL1VwZGF0ZVJldmlld1JlcG9zaXRvcnlDb21tYW5kJztcbmltcG9ydCB7IERlbGV0ZVJldmlld0NvbW1hbmQgfSBmcm9tICdjb3JlL2FwcGxpY2F0aW9uU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL2NvbW1hbmQvRGVsZXRlUmV2aWV3Q29tbWFuZCc7XG5pbXBvcnQgeyBEZWxldGVSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZCB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL2NvbW1hbmQvRGVsZXRlUmV2aWV3UmVwb3NpdG9yeUNvbW1hbmQnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmV2aWV3U2VydmljZSBpbXBsZW1lbnRzIElSZXZpZXdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChET01BSU5fUkVQT1NJVE9SWV9JREVOVElGSUVSUy5SRVZJRVdfUkVQT1NJVE9SWSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJldmlld1JlcG9zaXRvcnk6IElSZXZpZXdSZXBvc2l0b3J5XG4gICkge31cblxuICBnZXRBbGwoeyB1c2VySWQgfTogR2V0VXNlclJldmlld3NRdWVyeSk6IFByb21pc2U8UmV2aWV3W10+IHtcbiAgICByZXR1cm4gdGhpcy5yZXZpZXdSZXBvc2l0b3J5LmdldFJldmlld3MoXG4gICAgICBuZXcgR2V0UmV2aWV3c1JlcG9zaXRvcnlRdWVyeSh1c2VySWQpXG4gICAgKTtcbiAgfVxuXG4gIGFkZCh7XG4gICAgdXNlcklkLFxuICAgIGNvZmZlZUlkLFxuICAgIHJhdGluZyxcbiAgICBsb29rLFxuICAgIHNtZWxsLFxuICAgIHRhc3RlLFxuICB9OiBBZGRSZXZpZXdDb21tYW5kKTogUHJvbWlzZTxSZXZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy5yZXZpZXdSZXBvc2l0b3J5LmFkZFJldmlldyhcbiAgICAgIG5ldyBBZGRSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZChcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjb2ZmZWVJZCxcbiAgICAgICAgcmF0aW5nLFxuICAgICAgICBsb29rLFxuICAgICAgICBzbWVsbCxcbiAgICAgICAgdGFzdGVcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKHsgcmV2aWV3SWQsIHJldmlldyB9OiBVcGRhdGVSZXZpZXdDb21tYW5kKTogUHJvbWlzZTxVcGRhdGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5yZXZpZXdSZXBvc2l0b3J5LnVwZGF0ZVJldmlldyhcbiAgICAgIG5ldyBVcGRhdGVSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZChyZXZpZXcsIHJldmlld0lkKVxuICAgICk7XG4gIH1cblxuICBkZWxldGUoeyByZXZpZXdJZCB9OiBEZWxldGVSZXZpZXdDb21tYW5kKTogUHJvbWlzZTxSZXZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy5yZXZpZXdSZXBvc2l0b3J5LmRlbGV0ZVJldmlldyhcbiAgICAgIG5ldyBEZWxldGVSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZChyZXZpZXdJZClcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmV2aWV3U2VydmljZSIsImNvbnN0cnVjdG9yIiwicmV2aWV3UmVwb3NpdG9yeSIsImdldEFsbCIsInVzZXJJZCIsImdldFJldmlld3MiLCJHZXRSZXZpZXdzUmVwb3NpdG9yeVF1ZXJ5IiwiYWRkIiwiY29mZmVlSWQiLCJyYXRpbmciLCJsb29rIiwic21lbGwiLCJ0YXN0ZSIsImFkZFJldmlldyIsIkFkZFJldmlld1JlcG9zaXRvcnlDb21tYW5kIiwidXBkYXRlIiwicmV2aWV3SWQiLCJyZXZpZXciLCJ1cGRhdGVSZXZpZXciLCJVcGRhdGVSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZCIsImRlbGV0ZSIsImRlbGV0ZVJldmlldyIsIkRlbGV0ZVJldmlld1JlcG9zaXRvcnlDb21tYW5kIiwiaW5qZWN0YWJsZSIsImluamVjdCIsIkRPTUFJTl9SRVBPU0lUT1JZX0lERU5USUZJRVJTIiwiUkVWSUVXX1JFUE9TSVRPUlkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0JhQTs7YUFBQUE7OzJCQWxCc0I7bUNBTVc7bUNBRVo7NENBQ1M7MkNBQ0Q7K0NBR0k7K0NBRUE7Ozs7Ozs7Ozs7Ozs7OztJQUdqQ0EsZ0JBQU47SUFDTEMsWUFFbUJDLGlCQUNqQjtnQ0FEaUJBO0lBQ2hCO0lBRUhDLE9BQU8sRUFBRUMsT0FBTSxFQUF1QixFQUFxQjtRQUN6RCxPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCLENBQUNHLFVBQVUsQ0FDckMsSUFBSUMsb0RBQXlCLENBQUNGO0lBRWxDO0lBRUFHLElBQUksRUFDRkgsT0FBTSxFQUNOSSxTQUFRLEVBQ1JDLE9BQU0sRUFDTkMsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLE1BQUssRUFDWSxFQUFtQjtRQUNwQyxPQUFPLElBQUksQ0FBQ1YsZ0JBQWdCLENBQUNXLFNBQVMsQ0FDcEMsSUFBSUMsc0RBQTBCLENBQzVCVixRQUNBSSxVQUNBQyxRQUNBQyxNQUNBQyxPQUNBQztJQUdOO0lBRUFHLE9BQU8sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQXVCLEVBQXlCO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDZixnQkFBZ0IsQ0FBQ2dCLFlBQVksQ0FDdkMsSUFBSUMsNERBQTZCLENBQUNGLFFBQVFEO0lBRTlDO0lBRUFJLE9BQU8sRUFBRUosU0FBUSxFQUF1QixFQUFtQjtRQUN6RCxPQUFPLElBQUksQ0FBQ2QsZ0JBQWdCLENBQUNtQixZQUFZLENBQ3ZDLElBQUlDLDREQUE2QixDQUFDTjtJQUV0QztBQUNGO0FBM0NhaEI7SUFEWnVCLElBQUFBLHFCQUFVO0lBR05DLFdBQUFBLElBQUFBLGlCQUFNLEVBQUNDLGdEQUE2QixDQUFDQyxpQkFBaUI7OztlQUNwQixvQ0FBaUIsNEJBQWpCLG9DQUFpQjs7R0FIM0MxQiJ9
>>>>>>> 2e7fe692186a5ad03369647a352d8219ceed35c6
