import React, { useState, useEffect } from 'react'


const useValidacion = (stateInicial, validar, fn) => {

    const [valores, guardarValores] = useState(stateInicial);
    //Errores va a ser un objeto
    const [errores, gurdarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm){

            //Object.keys verifica si un objeto esta vacio o tiene algo
            const noErrores= Object.keys(errores).length === 0;

            if(noErrores) {
                fn(); // fn = funcion que se ejecuta en el componente
            }
            guardarSubmitForm(false);
        }
    }, [errores]);

//Funcion que se ejecuta conforme el usuario escribe algo
const handleChange = e => {
    guardarValores({
        ...valores,
        [e.target.name] : e.target.value
    })
}

//funcion que se ejecuta cuando el usuario hace submit
const handleSubmit = e => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    gurdarErrores(erroresValidacion);
    guardarSubmitForm(true);
}

//cuando se hace blur
const handleBlur =() => {
    const erroresValidacion = validar(valores);
    gurdarErrores(erroresValidacion);
}
    return {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange,
        handleBlur
    };
}
 
export default useValidacion;