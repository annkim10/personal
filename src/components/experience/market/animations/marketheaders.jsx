import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useTrail, animated as a } from "react-spring";


const MarketHeaders = ( { visible } ) => {

    const headers = [
        {
            class:'develop-header', 
            text1: 'Learning to market the product', 
            text2:'the product'
        }, 
        {
            class:'develop-descrip', 
            text1: 'As a product marketing manager at Samsung, I gained both B2B and B2C experience on marketing a wide portfolio of technology products. See below for more details.'
        }
    ]

    const trail = useTrail(headers.length, {
        opacity: visible ? 1 : 0,
        fontSize: visible ? '1.5em' : '0em',
        marginTop: visible ? 0 : -50, 
        config: {
            mass: 1,
            tension: 50,
            friction: 10,
            // duration: 1000,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <a.div className='market-text-wrapper'>
            {trail.map((styles, idx) => {
                return (
                    <a.div className={headers[idx].class + "-div"}  key={idx} style={styles}>
                        <h1 className={headers[idx].class}>
                            {headers[idx].text1}
                            <span>{headers[idx].span}</span>
                            {headers[idx].text3}
                        </h1>
                        <h1 className={headers[idx].class + "-second"}>
                            {idx === 0 ? headers[idx].text2 : ""}
                        </h1>
                    </a.div>
                )
            })}
        </a.div>
    )


}

export default MarketHeaders