import React from "react"
import pup1 from "../../../../images/projects/pup1.png"
import pup2 from "../../../../images/projects/pup2.jpg"
import pup3 from "../../../../images/projects/pup3.jpg"
import me1 from "../../../../images/projects/me1.png"
import me2 from "../../../../images/projects/me2.png"
import me3 from "../../../../images/projects/me3.png"
import me4 from "../../../../images/projects/me4.png"

import { useSpring, config, easings, animated as a, useTransition, useSpringRef } from "react-spring"
import "../css/projects.css"


const ProjectImgs = ( { title }) => {

    const pupImgs = [ pup1, pup2, pup3 ]
    const meImgs = [ me1, me2, me3, me4 ]

    return (
        <div className="projects-img-outer-wrapper">
            <div className="projects-img-inner-wrapper">
                { title === 'Pupfinder' ? pupImgs.map((img, idx) =>  <img key={idx} src={img} className="project-img"/> ) :
                meImgs.map((img, idx) =>  <img key={idx} src={img} className="project-img"/> ) }
            </div>
        </div>
    )


}

export default ProjectImgs