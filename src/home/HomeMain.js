import React from 'react'

import NavSec from './NavSec';
import Reveal from 'react-reveal/Reveal'
import AboutInfo from './AboutInfo';
import Footer from '../foooter/Footer'


const HomeMain = () => {
    return(
        <>
            <Reveal effect="animNav">
                <NavSec/>
            </Reveal>
            <AboutInfo/>
            <Footer/>
        </>
    )
}

export default HomeMain;