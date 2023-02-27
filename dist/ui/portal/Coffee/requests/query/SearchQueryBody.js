"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SearchQueryBody", {
    enumerable: true,
    get: ()=>SearchQueryBody
});
class SearchQueryBody {
    constructor(sortBy, skip, take){
        this.sortBy = sortBy;
        this.skip = skip;
        this.take = take;
        skip = skip || 0;
        take = take || 10;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy91aS9wb3J0YWwvQ29mZmVlL3JlcXVlc3RzL3F1ZXJ5L1NlYXJjaFF1ZXJ5Qm9keS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2ZmZWVTZWFyY2hDcml0ZXJpYSB9IGZyb20gJ2NvcmUvZG9tYWluL0NvZmZlZS9Db2ZmZWVTZWFyY2hDcml0ZXJpYSc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hRdWVyeUJvZHkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgc29ydEJ5OiBDb2ZmZWVTZWFyY2hDcml0ZXJpYSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2tpcDogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSB0YWtlOiBudW1iZXJcbiAgKSB7XG4gICAgc2tpcCA9IHNraXAgfHwgMDtcbiAgICB0YWtlID0gdGFrZSB8fCAxMDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlYXJjaFF1ZXJ5Qm9keSIsImNvbnN0cnVjdG9yIiwic29ydEJ5Iiwic2tpcCIsInRha2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzthQUFBQTs7QUFBTixNQUFNQTtJQUNYQyxZQUNrQkMsUUFDQUMsTUFDQUMsS0FDaEI7c0JBSGdCRjtvQkFDQUM7b0JBQ0FDO1FBRWhCRCxPQUFPQSxRQUFRO1FBQ2ZDLE9BQU9BLFFBQVE7SUFDakI7QUFDRiJ9