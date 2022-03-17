import { useRef, useState, useEffect } from 'react';
import useIntersection from '../../../_utils/useIntersection';
import { FaReact } from "react-icons/fa";
import { SiRedux, SiRubyonrails, SiJavascript, SiPostgresql, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { DiRuby, DiCss3 } from "react-icons/di";
import { AiOutlineHtml5} from "react-icons/ai"
import "../css/develop.css";
import { useTrail, useSprings, config, easings, animated as a } from "react-spring"


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
        fontSize: visible ? '1.5em' : '0em',
        marginTop: visible ? 0 : -50, 
        delay: 500,
        config: {
            mass: 1,
            tension: 100,
            friction: 80,
            duration: 500,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <a.div className='develop-stage-bottom-div'>
            <h1 className='develop-stage-skills-header'>SKILLS I'VE LEARNED</h1>
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