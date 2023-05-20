import React from "react";

import { MyBag } from '../payment/myBag';
import { Bag } from 'react-bootstrap-icons';
import { Link, Route, Routes } from 'react-router-dom';

export function Accessories() {
    return (
        <div className="App">

        <div class="card" style={{width: '19rem', margin: '5rem'}}>
        <a href="/"><img src="https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?w=740&t=st=1684602618~exp=1684603218~hmac=b3024e0972376bfbfc5e2f96af45a204b53a54f36419227cb87cced64f0cebb0" className="card-img-top product" alt="..." /></a>
        <div className="card-body">
        <h6 className="card-title">MOCKUP white card tight fit</h6>
        <p class="card-text fw-bold">45$</p>
        <div>
        <Link to="/mybag"><button class="btn btn-secondary">Add to bag {<Bag className="icons-margin" />}</button></Link>
        </div>
        </div>
        </div>

        <div class="card" style={{width: '19rem', margin: '5rem'}}>
        <a href="/"><img src="https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?w=740&t=st=1684602618~exp=1684603218~hmac=b3024e0972376bfbfc5e2f96af45a204b53a54f36419227cb87cced64f0cebb0" className="card-img-top product" alt="..." /></a>
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