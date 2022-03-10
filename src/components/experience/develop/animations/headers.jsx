import useIntersection from "../../../_utils/useIntersection";
import { config, useTrail, animated as a } from "react-spring";


const DevelopHeaders = ( { visible } ) => {

    const headers = [
        {class:'develop-header', text1: 'Learning to', span: ' develop ', text2:'the product',}, 
        {class:'develop-descrip', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',}
    ]

    const trail = useTrail(headers.length, {
        opacity: visible ? 1 : 0,
        fontSize: visible ? '1.5em' : '0em',
        marginTop: visible ? 0 : -50, 
        from: {opacity: 0, marginTop: -50, fontSize: '0em'}, 
        config: config.slow
    })

    return (
        <a.div className='develop-text-wrapper'>
            {trail.map((styles, idx) => {
                return (
                    <a.div  style={styles}>
                        <h1 className={headers[idx].class}>{headers[idx].text1}<span>{headers[idx].span}</span>{headers[idx].text2}</h1>
                    </a.div>
                )
            })}
        </a.div>
    )


}

export default DevelopHeaders