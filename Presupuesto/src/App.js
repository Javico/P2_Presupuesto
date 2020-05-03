import React, { Fragment, useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto,guardarCrearGasto] = useState(false);

  // useEffect que actualiza el restante
  useEffect(() => {
    if(crearGasto){

      // agrega nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      // resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      guardarCrearGasto(false);
    }
  }, [gasto,crearGasto,gastos,restante]);

  // // cuando agreguemos un nuevo gasto
  // const agregarNuevoGasto = (gasto) => {
  //   //console.log(gasto);
  //   guardarGastos([
  //     ...gastos,
  //     gasto
  //   ]);
  // }

  return (
    <Fragment>
      <div className="container">
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {
            mostrarPregunta ?
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              ></Pregunta>
            :
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    //agregarNuevoGasto={agregarNuevoGasto}
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                    restante={restante}
                  ></Formulario>
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                    presupuesto={presupuesto}
                    restante={restante}
                    guardarGastos={guardarGastos}
                    guardarRestante={guardarRestante}
                  ></Listado>
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  ></ControlPresupuesto>
                </div>
              </div>
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
