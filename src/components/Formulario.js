import React, { Fragment, useState } from 'react';

const Formulario = () => {

    //CREAR STATE DE CITAS
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //FUNCION CUANDO EL USUARIO ESCRIBE EN EL FORMULARIO
    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //EXTRAER LOS VALORES
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //CUANDO PRESIONE AGREGAR CITA
    const submitCita = e => {
        e.preventDefault();

        //VALIDAR LOS CAMPOS DEL FORMULARIO


        //ASIGNAR UN ID

        //CREAR LA CITA

        //REAINICIAR EL FORM
    }
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >AGREGAR CITA</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;