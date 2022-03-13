import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useTrail, animated as a } from "react-spring";


const MarketHeaders = ( { visible } ) => {

    const headers = [
        {
            class:'develop-header', 
            text1: 'Learning to', 
            span: ' market ', 
            text2:'the product'
        }, 
        {
            class:'develop-descrip', 
            text1: 'I .'
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
            duration: 1000,
            easing: easings.easeInOutBack
        }
    })

    return (
        <a.div className='market-text-wrapper'>
            {trail.map((styles, idx) => {
                return (
                    <a.div key={idx} style={styles}>
                        <h1 className={headers[idx].class}>
                            {headers[idx].text1}
                            <span>{headers[idx].span}</span>
                            {headers[idx].text2}
                        </h1>
                    </a.div>
                )
            })}
        </a.div>
    )


}

export default MarketHeaders