import { useState, useRef, useEffect } from 'react';
import "./css/projects.css";
import ProjectCard from './animations/project-cards';
import useIntersection from '../../_utils/useIntersection';
import { useSpring, config, easings, animated as a } from "react-spring"
import { BsArrowRight } from "react-icons/bs"

const Projects = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef(null);

    const visible = useIntersection(ref, '0px', '0.3');

    useEffect(() => visible ? setLoad(true) : "")

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
        <div className='projects-outer-div' id="projects-container" >
            <div className='projects-inner-div' ref={ref}>
                <a.div className='develop-stage-project-header-wrapper' style={up}>
                    <h1 className='develop-stage-project-header'>
                       <span>PROJECTS I'VE DONE • PROJECTS I'VE DONE • PROJECTS I'VE DONE </span>
                    </h1>
                </a.div>      
                <div className='develop-projects-wrapper' >
                    <a.div className='develop-projects-card-div' style={up}>
                       <ProjectCard 
                        title={'Pupfinder'} 
                        visible={true}
                        descrip={'Reimagination of Petfinder.com as a dynamic new way to connect prospective dog owners with adoptable pups.'}
                        live={'https://pupfinderapp.herokuapp.com/#/'}
                        code={'https://github.com/annkim10/pupfinder'}
                        />
                    </a.div>
                    <a.div className='develop-projects-card-div' style={up} >
                        <ProjectCard 
                            title={'MEvert'} 
                            visible={true}
                            descrip={'Platform for users to carpe diem, their way, with curated activity suggestions, resources and planning tools '}
                            live={'https://mevert.herokuapp.com/#/'}
                            code={'https://github.com/annkim10/mevert'}
                        />
                    </a.div>
                </div>
            </div>  
        </div>
    )
}


export default Projects
