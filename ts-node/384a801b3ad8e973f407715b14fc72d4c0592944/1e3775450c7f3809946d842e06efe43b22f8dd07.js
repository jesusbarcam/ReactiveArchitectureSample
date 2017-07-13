"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_data_1 = require("../db-data");
function apiMessageNotificationsPerUser(app) {
    app.route('/api/notifications/messages').post(function (req, res) {
        var participantId = req.headers['userid'];
        if (!participantId) {
            res.status(200).json({ payload: [] });
            return;
        }
        var unreadMessageIds = db_data_1.dbMessagesQueuePerUser[participantId];
        var unreadMessages = unreadMessageIds.map(function (messageId) { return db_data_1.dbMessages[messageId]; });
        db_data_1.dbMessagesQueuePerUser[participantId] = [];
        res.status(200).json({ payload: unreadMessages });
    });
}
exports.apiMessageNotificationsPerUser = apiMessageNotificationsPerUser;
//# sourceMappingURL=/Users/Rawdog/Developer/Curses/AngularUniversity/Angular NgRx Store Reactive Architecture/Repository/ReactiveArchitectureSample/ts-node/384a801b3ad8e973f407715b14fc72d4c0592944/1e3775450c7f3809946d842e06efe43b22f8dd07.js.map