import React from "react";

import { MyBag } from '../payment/myBag';
import { Bag } from 'react-bootstrap-icons';
import { Link, Route, Routes } from 'react-router-dom';

export function Hoodies() {
    return (
        <div className="App">
        <div class="card" style={{width: '19rem', margin: '5rem'}}>
        <a href="/"><img src="https://img.freepik.com/premium-psd/t-shirt-mockup-stylish-man-black-wall-background_698054-480.jpg?w=360" className="card-img-top product" alt="..." /></a>
        <div className="card-body">
        <h6 className="card-title">MOCKUP white card tight fit</h6>
        <p class="card-text fw-bold">45$</p>
        <div>
        <Link to="/mybag"><button class="btn btn-secondary">Add to bag {<Bag className="icons-margin" />}</button></Link>
        </div>
        </div>
        </div>

        <Routes>
            <Route path="/mybag" element={<MyBag />} />
        </Routes>
        </div>
    )
}