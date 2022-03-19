import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useSpring, animated as a } from "react-spring";


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
            <a.div style={up} className={headers[0].class + "-div"}>
                <h1 className={headers[0].class}>
                    {headers[0].text1}
                    <span><a href={headers[0].url} target="_blank">{headers[0].link}</a>
                    {headers[0].text3}</span>
                </h1>
                <h1 className={headers[0].class + "-second"}>
                    {headers[0].text2}
                </h1>
            </a.div>
            <a.div style={up} className={headers[1].class + "-div"}>
                <h1 className={headers[1].class}>
                    {headers[1].text1}
                    <span><a href={headers[1].url} target="_blank">{headers[1].link}</a>
                    {headers[1].text3}</span>
                </h1>
                <h1 className={headers[1].class + "-second"}>
                    {headers[1].text2}
                </h1>
            </a.div>
        </div>
    )


}

export default MarketHeaders