import { useRef, useState, useEffect } from 'react';
import useIntersection from '../../../_utils/useIntersection';
import { FaReact } from "react-icons/fa";
import { SiRedux, SiRubyonrails, SiJavascript, SiPostgresql, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { DiRuby, DiCss3 } from "react-icons/di";
import { AiOutlineHtml5} from "react-icons/ai"
import "../css/develop.css";
import { useTrail, useSpring, config, easings, animated as a } from "react-spring"


const Skills = ( { visible } ) => {

     const skills = [
        {icon: <FaReact />, caption: 'React'},
        {icon: <SiRedux />, caption: 'Redux'},
        {icon: <SiJavascript />, caption: 'Javascript'},
        {icon: <AiOutlineHtml5 />, caption: 'HTML'},
        {icon: <DiCss3 />, caption: 'CSS'},
        {icon: <SiRubyonrails />, caption: 'Rails'},
        {icon: <SiExpress />, caption: 'Express'},
        {icon: <SiMongodb />, caption: 'MongoDB'},
        {icon: <DiRuby />, caption: 'Ruby'},
        {icon: <SiPostgresql />, caption: 'PostgreSQL'},
        {icon: <SiNodedotjs />, caption: 'Node'}
    ]

    const trail = useTrail(skills.length, {
        opacity: visible ? 1 : 0,
    })

    const up = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0%)' : 'translateY(50%)',
        config: {
            mass: 1,
            tension: 200,
            friction: 180,
            duration: 1000,
            easing: easings.easeInOutBack
        }
    })

    return (
        <a.div className='develop-stage-skills-wrapper'>
            <a.div style={up}>
                <h1 className='develop-stage-skills-header'>Skillset</h1>
            </a.div>
            <ul className='develop-stage-skills-list'>
                {trail.map((styles, idx) => {
                    return (
                        <a.div className='develop-skill-wrapper' key={idx} style={styles}>
                            <li key={idx} className="skill">
                                <span id='skill-icon'>{skills[idx].icon}</span>
                                <p>{skills[idx].caption}</p>
                            </li>
                        </a.div>
                    )
                })}
            </ul>
        </a.div>     
    )

}

export default Skills