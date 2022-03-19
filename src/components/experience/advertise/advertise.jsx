import { useState, useRef, useEffect} from "react"
import useIntersection from "../../_utils/useIntersection"
import "./css/advertise.css"
import AdvertiseHeaders from "./animations/advertise-headers"
import AgencyWrapper from "./animations/agency-wrapper"

const Advertise = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px', '0.2');

    useEffect(() => visible ? setLoad(true) : "")

    return (
        <div className='advertise-outer-div' id="advertise-container">
            <div className='advertise-inner-div' ref={ref}>
                <div className='advertise-top-div'>
                    <AdvertiseHeaders visible={visible}/>
                    {/* <h1 className="advertise-cta">CLICK FOR MORE DETAILS</h1> */}
                </div>
                <div className="advertise-bottom-div">
                    <AgencyWrapper visible={visible}/>
                </div>
            </div>      
         
        </div>
    )
}


export default Advertise
