import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import './App.js';


const stylings = {
  height: '100px',
  width: '100%',
  backgroundColor: 'black',
  fontSize: '50px',
  color: '#00FA9A',
  fontWeight: 'bold',
  display:'flex',
  alignItems: 'center',
}

const stylep={
    marginLeft:'58%',
}

const psty={
  padding: '50px',
}
function Nav(){
    return(<div style={stylings}>
      <p className="glow">Tekion</p>
      <p style={stylep}>
        <a href="http://">About</a>
        <a href="http://">Home</a>
        <a href="http://">Products</a>
        <a href="http://">Careers</a>
      </p>
    </div>)
}

export default Nav;