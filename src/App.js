import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //CITAS EN LOCAL STORAGE
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  //ARREGLO DE CITAS
  const [citas, guardarCitas] = useState (citasIniciales);

  //USEEFFECT PARA LAS OPERACIONES CUANDO EL EFFECT CAMBIA
  useEffect ( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas] );

  //FUNCION QUE TOME LAS CITAS ACTUALES Y AGREGUE LA NUEVA
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  //FUNCION QUE ELIMINA UNA CITA POR SU ID
  const eliminarCita = id => {
    const nuevaCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevaCitas);
  }

  //MENSAJE CONDICIONAL
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <Fragment>
      <h1>Administrar Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
