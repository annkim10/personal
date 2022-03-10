import React from 'react';
import "./css/develop.css";
import line from "../../../images/line.svg"
import ProjectCard from './projects';
import Skills from './animations/skills';


const Develop = () => {


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
                    <div className='develop-projects-wrapper'>
                        <div className='develop-projects-card-div'>
                            <ProjectCard title={'Pupfinder'}/>
                        </div>
                        <div className='develop-projects-card-div'>
                            <ProjectCard title={'MEvert'}/>
                        </div>
                    </div>
                </div>
                <Skills />
            </div>  
        </div>
    )
}


export default Develop