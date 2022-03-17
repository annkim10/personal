import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useTrail, animated as a } from "react-spring";


const AdvertiseHeaders = ( { visible } ) => {

    const headers = [
        {
            class:'advertise-header', 
            text1: 'Learning to advertise the product', 
            text2: 'Honing'
        }, 
        {
            class:'advertise-descrip', 
            text1: 'My experience in media planning/buying traverses across three different agencies and a multitude of industries including food & beverage, shipping, and pharma.'
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
        <a.div className='advertise-text-wrapper'>
            {trail.map((styles, idx) => {
                return (
                    <a.div key={idx} style={styles} className={headers[idx].class + "-div"}>
                        <h1 className={headers[idx].class}>
                            {headers[idx].text1}
                            {/* <span>{headers[idx].span}</span>
                            {headers[idx].text2} */}
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

export default AdvertiseHeaders