import React from 'react'
import PropTypes from 'prop-types'


const Gasto = ({gasto,eliminarGasto}) => {
    return (
        <li className="gastos">
            <p>
                {gasto.nombre}
                <span className="gasto">$ {gasto.cantidad}</span>
            </p>
            <input type="button" value="Eliminar" onClick={() => eliminarGasto(gasto.id)}></input>
        </li>
    );
}

Gasto.protoTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;