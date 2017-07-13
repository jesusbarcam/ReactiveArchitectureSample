"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_data_1 = require("../db-data");
var _ = require("lodash");
function findDbThreadsPerUser(participantId) {
    var allThreads = _.values(db_data_1.dbThreads);
    return _.filter(allThreads, function (thread) {
        return _.includes(_.keys(thread.participants), participantId.toString());
    });
}
exports.findDbThreadsPerUser = findDbThreadsPerUser;
//# sourceMappingURL=/Users/Rawdog/Developer/Curses/AngularUniversity/Angular NgRx Store Reactive Architecture/Repository/ReactiveArchitectureSample/ts-node/384a801b3ad8e973f407715b14fc72d4c0592944/1a46d124a8e2184dcb989fa935bcc30ebd407920.js.map