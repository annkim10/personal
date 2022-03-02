import React from "react"
import gif from "../../../images/pupfinder-splash.gif"
import "./projects.css"

const ProjectCard = () => {

    return (
        <div className="projects-card-wrapper">
                <div className="projects-card-body">
                    <img src={gif} className="projects-gif"/>
                    <div className="pup-card-text">
                        <h1 className="pup-card-name">title</h1>
                        <ul className="pup-card-description">
                            <li className="pup-card-age">asdfsdf</li>
                            <li className="pup-card-breed">asdf</li>
                        </ul>
                    </div>
                </div>       
        </div>
    )

}

export default ProjectCard