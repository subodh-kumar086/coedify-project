import React from 'react';
import "./style.css"
import Navbar from '../../components/Navbar/Navbar';
import Data from '../../components/Data/Data';
import Header from '../../components/Header/Header';
import Crousel from '../../components/Crousel/Crousel';


function Home() {
    return (
        <>

            <Navbar/>
            <Header/>
            <Data/>
            <hr/>
            <Crousel/>

            
        </>
    )
}

export default Home
