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
        <div className='develop-text-wrapper'>
            <a.div style={up} className="develop-header-div">
                <h1 className="develop-header">
                    Learning to market the product
                </h1>
            </a.div>
            <a.div style={up} className="develop-descrip-div">
                <h1 className="develop-descrip">
                    As a product marketing manager at Samsung, I gained both B2B and B2C experience on marketing a wide portfolio of technology products.
                    <span>
                        <a className="resume-email" target="_blank" href = "mailto:ann.sun.kim@gmail.com">
                            Ask me for my resume!
                        </a>
                    </span>
                </h1>
            </a.div>
        </div>
    )


}

export default MarketHeaders