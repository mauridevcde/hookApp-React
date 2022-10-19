

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const miFuncion = (state = initialState, action={} ) => {

    if (action.type === 'agregar') {
        return [...state, action.payload];
    }

    return state;
}

let todos = miFuncion();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const addTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = miFuncion( todos, addTodoAction );

console.log(todos);