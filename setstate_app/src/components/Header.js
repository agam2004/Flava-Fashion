import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="/"><img src="https://www.shutterstock.com/image-vector/black-head-medusa-circle-logo-600w-1678668622.jpg" id="logo" alt ="Flava" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navlinks" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Catalog
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item text-white bg-danger" href="#">Sale</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Accessories</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Jeanses</a></li>
                  <li><a className="dropdown-item" href="#">Shorts</a></li>
                  <li><a className="dropdown-item" href="#">Joggers</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">T-shirts</a></li>
                  <li><a className="dropdown-item" href="#">Sleevs</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Hoodies</a></li>
                  <li><a className="dropdown-item" href="#">Coats</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Shoes</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="I am looking for..." aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}