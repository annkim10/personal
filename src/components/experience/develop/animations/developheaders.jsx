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
        <a.div style={up} className="develop-header-div">
            <h1 className='develop-header'>
                Learning to
                <span> develop the product</span>
            </h1>
        </a.div>
    )


}

export default DevelopHeaders