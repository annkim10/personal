import React from "react"
import pupfinder from "../../../../images/pupfinder-splash.gif"
import mevert from "../../../../images/calendar.gif"
import { useSpring, config, easings, animated as a, useTransition, useSpringRef } from "react-spring"
import "../css/projects.css"

const ProjectCard = ({title, visible, descrip, live, code}) => {

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        delay: 800,
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
            <a.div className="projects-card-wrapper" style={animate}>
                <div className="projects-card-body"> 
                    <img src={ title === 'Pupfinder' ? pupfinder : mevert } className="projects-gif"/>
                    <div className="projects-card-text-wrapper">
                        <h1 className="projects-card-header">PROJECT</h1>
                        <h1 className="projects-card-name">{title}</h1>
                        <p className="projects-card-descrip">{descrip}</p>
                    </div>
                    <div className="projects-links-wrapper">
                        <a className="projects-link" href={live} target="_blank">LIVE</a>
                        <a className="projects-link" href={code} target="_blank">CODE</a>
                    </div> 
                </div>
            </a.div>
        </div>
    )

}

export default ProjectCard