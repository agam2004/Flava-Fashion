import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './Home'
import { About } from './About';
import { Contact } from './Contact';
import  { Catalog } from './Catalog';


import  { Sale }  from './Sale';
import  { Accessories } from './clothes/accessories';
import { Jeanses } from './clothes/jeanses';
import { Shorts } from './clothes/shorts';
import { Sleeves } from './clothes/sleeves'; 
import  { Joggers } from './clothes/joggers';
import  { Tshirts } from './clothes/t-shrits';
import  { Shoes } from './clothes/shoes';
import { Coats } from './clothes/coats';
import { Hoodies } from './clothes/hoodies'


export default function Header() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img src="https://www.shutterstock.com/image-vector/black-head-medusa-circle-logo-600w-1678668622.jpg" id="logo" alt ="Flava" />
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="Flava/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navlinks" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="Flava/About_us">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="Flava/Contact">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle fw-bold" to="Flava/catalog" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Catalog
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item text-white bg-danger" to="/catalog/sale">Sale</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/catalog/accessories">Accessories</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/catalog/jeans">Jeanses</Link></li>
                  <li><Link className="dropdown-item" to="/catalog/shorts">Shorts</Link></li>
                  <li><Link className="dropdown-item" to="/catalog/joggers">Joggers</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/catalog/t-shirts">T-shirts</Link></li>
                  <li><Link className="dropdown-item" to="/catalog/sleeves">Sleeves</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/catalog/hoodies">Hoodies</Link></li>
                  <li><Link className="dropdown-item" to="/catalog/coats">Coats</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/catalog/shoes">Shoes</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="I am looking for..." aria-label="Search"></input>
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Flava/About_us" element={<About />} />
        <Route path="Flava/Contact" element={<Contact />} />
        <Route path="Flava/catalog" element={<Catalog />} />

        <Route path="/catalog/sale" element={<Sale />} />
        <Route path="/catalog/accessories" element={<Accessories />} />
        <Route path="/catalog/sleeves" element={<Sleeves />} />
        <Route path="/catalog/jeans" element={<Jeanses />} />
        <Route path="/catalog/shorts" element={<Shorts />} />
        <Route path="/catalog/joggers" element={<Joggers/>} />
        <Route path="/catalog/t-shirts" element={<Tshirts/>} />
        <Route path="/catalog/shoes" element={<Shoes />} />
        <Route path="/catalog/coats" element={<Coats />} />
        <Route path="/catalog/hoodies" element={<Hoodies />} />
    </Routes>

    </div>
  );
}