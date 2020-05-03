import React from 'react'
import Gasto from './Gasto';
import PropTypes from 'prop-types'
import Sumando from './Sumando';

const Listado = ({gastos,presupuesto,restante,guardarGastos,guardarRestante}) => {

    const eliminarGasto = (id) => {
        const nuevaListaDeGastos = gastos.filter(gasto => gasto.id !== id);
        let cantidadDelGasto = gastos.filter(gasto => gasto.id === id);
        // console.log(cantidadDelGasto);
        // console.log(restante);
        const presupuestoRestante = restante + cantidadDelGasto[0].cantidad;
        //console.log(presupuestoRestante);
        guardarRestante(presupuestoRestante);
        guardarGastos(nuevaListaDeGastos);
    }

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            <Sumando
                presupuesto={presupuesto}
                restante={restante}
            ></Sumando>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    eliminarGasto={eliminarGasto}
                ></Gasto>
            ))}
        </div>
    );
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired,
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default Listado;