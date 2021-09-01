
import React, {useState, useEffect} from 'react';
import db from '../firebase/config'

const Main = () => {

    const [abouts, setAbouts] = useState([])

            useEffect(() => {
                db.collection("about").onSnapshot((snapshot) => 
                setAbouts(snapshot.docs.map((doc) => doc.data()))
                )
            }, [])




    return (
        <div className="info">
          {abouts.map((about) => (
             <>
                 <img src={about.image3} alt="My Image" className="myImage"/>             
                 <span>
                     <p className="aboutmeText">
                        {about.text1}
                        <div>
                            <b>
                                {about.boldText}
                            </b>
                        </div>
                        {about.text2}
                     </p>
                 </span>
            </> 
          ))}
        </div>
    )
}

export default Main;