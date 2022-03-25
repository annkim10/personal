import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useSpring, animated as a } from "react-spring";


const MarketDescrip = ( { visible } ) => {

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
        <a.div style={up} className="market-descrip-div">
            <h1 className="market-descrip">
                As a product marketing manager at Samsung, I gained both B2B and B2C experience on marketing a wide portfolio of technology products.
                <span>
                    <a className="resume-email" target="_blank" href = "mailto:ann.sun.kim@gmail.com">
                        Ask me for my resume!
                    </a>
                </span>
            </h1>
        </a.div>
     
    )


}

export default MarketDescrip