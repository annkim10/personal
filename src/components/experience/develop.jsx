import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiRedux, SiRubyonrails, SiJavascript, SiPostgresql, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { DiRuby, DiCss3 } from "react-icons/di";
import { AiOutlineHtml5} from "react-icons/ai"
import "./develop.css";
import line from "../../images/line.svg"
import code from "../../images/code2.jpg"
import aa from "../../images/aalogo.png"

const Develop = () => {

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
        {icon: <SiNodedotjs />, caption: 'Node'},
    ]

    return (
        <div className='develop-outer-div'>
            <div className='develop-inner-div'>
                <h1 className='develop-time'>OCT 2021 - PRESENT</h1>
                <img className='line' src={line} />
                <div className='develop-top-div'>
                    <div className='develop-text-wrapper'>
                        <h1 className='develop-header'>Learning to <span>develop</span> the product</h1>
                        <p className='develop-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  
                </div>
                <div className='develop-stage-bottom-div'>
                    <h1 className='develop-stage-skills-header'>SKILLS</h1>
                    <ul className='develop-stage-skills-list'>
                        {skills.map((skill, idx) => (
                            <li key={idx} className="skill">
                                <span id='skill-icon'>{skill.icon}</span>
                                <p>{skill.caption}</p>
                            </li>
                        ))}
                    </ul>
                </div>                
            </div>  
        </div>
    )
}


export default Develop