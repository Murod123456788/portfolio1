import React, {useState, useEffect} from 'react'
import db from '../firebase/config'
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom'
import Reveal from 'react-reveal/Reveal'



const AboutInfo = () => {


    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        db.collection("portfolio").onSnapshot((snapshot) => 
            setPortfolios(snapshot.docs.map((doc) => doc.data()))
        )
    }, [])


   return (

   
       <div className="aboutInfo1"> 
           {portfolios.map(portfolio => (
               <>
                    <div className="side2">
                        <img className="images" src={portfolio.images} alt="my image"/>
                    </div>
                    <div className="side1">
                      <Reveal effect="fadeInUp" duration="1250">
                        <h1 className="title">{portfolio.title}</h1>
                        <p className="description"> {portfolio.description} </p>
                      </Reveal>
                        <div className="buttons">
                            <Link className="linkBtn" to="/about-me">
                                About me
                            </Link>
                            <Link className="linkBtn" to="/portfolio">
                                Portfolio
                            </Link>
                        </div>
                        <div className="socialNet">
                            <a className="links" href="#" target="_blank">
                                <TelegramIcon className="nets"/>
                            </a>
                            <a className="links" href="https://github.com/Murod123456788" target="_blank">
                                <GitHubIcon className="nets"/>
                            </a>
                        </div>
                    </div>
               </>
           ))}
       </div>
   )
}

export default AboutInfo;