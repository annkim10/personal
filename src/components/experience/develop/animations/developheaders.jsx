import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useTrail, useSpring, animated as a } from "react-spring";


const DevelopHeaders = ( { visible } ) => {
    
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
        <div className='develop-text-wrapper'>
            <a.div style={up} className="develop-header-div">
                <h1 className='develop-header'>
                    Learning to develop
                    <br/> the product
                </h1>
            </a.div>
            <a.div style={up} className="develop-descrip-div">
                <h1 className='develop-descrip'>
                    To transition from hardware to software, I enrolled in 
                    <span>
                        <a href="https://www.appacademy.io/" target="_blank">
                            App Academy's
                        </a>
                    </span>
                    full-stack software engineering program in Oct 2021. As a graduate, I've not only gained a comprehensive set of technical skills but also an understanding of the development process - from just an idea to a live site.
                </h1>
            </a.div>
        </div>
    )


}

export default DevelopHeaders