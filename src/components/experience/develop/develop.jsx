import { useState, useRef, useEffect } from 'react';
import "./css/develop.css";
import Skills from './animations/skills';
import useIntersection from '../../_utils/useIntersection';
import DevelopHeaders from './animations/developheaders';
import code from "../../../images/splash/code.jpg"
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
                <div className='develop-bottom-div' ref={ref}>
                    <div className='develop-bottom-left-div'>
                    
                    </div>
                    <div className='develop-bottom-right-div'>
                        <Skills visible={visible} />
                    </div>
                </div>
                
            </div>  
        </div>
    )
}


export default Develop
