import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiRedux, SiRubyonrails, SiJavascript, SiPostgresql, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { DiRuby, DiCss3 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai"
import "./develop.css";
import code from "../../images/code.jpg"

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
                <div className='develop-top-div'>
                    <img className='develop-img' src={code} />
                    <div className='develop-stage-div'>
                        <h2 className='develop-stage'>Learning to develop the product</h2>
                    </div>
                    <div className='develop-stage-descrip-div'>
                        <h1 className='develop-stage-time'>OCT 2021 - PRESENT</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                 <div className='develop-stage-skills-div'>
                        <h1 className='develop-stage-skills-header'>SKILLS</h1>
                        <ul className='develop-stage-skills-list'>
                            {skills.map((skill, idx) => (
                                <li key={idx} className="skill">
                                    <span className='skill-icon'>{skill.icon}</span>
                                    {skill.caption}
                                </li>
                            ))}
                        </ul>
                    </div>
                <div className='develop-bottom-div'>
                    <div className='develop-projects-div'>
                        <div className='develop-projects-wrapper'>
                            <div className='develop-project'>
                                <h1 className='project-title'>MEvert</h1>
                                <p className='project-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className='project-links-wrapper'>
                                    <a className='project-link' href="#">LIVE</a>
                                    <a className='project-link' href="#">CODE</a>
                                </div>
                            </div>
                            <div className='develop-project'>
                                <h1 className='project-title'>Pupfinder</h1>
                                <p className='project-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className='project-links-wrapper'>
                                    <a className='project-link' href="#">LIVE</a>
                                    <a className='project-link' href="#">CODE</a>
                                </div>
                            </div>
                            <div className='develop-project'>
                                <h1 className='project-title'>Sumo Poppers</h1>
                                <p className='project-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className='project-links-wrapper'>
                                    <a className='project-link' href="#">LIVE</a>
                                    <a className='project-link' href="#">CODE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>  
        </div>
    )
}


export default Develop