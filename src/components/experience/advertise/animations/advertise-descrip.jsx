import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useSpring, animated as a } from "react-spring";


const AdvertiseDescrip = ( { visible } ) => {


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
        <a.div style={up} className="advertise-descrip-div">
            <h1 className="advertise-descrip">
                From 2010 to 2016, I began my career in cross-channel media planning and buying, working across a variety of industries including food & beverage, shipping, and pharma.
            </h1>
            <h1 className="advertise-cta">CLICK BELOW FOR MORE DETAILS</h1>
        </a.div>
     
    )


}

export default AdvertiseDescrip