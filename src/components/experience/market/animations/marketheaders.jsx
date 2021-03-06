import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useSpring, animated as a } from "react-spring";


const MarketHeaders = ( { visible } ) => {

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
        <a.div style={up} className="market-header-div">
            <h1 className="market-header">
                Learning to 
                <span> market the product</span>
            </h1>
        </a.div>
    )


}

export default MarketHeaders