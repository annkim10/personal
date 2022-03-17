import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useTrail, animated as a } from "react-spring";


const DevelopHeaders = ( { visible } ) => {

    const headers = [
        { 
            class:'develop-header', 
            text1: 'Learning to develop the product ', 
            text2: 'From hardware to software'
        }, 
        {
            class:'develop-descrip',
            text1: 'To transition from hardware to software, I enrolled in ',
            link: 'App Academy\'s',
            url: 'https://www.appacademy.io/',
            text3: ' full-stack software engineering program in Oct 2021. As a graduate, I\'ve not only gained a comprehensive set of technical skills but also an understanding of the development process - from just an idea to a live site.',
        }
    ]

    const trail = useTrail(headers.length, {
        opacity: visible ? 1 : 0,
        fontSize: visible ? '1.5em' : '0em',
        y: visible ? 0 : 500, 
        config: {
            mass: 1,
            tension: 50,
            friction: 10,
            // duration: 1000,
            easing: easings.easeInOutElastic
        }
    })

    return (
        <a.div className='develop-text-wrapper'>
            {trail.map((styles, idx) => {
                return (
                    <a.div key={idx} style={styles} className={headers[idx].class + "-div"}>
                        <h1 className={headers[idx].class}>
                            {headers[idx].text1}
                            <span><a href={headers[idx].url} target="_blank">{headers[idx].link}</a>
                            {headers[idx].text3}</span>
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

export default DevelopHeaders