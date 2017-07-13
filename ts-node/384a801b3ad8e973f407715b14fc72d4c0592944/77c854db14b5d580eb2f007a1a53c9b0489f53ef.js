"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var db_data_1 = require("../db-data");
var findThreadById_1 = require("../persistence/findThreadById");
var messageIdCounter = 20;
function apiSaveNewMessage(app) {
    app.route('/api/threads/:id').post(function (req, res) {
        var payload = req.body;
        var threadId = parseInt(req.params.id), participantId = parseInt(req.headers['userid']);
        var message = {
            id: messageIdCounter++,
            threadId: threadId,
            timestamp: new Date().getTime(),
            text: payload.text,
            participantId: participantId
        };
        // save the new message, it's
        // already linked to a thread
        db_data_1.dbMessages[message.id] = message;
        var thread = findThreadById_1.findThreadById(threadId);
        thread.messageIds.push(message.id);
        var otherParticipantIds = _.keys(thread.participants).filter(function (id) { return parseInt(id) !== participantId; });
        otherParticipantIds.forEach(function (participantId) {
            thread.participants[participantId] += 1;
            db_data_1.dbMessagesQueuePerUser[participantId].push(message.id);
        });
        thread.participants[participantId] = 0;
        res.status(200).send();
    });
}
exports.apiSaveNewMessage = apiSaveNewMessage;
//# sourceMappingURL=/Users/Rawdog/Developer/Curses/AngularUniversity/Angular NgRx Store Reactive Architecture/Repository/ReactiveArchitectureSample/ts-node/384a801b3ad8e973f407715b14fc72d4c0592944/77c854db14b5d580eb2f007a1a53c9b0489f53ef.js.map