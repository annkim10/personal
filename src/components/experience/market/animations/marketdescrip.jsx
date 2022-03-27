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
                From 2016 to 2021, I was a product marketing manager at Samsung, responsible for B2B hospitality TVs and B2C Desktop Monitors. As a PM, I was involved in all aspects of the business - from marketing to supply chain to pricing and more.  
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