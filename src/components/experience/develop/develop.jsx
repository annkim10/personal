import { useState, useRef, useEffect } from 'react';
import "./css/develop.css";
import Skills from './animations/skills';
import useIntersection from '../../_utils/useIntersection';
import DevelopHeaders from './animations/developheaders';
import { useSpring, animated as a, easings, config } from "react-spring"

const Develop = ( {mobile}) => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.2');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='develop-outer-div' id="develop-container" >
            <div className='develop-inner-div' ref={ref} >
                <div className='develop-top-div'>
                    <DevelopHeaders visible={visible}/>      
                </div>
                <div className='develop-bottom-div' ref={ref}>
                    <div className='develop-bottom-left-div'></div>
                    <div className='develop-bottom-right-div'>
                        <Skills visible={visible} />
                    </div>
                </div>
                
            </div>  
        </div>
    )
}


export default Develop
