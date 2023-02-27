"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReviewEntityToReviewDomain", {
    enumerable: true,
    get: ()=>ReviewEntityToReviewDomain
});
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _review = require("../../../../core/domain/Review/Review");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const ReviewEntityToReviewDomain = ()=>({
        configureMapping (mapper) {
            mapper.createMap({
                destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
                source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
            }, _review.Review);
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9tYXBwaW5ncy9SZXZpZXcvUmV2aWV3RW50aXR5VG9SZXZpZXdEb21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwcGVyIH0gZnJvbSAnQHd1ZmUvbWFwcGVyJztcblxuaW1wb3J0IHsgSU1hcHBpbmcgfSBmcm9tICdjb3JlL2NvbW1vbi9tYXBwZXIvSU1hcHBpbmcnO1xuaW1wb3J0IHsgRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMgfSBmcm9tICdjb3JlL0NvcmVNb2R1bGVTeW1ib2xzJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJ2NvcmUvZG9tYWluL1Jldmlldy9SZXZpZXcnO1xuaW1wb3J0IHsgUmV2aWV3IGFzIFJldmlld0VudGl0eSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudGl0aWVzL1Jldmlldyc7XG5pbXBvcnQgeyBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvSW5mcmFzdHJ1Y3R1cmVNb2R1bGVTeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IFJldmlld0VudGl0eVRvUmV2aWV3RG9tYWluID0gKCk6IElNYXBwaW5nID0+ICh7XG4gIGNvbmZpZ3VyZU1hcHBpbmcobWFwcGVyOiBNYXBwZXIpOiB2b2lkIHtcbiAgICBtYXBwZXIuY3JlYXRlTWFwPFJldmlld0VudGl0eSwgUmV2aWV3PihcbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb246IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTLlJFVklFV19ET01BSU4sXG4gICAgICAgIHNvdXJjZTogREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUy5SRVZJRVdfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIFJldmlld1xuICAgICk7XG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJSZXZpZXdFbnRpdHlUb1Jldmlld0RvbWFpbiIsImNvbmZpZ3VyZU1hcHBpbmciLCJtYXBwZXIiLCJjcmVhdGVNYXAiLCJkZXN0aW5hdGlvbiIsIkRPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTIiwiUkVWSUVXX0RPTUFJTiIsInNvdXJjZSIsIkRBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMiLCJSRVZJRVdfRU5USVRZIiwiUmV2aWV3Il0sIm1hcHBpbmdzIjoiOzs7OytCQVFhQTs7YUFBQUE7O21DQUw4Qjt3QkFDcEI7NkNBRXNCO0FBRXRDLE1BQU1BLDZCQUE2QixJQUFpQixDQUFBO1FBQ3pEQyxrQkFBaUJDLE1BQWMsRUFBUTtZQUNyQ0EsT0FBT0MsU0FBUyxDQUNkO2dCQUNFQyxhQUFhQyw2Q0FBMEIsQ0FBQ0MsYUFBYTtnQkFDckRDLFFBQVFDLHlEQUE0QixDQUFDQyxhQUFhO1lBQ3BELEdBQ0FDLGNBQU07UUFFVjtJQUNGLENBQUEifQ==