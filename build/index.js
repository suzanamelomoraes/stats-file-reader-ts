"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// fs = module from node to read the file
const matches = fs_1.default
    .readFileSync('football.csv', {
    // tell what the content is, in this case a string, otherwise it will return a buffer
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
console.log(matches);
