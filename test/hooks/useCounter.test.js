import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from "../src/hooks/useCounter";
describe('pruebas en el useCounter', () => {
    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());

        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10)
        expect(increment).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test('debe de tener el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100)

    })

    test('debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));

        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(2);

        })
        //result.current.counter es el valor actual del counter
        expect(result.current.counter).toBe(103)
    })
    test('debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(103));

        const { counter, decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);

        })
        //result.current.counter es el valor actual del counter
        expect(result.current.counter).toBe(100)
    })
    test('debe reiniciar el contador', () => {
        const { result } = renderHook(() => useCounter(100));

        const { counter, reset, increment } = result.current;

        act(() => {
            increment();
            reset();

        })
        //result.current.counter es el valor actual del counter
        expect(result.current.counter).toBe(100)
    })
})