import React from 'react';
import NavSec from '../home/NavSec'
import SetUpMain from './SetUpMain'
import Reveal from 'react-reveal/Reveal'
import PageInfo from './PageInfo'
import Footer from '../foooter/Footer'

const SetUp = () => {
    return (
        <>
            <Reveal effect="animNav" duration="750">
                <NavSec/>
            </Reveal>
            <Reveal effect="fadeInUp" duration="1250">
                <PageInfo/>
            </Reveal>
            <SetUpMain/>
            <Footer/>
        </>
    )
}

export default SetUp;