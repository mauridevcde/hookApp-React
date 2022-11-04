import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en el todoReducer', () => {
    const inicialState = [{
        id: 1,
        desc: 'Aprender React',
        done: false
    }];

    // test('Debe de regresar el estado inicial', () => { 
    //     const newState = todoReducer(inicialState, {});
    //     //esperamos que el estado inicial sea igual al nuevo estado
    //     expect(newState).toBe(inicialState);


    //  })

    // test('Debe de Agregar un Todo', () => {
    //     const action = {
    //         type: '[TODO] Add Todo',
    //         payload: {
    //             id: 2,
    //             desc: 'Aprender Mongo',
    //             done: false
    //         }
    //     }

    //     const newState = todoReducer(inicialState, action);
        
    //     expect(newState.length).toBe(2); //esperamos que el nuevo estado tenga una longitud de 2
    //     expect(newState).toContain(action.payload);// debe contener el payload
    // })

    // test('Debe de borrar un Todo', () => {
    //     const action = {
    //         type: '[TODO] Remove Todo',
    //         payload: 1
    //     }

    //     const newState = todoReducer(inicialState, action);
        
    //     expect(newState.length).toBe(0); //esperamos que el nuevo estado tenga una longitud de 0
    // })
    test('Debe de hacer el Toggle del Todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer(inicialState, action);
        console.log(newState);
        expect(newState[0].done).toBe(true); // verificamos que el new state en la posicion 0 tenga el done en true
    })
})