"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
exports.DateUtils = {
    startDay: (date) => {
        const startDate = new Date(date);
        startDate.setUTCHours(0, 0, 0, 0);
        return startDate;
    },
    endDay: (date) => {
        const endDate = new Date(date);
        endDate.setUTCHours(23, 59, 59, 999);
        return endDate;
    },
    getNumberOfDays: (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        var diff = Math.abs(start.getTime() - end.getTime());
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
};
//# sourceMappingURL=date.helper.js.map