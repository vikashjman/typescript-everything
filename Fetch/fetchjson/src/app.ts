import axios from 'axios';

interface Todo {
    id: number;
    title: string; 
    completed: boolean;
}

axios.get("https://jsonplaceholder.typicode.com/todos/2").then(response => {
    const todo = response.data as Todo;

    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(ID, title, finished)

});

const logTodo = (id:number, title:string, completed:boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `)
}
