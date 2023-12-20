var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import connect from "./connect";
import finder from "./finder";
import reindex from "./reindex";
import migrate from "./migrate";
var fnMongo = __assign(__assign(__assign({}, connect), finder), { reindex: reindex, migrate: migrate });
export default fnMongo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9mdW5jL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBQ2hDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFDaEMsT0FBTyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBRWhDLElBQU0sT0FBTyxrQ0FDTixPQUFPLEdBQ1AsTUFBTSxLQUNULE9BQU8sU0FBQSxFQUNQLE9BQU8sU0FBQSxHQUNWLENBQUM7QUFFRixlQUFlLE9BQU8sQ0FBQyJ9