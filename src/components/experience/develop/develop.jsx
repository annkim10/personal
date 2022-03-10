import { useState, useRef, useEffect } from 'react';
import { useSpring, config, animated as a } from "react-spring"
import "./css/develop.css";
import line from "../../../images/line.svg"
import ProjectCard from './animations/projects';
import Skills from './animations/skills';
import useIntersection from '../../_utils/useIntersection';
import DevelopHeaders from './animations/headers';

const Develop = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px');

    useEffect(() => visible ? setLoad(true) : "")
    
    const animateDown = useSpring({
        opacity: visible ? 1 : 0,
        marginTop: visible ? 0 : -500, 
        config: config.slow
    })

    return (
        <div className='develop-outer-div'>
            <div className='develop-inner-div'>
                <h1 className='develop-time' ref={ref} >OCT 2021 - PRESENT</h1>
                <img className='line' src={line} />
                <div className='develop-top-div'>
                    <DevelopHeaders visible={visible}/>
                    {/* <div className='develop-text-wrapper'>
                        <h1 className='develop-header'>Learning to <span>develop</span> the product</h1>
                        <p className='develop-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> */}
                    <div className='develop-projects-wrapper' >
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