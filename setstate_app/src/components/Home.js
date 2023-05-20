import { Facebook, Instagram, Tiktok, Pinterest, Youtube, Twitter, PinAngle } from "react-bootstrap-icons";

import { Link, Route, Routes } from 'react-router-dom';

import { Sale } from './Sale';

export default function Home(){
    return(
        <div className="App">
        <h1 className="home_topic">Flava Fashion</h1>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div className="carousel-inner summer-carousel">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/gradient-hello-summer-sale-illustration_52683-61659.jpg?size=626&ext=jpg&ga=GA1.1.1767561594.1684511546&semt=ais" className="d-block summer-sale-post" alt="..." />
      <div className="carousel-caption d-none d-md-block first-slide-summer">
        <h6>Summer sale is here!</h6>
        <Link to="/catalog/sale" className="summer-links"><p>Click here for sales</p></Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-psd/super-offer-creative-sale-banner-design-template_47987-13073.jpg?w=740&t=st=1684519758~exp=1684520358~hmac=e9f2177f36976b55bda26d99d1fe5a8c4938ff495ef0f52f00ec3ead3a3ffd40" className="d-block summer-sale-post" alt="..." />
      <div className="carousel-caption d-none d-md-block first-slide-summer">
        <h6>Last chance! Get up to 40% off</h6>
        <Link to="/catalog/sale" className="summer-links"><p>Use code: FLAVA40</p></Link>
      </div>
    </div>
  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-secondary carousel-navigation" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-secondary carousel-navigation" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        { /* The following shirt card should move to the 'T-shirt' page

        <div className="card" style={{width: '19rem', margin: '5rem', marginTop: '50rem'}}>
        <a href="/"><img src="https://img.freepik.com/premium-psd/t-shirt-mockup-stylish-man-black-wall-background_698054-480.jpg?w=360" className="card-img-top product" alt="..." /></a>
        <div className="card-body">
        <h6 className="card-title">MOCKUP white card tight fit</h6>
        <p className="card-text">45$</p>
        <a href="#" className="btn btn-secondary">Add to bag</a>
        </div>
        </div>
        */}
    
    <h5 className="social-navigate">Search us in: </h5>
    
    <div className="social-icons">
        <a href="https://facebook.com"><Facebook className="icons-margin" /></a>
        <a href="https://instagram.com"><Instagram className="icons-margin" /></a>
        <a href="https://tiktok.com"><Tiktok className="icons-margin" /></a>
        <a href="https://pinterest.com"><Pinterest className="icons-margin" /></a>
        <a href="https://youtube.com"><Youtube className="icons-margin" /></a>
        <a href="https://twitter.com"><Twitter className="icons-margin" /></a>
    </div>

    <Routes>
        <Route path="/catalog/sale" element={<Sale />} />
        <Route path="/catalog/sale" element={<Sale />} />
    </Routes>
    </div>
    )
}