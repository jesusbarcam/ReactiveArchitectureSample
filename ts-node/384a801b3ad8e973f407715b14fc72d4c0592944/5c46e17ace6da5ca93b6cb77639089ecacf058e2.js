"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var apiGetUserThreads_1 = require("./api/apiGetUserThreads");
var apiSaveNewMessage_1 = require("./api/apiSaveNewMessage");
var apiMessageNotificationsPerUser_1 = require("./api/apiMessageNotificationsPerUser");
var apiMarkThreadAsReadByUser_1 = require("./api/apiMarkThreadAsReadByUser");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
apiGetUserThreads_1.apiGetUserThreads(app);
apiSaveNewMessage_1.apiSaveNewMessage(app);
apiMessageNotificationsPerUser_1.apiMessageNotificationsPerUser(app);
apiMarkThreadAsReadByUser_1.apiUpdateThread(app);
app.listen(8090, function () {
    console.log('Server is now running on port 8090 ...');
});
//# sourceMappingURL=/Users/Rawdog/Developer/Curses/AngularUniversity/Angular NgRx Store Reactive Architecture/Repository/ReactiveArchitectureSample/ts-node/384a801b3ad8e973f407715b14fc72d4c0592944/5c46e17ace6da5ca93b6cb77639089ecacf058e2.js.map