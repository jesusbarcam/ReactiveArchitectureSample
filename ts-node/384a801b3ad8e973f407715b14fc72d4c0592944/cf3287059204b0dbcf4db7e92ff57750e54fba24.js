"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findDbThreadsPerUser_1 = require("../persistence/findDbThreadsPerUser");
var _ = require("lodash");
var db_data_1 = require("../db-data");
function apiGetUserThreads(app) {
    app.route('/api/threads').get(function (req, res) {
        var participantId = parseInt(req.headers['userid']);
        var threadsPerUser = findDbThreadsPerUser_1.findDbThreadsPerUser(participantId);
        var messages = [], participantIds = [];
        threadsPerUser.forEach(function (thread) {
            var threadMessages = _.filter(db_data_1.dbMessages, function (message) { return message.threadId == thread.id; });
            messages = messages.concat(threadMessages);
            participantIds = participantIds.concat(_.keys(thread.participants));
        });
        var participants = _.uniq(participantIds.map(function (participantId) { return db_data_1.dbParticipants[participantId]; }));
        var response = {
            participants: participants,
            messages: messages,
            threads: threadsPerUser
        };
        res.status(200).json(response);
    });
}
exports.apiGetUserThreads = apiGetUserThreads;
//# sourceMappingURL=/Users/Rawdog/Developer/Curses/AngularUniversity/Angular NgRx Store Reactive Architecture/Repository/ReactiveArchitectureSample/ts-node/384a801b3ad8e973f407715b14fc72d4c0592944/cf3287059204b0dbcf4db7e92ff57750e54fba24.js.map