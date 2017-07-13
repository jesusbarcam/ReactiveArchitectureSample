"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_data_1 = require("../db-data");
var _ = require("lodash");
function apiUpdateThread(app) {
    app.route('/api/threads/:id').patch(function (req, res) {
        var participantId = req.headers['userid'];
        var threadId = req.params['id'];
        var updatedProps = req.body;
        var allThreads = _.values(db_data_1.dbThreads);
        var thread = _.find(allThreads, function (thread) { return thread.id == threadId; });
        if (updatedProps.hasOwnProperty('read')) {
            thread.participants[participantId] = 0;
        }
        res.status(200).send();
    });
}
exports.apiUpdateThread = apiUpdateThread;
//# sourceMappingURL=/Users/Rawdog/Developer/Curses/AngularUniversity/Angular NgRx Store Reactive Architecture/Repository/ReactiveArchitectureSample/ts-node/384a801b3ad8e973f407715b14fc72d4c0592944/031940534458ea05ca37d190fbb03bd717170c1b.js.map