"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Review", {
    enumerable: true,
    get: ()=>Review
});
const _typeorm = require("typeorm");
const _base = /*#__PURE__*/ _interopRequireDefault(require("./Base"));
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
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Review = class Review extends _base.default {
} // to swap value to int, presice to 2 number after comma for rating
;
__decorate([
    (0, _typeorm.Column)('decimal'),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    (0, _typeorm.Column)('decimal'),
    __metadata("design:type", Number)
], Review.prototype, "look", void 0);
__decorate([
    (0, _typeorm.Column)('decimal'),
    __metadata("design:type", Number)
], Review.prototype, "smell", void 0);
__decorate([
    (0, _typeorm.Column)('decimal'),
    __metadata("design:type", Number)
], Review.prototype, "taste", void 0);
__decorate([
    (0, _typeorm.Column)('text'),
    __metadata("design:type", String)
], Review.prototype, "coffeeId", void 0);
__decorate([
    (0, _typeorm.ManyToOne)('Coffee', (Coffee1)=>Coffee1.reviews, {
        onDelete: 'CASCADE'
    }),
    (0, _typeorm.JoinColumn)({
        name: 'coffee',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", typeof Coffee === "undefined" ? Object : Coffee)
], Review.prototype, "coffee", void 0);
__decorate([
    (0, _typeorm.Column)('text', {
        nullable: true
    }),
    __metadata("design:type", String)
], Review.prototype, "userId", void 0);
__decorate([
    (0, _typeorm.ManyToOne)('User', (user)=>user.reviews),
    (0, _typeorm.JoinColumn)({
        name: 'user',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", typeof User === "undefined" ? Object : User)
], Review.prototype, "user", void 0);
Review = __decorate([
    (0, _typeorm.Entity)()
], Review);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9SZXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIEpvaW5Db2x1bW4sIE1hbnlUb09uZSB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgdHlwZSB7IENvZmZlZSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL2VudGl0aWVzL0NvZmZlZSc7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCBNb2RlbCBmcm9tICdpbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9lbnRpdGllcy9CYXNlJztcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgUmV2aWV3IGV4dGVuZHMgTW9kZWwge1xuICBAQ29sdW1uKCdkZWNpbWFsJylcbiAgcmF0aW5nITogbnVtYmVyO1xuXG4gIEBDb2x1bW4oJ2RlY2ltYWwnKVxuICBsb29rITogbnVtYmVyO1xuXG4gIEBDb2x1bW4oJ2RlY2ltYWwnKVxuICBzbWVsbCE6IG51bWJlcjtcblxuICBAQ29sdW1uKCdkZWNpbWFsJylcbiAgdGFzdGUhOiBudW1iZXI7XG5cbiAgQENvbHVtbigndGV4dCcpXG4gIGNvZmZlZUlkITogc3RyaW5nO1xuXG4gIEBNYW55VG9PbmUoJ0NvZmZlZScsIChDb2ZmZWU6IENvZmZlZSkgPT4gQ29mZmVlLnJldmlld3MsIHtcbiAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICB9KVxuICBASm9pbkNvbHVtbih7IG5hbWU6ICdjb2ZmZWUnLCByZWZlcmVuY2VkQ29sdW1uTmFtZTogJ2lkJyB9KVxuICBjb2ZmZWUhOiBDb2ZmZWU7XG5cbiAgQENvbHVtbigndGV4dCcsIHsgbnVsbGFibGU6IHRydWUgfSlcbiAgdXNlcklkITogc3RyaW5nO1xuXG4gIEBNYW55VG9PbmUoJ1VzZXInLCAodXNlcjogVXNlcikgPT4gdXNlci5yZXZpZXdzKVxuICBASm9pbkNvbHVtbih7IG5hbWU6ICd1c2VyJywgcmVmZXJlbmNlZENvbHVtbk5hbWU6ICdpZCcgfSlcbiAgdXNlciE6IFVzZXI7XG59XG4vLyB0byBzd2FwIHZhbHVlIHRvIGludCwgcHJlc2ljZSB0byAyIG51bWJlciBhZnRlciBjb21tYSBmb3IgcmF0aW5nXG4iXSwibmFtZXMiOlsiUmV2aWV3IiwiTW9kZWwiLCJDb2x1bW4iLCJNYW55VG9PbmUiLCJDb2ZmZWUiLCJyZXZpZXdzIiwib25EZWxldGUiLCJKb2luQ29sdW1uIiwibmFtZSIsInJlZmVyZW5jZWRDb2x1bW5OYW1lIiwibnVsbGFibGUiLCJ1c2VyIiwiRW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7OytCQU9hQTs7YUFBQUE7O3lCQVB5QzsyREFJcEM7Ozs7Ozs7Ozs7Ozs7OztJQUdMQSxTQUFOLHFCQUFxQkMsYUFBSztBQTRCakMsRUFDQSxtRUFBbUU7OztJQTVCaEVDLElBQUFBLGVBQU0sRUFBQzs7R0FER0Y7O0lBSVZFLElBQUFBLGVBQU0sRUFBQzs7R0FKR0Y7O0lBT1ZFLElBQUFBLGVBQU0sRUFBQzs7R0FQR0Y7O0lBVVZFLElBQUFBLGVBQU0sRUFBQzs7R0FWR0Y7O0lBYVZFLElBQUFBLGVBQU0sRUFBQzs7R0FiR0Y7O0lBZ0JWRyxJQUFBQSxrQkFBUyxFQUFDLFVBQVUsQ0FBQ0MsVUFBbUJBLFFBQU9DLE9BQU8sRUFBRTtRQUN2REMsVUFBVTtJQUNaO0lBQ0NDLElBQUFBLG1CQUFVLEVBQUM7UUFBRUMsTUFBTTtRQUFVQyxzQkFBc0I7SUFBSztxQ0FDaEQsa0NBQUE7R0FwQkVUOztJQXNCVkUsSUFBQUEsZUFBTSxFQUFDLFFBQVE7UUFBRVEsVUFBVSxJQUFJO0lBQUM7O0dBdEJ0QlY7O0lBeUJWRyxJQUFBQSxrQkFBUyxFQUFDLFFBQVEsQ0FBQ1EsT0FBZUEsS0FBS04sT0FBTztJQUM5Q0UsSUFBQUEsbUJBQVUsRUFBQztRQUFFQyxNQUFNO1FBQVFDLHNCQUFzQjtJQUFLO3FDQUNoRCxnQ0FBQTtHQTNCSVQ7QUFBQUE7SUFEWlksSUFBQUEsZUFBTTtHQUNNWiJ9