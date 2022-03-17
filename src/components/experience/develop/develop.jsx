import { useState, useRef, useEffect } from 'react';
import "./css/develop.css";
import line from "../../../images/svg/line.svg"
import ProjectCard from './animations/projects';
import Skills from './animations/skills';
import useIntersection from '../../_utils/useIntersection';
import DevelopHeaders from './animations/developheaders';
import DevelopCircle from './animations/developcircle';
import ScrollDown from "../../_utils/scrolldown";

const Develop = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '1.0');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='develop-outer-div' id="develop-container" >
            <div className='develop-inner-div' >
                <div className='develop-top-div' ref={ref}>
                    <DevelopHeaders visible={visible}/>      
                </div>
                <Skills visible={visible} />
                <h1 className='develop-stage-project-header'>PROJECTS I'VE DONE</h1>
                <div className='develop-projects-wrapper' >
                    <div className='develop-projects-card-div'>
                       <ProjectCard 
                        title={'Pupfinder'} 
                        visible={visible}
                        descrip={'Reimagination of Petfinder.com as a dynamic new way to connect prospective dog owners with adoptable pups.'}
                        live={'https://pupfinderapp.herokuapp.com/#/'}
                        code={'https://github.com/annkim10/pupfinder'}
                        />
                        </div>
                    <div className='develop-projects-card-div'>
                        <ProjectCard 
                            title={'MEvert'} 
                            visible={visible}
                            descrip={'Platform for users to carpe diem, their way, with curated activity suggestions, resources and planning tools '}
                            live={'https://mevert.herokuapp.com/#/'}
                            code={'https://github.com/annkim10/mevert'}
                        />
                    </div>
                </div>
                {/* <ScrollDown visible={visible} idName={'develop-scroll'}/> */}
            </div>  
        </div>
    )
}


export default Develop
