"use strict";
// electron/preload.ts
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('api', {
    ping: () => 'pong',
});
