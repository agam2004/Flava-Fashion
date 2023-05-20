import React, { useState } from "react"

import { MyBag } from '../payment/myBag';

import { Bag, Cart } from 'react-bootstrap-icons';
import { Link, Route, Routes } from 'react-router-dom';

export function Tshirts() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <div>
                <butto className="btn btn-secondary">
                    <Cart style={{margin: 'auto 2rem auto auto'}} />
                    <p style={{margin: '-1.3rem 1rem auto 3rem'}}>{count}</p>
                </butto>
            </div>
        <div class="card" style={{width: '19rem', margin: '5rem'}}>
        <Link to="/mybag"><img src="https://img.freepik.com/premium-psd/t-shirt-mockup-stylish-man-black-wall-background_698054-480.jpg?w=360" className="card-img-top product" alt="..." /></Link>
        <div className="card-body">
        <h6 className="card-title">MOCKUP white card tight fit</h6>
        <p class="card-text fw-bold">45$</p>
        <div>
        <button onClick={() => setCount(count + 1)} class="btn btn-secondary">Add to bag {<Bag className="icons-margin" />}</button>

        {/* change to following code to be inside the page of the shirt */}
        <select class="form-select" id="inputGroupSelect01">
        <option selected>Choose color</option>
        <option value="1">Black</option>
        <option value="2">Navy blue</option>
        <option value="3">White</option>
        </select>

        </div>
        </div>
        </div>

        <Routes>
            <Route path="/mybag" element={<MyBag />} />
        </Routes>
        </div>
    )
}