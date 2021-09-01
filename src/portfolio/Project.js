import React, {useState, useEffect} from 'react';
import {Col, Container, Row} from 'reactstrap'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
// import AddLinkIcon from '@material-ui/icons/AddLink';
import db from '../firebase/config'


const Project = () => {



    const [projects, setProjects] = useState([])

            useEffect(() => {
                db.collection("project").onSnapshot((snapshot) => 
                setProjects(snapshot.docs.map((doc) => doc.data()))
                )
            }, [])





    return (

        <>
            <Container>
                <Row>
                    {projects.map((project, index) =>(
                        <Col md="12" key={index}>
                            <div className="projectCard">
                                <img className="projectImage" src={project.image} alt="portfolio image"/>
                                <div className="projectInfo">
                                    <div className="projectAbout">
                                        <h3 className="projectName">{project.ProjectName}</h3>
                                        <p className="projectPara">{project.projectDec}</p>
                                    </div>
                                    <div className="projectButtons">
                                        <a href={project.code} target="_blank" className="nuttons">
                                            Sourse <GitHubIcon/>
                                        </a>
                                        <a href={project.netlify} target="_blank" className="nuttons">
                                            Netlify  <LinkIcon/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Project;