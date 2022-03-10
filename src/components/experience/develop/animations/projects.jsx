import React from "react"
import gif from "../../../../images/pupfinder-splash.gif"
import { useTrail, config, easings, animated as a, useTransition } from "react-spring"
import "../css/projects.css"
import { defineHidden } from "@react-spring/shared"

const ProjectCard = ({title, visible}) => {

    const projects = [
        {
            title: title, 
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
            live: '#',
            code: '#'
        }    
    ]

    const trail = useTrail(projects.length, {
        opacity: visible ? 1 : 0,
        // // y: visible ? 0 : 50, 
        delay: 800,
        // transform: visible ? 'scaleY(1)' : 'scaleY(0.5)',
        // contentVisibility: visible ? 'visible' : 'hidden', 
        config: {
            mass: 1,
            tension: 50,
            friction: 10,
            duration: 2000,
            easing: easings.easeInBack
        }
    })


    return (
        <div className="projects-card-outer-wrapper">
                {trail.map((styles, idx) => {
                    return (
                        <a.div className="projects-card-wrapper" style={styles} key={idx}>
                            <div className="projects-card-body"> 
                                <img src={gif} className="projects-gif"/>
                                <div className="projects-card-text-wrapper">
                                    <h1 className="projects-card-header">PROJECT</h1>
                                    <h1 className="projects-card-name">{projects[idx].title}</h1>
                                    <p className="projects-card-descrip">{projects[idx].descrip}</p>
                                </div>
                                <div className="projects-links-wrapper">
                                    <a className="projects-link" href={projects[idx].live}>LIVE</a>
                                    <a className="projects-link" href={projects[idx].code}>CODE</a>
                                </div> 
                            </div>
                        </a.div>
                    )
                })}

        </div>
    )

}

export default ProjectCard