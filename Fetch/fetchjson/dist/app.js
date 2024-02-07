"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get("https://jsonplaceholder.typicode.com/todos/2").then(response => {
    const todo = response.data;
    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    logTodo(ID, title, finished);
});
const logTodo = (id, title, completed) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
};
