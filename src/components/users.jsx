import React, { Component } from 'react';
import { Col, Row, Breadcrumb , Button } from 'react-bootstrap';
import { faBell, faBusinessTime, faCreditCard, faCube, faDollarSign, faFileAlt, faHome, faPercent, faPhoneAlt, faRecycle, faSearch, faShoppingCart, faSlidersH, faUser, faUserAlt, faUserCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as Icons} from '@fortawesome/react-fontawesome';


class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
          let html = '';
          data.forEach(function(users){
            html += `
                <tr>
                    <td>${users.website}</td>
                    <td>${users.name}</td>
                    <td>${users.username}</td>
                    <td>${users.phone}</td>
                </tr>
                
            `;
            document.getElementById('users').innerHTML = html;
          })
      });
  }

render(){
  const {nombre} = this.state;
  console.log(nombre);

    return (
        <Row noGutters className="users">
        <Col lg={2}>
            <img width="70%" className="m-auto d-block" src="../Logo-Test.png" alt=""></img>
            <ul className="sidebar">
                <li><Icons icon={faHome }/>Escritorio</li>
                <h6>Ventas</h6>
                <li><Icons icon={faPhoneAlt }/>Prospectos</li>
                <li><Icons icon={ faFileAlt }/>Cotizaciones</li>
                <li><Icons icon={faUser }/>Clientes</li>
                <li><Icons icon={faBusinessTime }/>Motor</li>
                <li><Icons icon={faDollarSign }/>Cobranza</li>
                <h6>Costos</h6>
                <li><Icons icon={faShoppingCart }/>Compras</li>
                <li><Icons icon={faCube }/>Caja chica</li>
                <li><Icons icon={faPercent }/>Comisiones</li>
                <h6>Operaciones</h6>
                <li><Icons icon={faHome }/>Proyectos</li>
                <h6>Contabilidad</h6>
                <li><Icons icon={faCreditCard }/>Cuentas</li>
                <li><Icons icon={faRecycle }/>Gastos</li>
                <h6>Ajustes</h6>
                <li className="active"><Icons icon={faUserAlt }/>Usuarios</li>
                <li><Icons icon={faSlidersH }/>Preferencias</li>
            </ul>
        </Col>

        <Col className="b-gray px-5 py-2" lg={10}>
            <nav className="d-flex exp">
                <li><Icons icon={ faSearch }/></li>
                <li><Icons icon={ faBell }/></li>
                <li className="name-us">
                    <p className="name-usp">Guillermo G.</p>
                    <p>SuperAdmin</p>
                </li>
                <li className="icon-us"><Icons icon={ faUserCircle }/></li>
            </nav>
            <div class="d-flex users-c">
            
            <h1>Usuarios</h1>
            
            <Breadcrumb>
                <Breadcrumb.Item href="#"><Icons icon={faHome}/></Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            
            <Button className="add-us">
                <Icons icon={faUserPlus}/>
                Agregar Usuario
            </Button>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>Website</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody id="users">
            </tbody>
        </table>

        </Col>
    </Row>
    );
  }
}

export default Users;

