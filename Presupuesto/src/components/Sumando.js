import React from 'react'
import PropTypes from 'prop-types'


const Sumando = ({presupuesto,restante}) => {

    var sumale = presupuesto - restante;

    return (
        <div className="alert alert-success">
            <label>Suma de gastos: {sumale}</label>
        </div>
    );
}

Sumando.protoTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default Sumando;