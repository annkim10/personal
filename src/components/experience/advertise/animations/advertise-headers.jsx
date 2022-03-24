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
         <div className='advertise-text-wrapper'>
            <a.div style={up} className="advertise-header-div">
                <h1 className="advertise-header">
                    Learning to advertise 
                    <br/> the product
                </h1>
            </a.div>
            <a.div style={up} className="advertise-descrip-div">
                <h1 className="advertise-descrip">
                    My experience in media planning/buying traverses across three different agencies and a multitude of industries including food & beverage, shipping, and pharma.
                </h1>
                <h1 className="advertise-cta">CLICK BELOW FOR MORE DETAILS</h1>
            </a.div>
        </div>
    )


}

export default AdvertiseHeaders