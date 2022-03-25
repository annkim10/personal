import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useSpring, animated as a } from "react-spring";


const AdvertiseHeaders = ( { visible } ) => {


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
        <a.div style={up} className="advertise-header-div">
            <h1 className="advertise-header">
                Learning to 
                <span> advertise the product</span>
            </h1>
        </a.div>
        
    )


}

export default AdvertiseHeaders