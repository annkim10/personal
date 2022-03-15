import useIntersection from "../../../_utils/useIntersection";
import { config, easings, useTrail, animated as a } from "react-spring";


const DevelopHeaders = ( { visible } ) => {

    const headers = [
        { 
            class:'develop-header', 
            text1: 'Learning to', 
            span: ' develop ', 
            text2:'the product'
        }, 
        {
            class:'develop-descrip',
            text1: 'To transition from hardware to software, I enrolled into ',
            link: 'App Academy\'s',
            url: 'https://www.appacademy.io/',
            text2: ' full-stack software engineering program in Oct 2021. As a graduate, I\'ve not only gained a comprehensive set of technical skills but also an understanding of the development process - from just an idea to a live site.',
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
        <a.div className='develop-text-wrapper'>
            {trail.map((styles, idx) => {
                return (
                    <a.div key={idx} style={styles}>
                        <h1 className={headers[idx].class}>
                            {headers[idx].text1}
                            <span>{headers[idx].span}</span>
                            <a href={headers[idx].url} target="_blank">{headers[idx].link}</a>
                            {headers[idx].text2}
                        </h1>
                    </a.div>
                )
            })}
        </a.div>
    )


}

export default DevelopHeaders