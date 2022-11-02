import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../src/hooks/useForm';


const initialForm = {
    name: 'chimugood',
    email: 'mauridevcde@gmail.com'
}

describe('Pruebas en Form', () => {
    // test('debe de mostrar el formulario con valores por defecto', () => {
    //     const { result } = renderHook(() => useForm(initialForm))

    //     expect(result.current).toEqual({
    //         name: initialForm.name,
    //         email: initialForm.email,
    //         formState: initialForm,
    //         onInputChange: expect.any(Function),
    //         onResetForm: expect.any(Function)
    //     });
    // })


    // test('debe de cambiar el valor del formulario', () => {
    //     const newValue = 'NdeRevineKpLu';

    //     const { result } = renderHook(() => useForm(initialForm))

    //     const { onInputChange } = result.current;

    //     act(() => {
    //         onInputChange({
    //             target: {
    //                 name: 'name',
    //                 value: newValue
    //             }
    //         })
    //     })

      
    //     expect(result.current.name).toBe(newValue)
    //     expect(result.current.formState.name).toBe(newValue)

    // })

    test('debe realizar el reset del formulario', () => {
        const newValue = 'NdeRevineKpLu';

        const { result } = renderHook(() => useForm(initialForm))

        const { onInputChange,onResetForm } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
            onResetForm();
        })

      
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)

    })
})