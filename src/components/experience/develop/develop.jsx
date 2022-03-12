import { useState, useRef, useEffect } from 'react';
import { useSpring, config, animated as a } from "react-spring"
import "./css/develop.css";
import line from "../../../images/svg/line.svg"
import circle from "../../../images/svg/purple-circle.svg"
import ProjectCard from './animations/projects';
import Skills from './animations/skills';
import useIntersection from '../../_utils/useIntersection';
import DevelopHeaders from './animations/developheaders';
import DevelopCircle from './animations/developcircle';

const Develop = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '1.0');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='develop-outer-div'>
            <div className='develop-inner-div'>
                <DevelopCircle visible={visible} />
                <h1 className='develop-time'> OCT 2021 - PRESENT</h1>
                <img className='line' src={line} ref={ref} />
                <div className='develop-top-div'>
                    <DevelopHeaders visible={visible}/>
                    <div className='develop-projects-wrapper' >
                        <div className='develop-projects-card-div'>
                            <ProjectCard title={'Pupfinder'} visible={visible}/>
                        </div>
                        <div className='develop-projects-card-div'>
                            <ProjectCard title={'MEvert'} visible={visible}/>
                        </div>
                    </div>
                </div>
                <Skills visible={visible} />
            </div>  
        </div>
    )
}


export default Develop