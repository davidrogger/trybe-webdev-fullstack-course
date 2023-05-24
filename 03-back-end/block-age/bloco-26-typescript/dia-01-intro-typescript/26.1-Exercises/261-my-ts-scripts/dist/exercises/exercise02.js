"use strict";
var months;
(function (months) {
    months[months["january"] = 1] = "january";
    months[months["february"] = 2] = "february";
    months[months["march"] = 3] = "march";
    months[months["april"] = 4] = "april";
    months[months["may"] = 5] = "may";
    months[months["juny"] = 6] = "juny";
    months[months["july"] = 7] = "july";
    months[months["august"] = 8] = "august";
    months[months["september"] = 9] = "september";
    months[months["october"] = 10] = "october";
    months[months["november"] = 11] = "november";
    months[months["december"] = 12] = "december";
})(months || (months = {}));
module.exports = months;
