import { useState, useRef, useEffect} from "react"
import useIntersection from "../../_utils/useIntersection"
import "./css/advertise.css"
import line from "../../../images/svg/line-white.svg"
import Logos from "./animations/logos"
import AdvertiseHeaders from "./animations/advertise-headers"
import Agencies from "./animations/agency-wrapper"
import ScrollDown from "../../_utils/scrolldown";

const Advertise = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '1.0');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='advertise-outer-div'>
            <div className='advertise-inner-div'>
                <div className='advertise-top-div' ref={ref}>
                    <AdvertiseHeaders visible={visible}/>
                </div>
                <div className="advertise-right-div">
                    <h1 className="advertise-cta">CLICK FOR MORE DETAILS</h1>
                    <Agencies visible={visible} />
                </div>
                {/* <div className="advertise-brands-wrapper">
                        <h1 className="advertise-brands-header">BRANDS I'VE WORKED WITH</h1>
                       <Logos visible={visible} />
                </div> */}
                <ScrollDown idName={'advertise-scroll'} visible={visible} /> 
            </div>      
         
        </div>
    )
}


export default Advertise
