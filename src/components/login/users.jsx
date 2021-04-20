import React, { Component } from 'react';
import { Col, Row, Breadcrumb , Button } from 'react-bootstrap';
import { faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as Icons} from '@fortawesome/react-fontawesome';
import Sidebar from './sidebar';
import Navibar from './navbar';

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
            <div class="col-xl-4 d-inline-flex dd">
                <div class="usersz">
                    <img class="img-us" src="/image006.jpg" alt=""/>
                    <div class="back-white">
                      <div class="names-us">${users.name}</div>
                      <div class="medio">
                      <span class="user-us">${users.username}</span>
                      <span class="spm">-</span>
                      <span class="city-us">${users.address.city}</span>
                      </div>
                      <p class="type-us">User</p>
                    </div>
                </div>
            </div>
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
        <Sidebar/>
        <Col className="b-gray px-5 py-2" lg={10}>
            <Navibar/>
        <div class="d-flex users-c">
            
            <h1>Usuarios</h1>
            
            <Breadcrumb>
                <Breadcrumb.Item href="#"><Icons icon={faHome}/></Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Ajustes
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Usuarios</Breadcrumb.Item>
            </Breadcrumb>
            
            <Button className="add-us">
                <Icons icon={faUserPlus}/>
                Agregar Usuario
            </Button>
        </div>

        
            <div id="users">
            </div>

        </Col>
    </Row>
    );
  }
}

export default Users;

