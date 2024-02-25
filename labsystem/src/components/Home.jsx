import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import Footer from './Footer.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Home.css'; // Import the CSS file
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';
import enquiry from '../assets/enquiry.avif';
import Booktest from '../assets/book_test.png';
import Location from '../assets/location.png';
import rupees from '../assets/rupees.webp';
import gdshop from '../assets/gdshop.jpg';
import download from '../assets/download.png';

const Home = () => {
  const images = [
    slider1,
    slider2,
    slider3,
    slider4,
  ];

  const settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: true,
    variableWidth: false,
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Boxes */}
      <div className="container">
        <div className="box">
            <img src={rupees} alt="My Location" className="image-container" />
             <Link to={"/PriceList"} className="link-no-underline" >My Price List</Link>
       
        </div>
        <div className="box">
            <img src={download} alt="My Location" className="image-container" />
               <Link to={"/DownloadReports"} className="link-no-underline" >Download Reports</Link>
         
        </div>
        <div className="box">
             <img src={Location} alt="My Location" className="image-container" />
               <Link to={"/mylocation"} className="link-no-underline" >My location</Link>
         
        </div>
        <div className="box">
            <img src={enquiry} alt="My Location" className="image-container" />
               <Link to={"/Queries"} className="link-no-underline" >Enquiry Details</Link>
        
        </div>
        <div className="box">
            <img src={gdshop} alt="My Location" className="image-container" />
               <Link to={"/Gdshop"} className="link-no-underline" >Gd Shop</Link>
         
        </div>
        <div className="box">
            <img src={Booktest} alt="My Location" className="image-container" />
               <Link to={"/BookTest"} className="link-no-underline" >Book Test</Link>
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
