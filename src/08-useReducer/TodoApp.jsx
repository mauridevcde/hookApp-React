import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    desc: "Aprender TypeScript",
    done: false,
  },
];

export const TodoApp = () => {
  console.log(initialState);
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
        
    console.log(todo);


       

  }

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendiente: 2</small>
      </h1>

      <hr />

      <div className="row">
        
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
