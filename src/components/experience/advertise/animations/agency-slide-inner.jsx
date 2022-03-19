import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";
import { BiArrowBack } from "react-icons/bi"

const AgencySlideInner = ( { timing, clicked, positions }) => {

    const [innerClick, setInnerClick] = useState(false)

    const animate = useSpring({
        opacity: clicked ? 1 : 0,
        width: clicked ? '100%' : '0',
        config: {
            mass: 1,
            tension: 100,
            friction: 80,
            duration: 750,
            easing: easings.easeInOutBack
        }
    })


    const handleClick = (e) => {
       e.preventDefault()
       innerClick ? setInnerClick(false) : setInnerClick(true)
    }
    
    return (
        <a.div style={animate} className={ clicked ? "agency-slider-inner-right-active" : "agency-slider-inner-right-inactive" }>
            <div className="agency-details-outer-wrapper">
                <div className="agency-details-inner-wrapper">
                    <h1 className="details-header-timing">{timing}</h1>
                    <h1 className="details-header">POSITIONS HELD</h1>
                    
                        <ul>
                            {positions.map((pos) => 
                                <li className="details-role">
                                        <h1 className="role-name">
                                            {pos.title},
                                        </h1>
                                        <p className="role-brands">
                                            {pos.brand}
                                        </p>
                                </li>
                            )}
                        </ul>
                    </div>
                <button  
                    className="agency-close-button"
                    onClick={handleClick}>
                    CLOSE
                </button>
            </div>
        </a.div>
       

    )

}

export default AgencySlideInner