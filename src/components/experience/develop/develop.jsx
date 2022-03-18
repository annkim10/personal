import { useState, useRef, useEffect } from 'react';
import "./css/develop.css";
import line from "../../../images/svg/line.svg"
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
            </div>  
        </div>
    )
}


export default Develop
