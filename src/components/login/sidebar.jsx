import React, { Component } from 'react'
import { faBusinessTime, faCreditCard, faCube, faDollarSign, faFileAlt, faHome, faPercent, faPhoneAlt, faRecycle, faShoppingCart, faSlidersH, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Button } from 'react-bootstrap';
import {FontAwesomeIcon as Icons} from '@fortawesome/react-fontawesome';


class Sidebar extends Component {
    render(){
        return(
    <Col lg={2}>
        <img width="70%" className="m-auto d-block" src="../Logo-Test.png" alt=""></img>
        <ul className="sidebar">
            <Button><Icons icon={faHome }/>Escritorio</Button>
            <h6>Ventas</h6>
            <Button><Icons icon={faPhoneAlt }/>Prospectos</Button>
            <Button><Icons icon={ faFileAlt }/>Cotizaciones</Button>
            <Button><Icons icon={faUser }/>Clientes</Button>
            <Button><Icons icon={faBusinessTime }/>Motor</Button>
            <Button><Icons icon={faDollarSign }/>Cobranza</Button>
            <h6>Costos</h6>
            <Button><Icons icon={faShoppingCart }/>Compras</Button>
            <Button><Icons icon={faCube }/>Caja chica</Button>
            <Button><Icons icon={faPercent }/>Comisiones</Button>
            <h6>Operaciones</h6>
            <Button><Icons icon={faHome }/>Proyectos</Button>
            <h6>Contabilidad</h6>
            <Button><Icons icon={faCreditCard }/>Cuentas</Button>
            <Button><Icons icon={faRecycle }/>Gastos</Button>
            <h6>Ajustes</h6>
            <Button className="active"><Icons icon={faUserAlt }/>Usuarios</Button>
            <Button><Icons icon={faSlidersH }/>Preferencias</Button>
        </ul>
    </Col>
        )
    }
}

export default Sidebar;
