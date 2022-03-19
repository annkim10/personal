import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";
import { BiArrowBack } from "react-icons/bi"

const AgencySlideInner = ( { timing, clicked }) => {

    const [innerClick, setInnerClick] = useState(false)

    const animate = useSpring({
    
        config: {
            mass: 1,
            tension: 100,
            friction: 80,
            duration: 1000,
            easing: easings.easeOutQuad
        }
    })


    const handleClick = (e) => {
       e.preventDefault()
       innerClick ? setInnerClick(false) : setInnerClick(true)
    }
    
    return (
        <a.div className={ clicked ? "agency-slider-inner-right-active" : "agency-slider-inner-right-inactive" }>
            <div className="agency-details-outer-wrapper">
                <div className="agency-details-inner-wrapper">
                    <h1 className="details-header">{timing}</h1>
                    <h1 className="details-header">POSITIONS HELD</h1>
                        <ul>
                            <li className="details-role">
                                <h1 className="role-name">
                                    Position,
                                </h1>
                                <p className="role-brands">Brand</p>
                            </li>
                            <li className="details-role">
                                <h1 className="role-name">
                                    Position,
                                </h1>
                                <p className="role-brands">Brand</p>
                            </li>
                            <li className="details-role">
                                <h1 className="role-name">
                                    Position,
                                </h1>
                                <p className="role-brands">Brand</p>
                            </li>
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