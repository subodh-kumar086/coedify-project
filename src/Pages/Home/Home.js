import React from 'react';
import "./style.css"
import Navbar from '../../components/Navbar/Navbar';
import Data from '../../components/Data/Data';
import Header from '../../components/Header/Header';
import Crousel from '../../components/Crousel/Crousel';
import Testimonial from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer/Footer';


function Home() {
    return (
        <>

            <Navbar/>
            <Header/>
            <Data/>
            <hr/>
            <Crousel/>
            <hr/>
            <Testimonial/>
            <Footer/>

            
        </>
    )
}

export default Home
