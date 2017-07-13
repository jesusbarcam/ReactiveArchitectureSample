"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_data_1 = require("../db-data");
var _ = require("lodash");
function findThreadById(threadId) {
    var threads = _.values(db_data_1.dbThreads);
    return _.find(threads, function (thread) { return thread.id === threadId; });
}
exports.findThreadById = findThreadById;
//# sourceMappingURL=/Users/Rawdog/Developer/Curses/AngularUniversity/Angular NgRx Store Reactive Architecture/Repository/ReactiveArchitectureSample/ts-node/384a801b3ad8e973f407715b14fc72d4c0592944/415d7a3ebd6846b85fbdbdaab9dfec26e64dffe5.js.map