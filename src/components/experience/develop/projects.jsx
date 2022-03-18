import { useState, useRef, useEffect } from 'react';
import "./css/projects.css";
import ProjectCard from './animations/project-cards';
import useIntersection from '../../_utils/useIntersection';
import ScrollDown from "../../_utils/scrolldown";

const Projects = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef(null);

    const visible = useIntersection(ref, '0px', '1.0');

    useEffect(() => visible ? setLoad(true) : "")

    console.log("projects", visible)
    console.log("ref", ref)

    return (
        <div className='projects-outer-div' id="projects-container" >
            <div className='projects-inner-div'>
                <h1 className='develop-stage-project-header' ref={ref} >PROJECTS I'VE DONE</h1>
                <div className='develop-projects-wrapper'>
                    <div className='develop-projects-card-div'>
                       <ProjectCard 
                        title={'Pupfinder'} 
                        visible={true}
                        descrip={'Reimagination of Petfinder.com as a dynamic new way to connect prospective dog owners with adoptable pups.'}
                        live={'https://pupfinderapp.herokuapp.com/#/'}
                        code={'https://github.com/annkim10/pupfinder'}
                        />
                        </div>
                    <div className='develop-projects-card-div'>
                        <ProjectCard 
                            title={'MEvert'} 
                            visible={true}
                            descrip={'Platform for users to carpe diem, their way, with curated activity suggestions, resources and planning tools '}
                            live={'https://mevert.herokuapp.com/#/'}
                            code={'https://github.com/annkim10/mevert'}
                        />
                    </div>
                    <div className='develop-projects-card-div'>
                        <h1>(Oh and this website too)</h1>
                    </div>
                </div>
                {/* <ScrollDown visible={visible} idName={'develop-scroll'}/> */}
            </div>  
        </div>
    )
}


export default Projects
