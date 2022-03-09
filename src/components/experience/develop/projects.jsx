import React from "react"
import gif from "../../../images/pupfinder-splash.gif"
import "./projects.css"

const ProjectCard = ({title}) => {

    return (
        <div className="projects-card-wrapper">
                <div className="projects-card-body">
                    <img src={gif} className="projects-gif"/>
                    <div className="projects-card-text">
                        <h1 className="projects-card-header">PROJECT</h1>
                        <h1 className="projects-card-name">{title}</h1>
                        <ul className="projects-description">
                            <li className="pup-card-age">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                    </div>
                </div>
                <div className="projects-links-wrapper">
                    <a className="projects-link" href="#">LIVE</a>
                    <a className="projects-link" href="#">CODE</a>
                </div>       
        </div>
    )

}

export default ProjectCard