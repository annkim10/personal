import { useState, useRef, useEffect} from "react"
import useIntersection from "../../_utils/useIntersection"
import "./css/advertise.css"
import line from "../../../images/line-white.svg"
import um from "../../../images/logos/um_logo.png"
import mec from "../../../images/logos/mec_logo.png"
import draft from "../../../images/logos/draft_logo.png"
import Logos from "./animations/logos"
import { AiFillCloseCircle } from "react-icons/ai"
import { BsFillSquareFill } from "react-icons/bs"
import AdvertiseHeaders from "./animations/advertiseheaders"
import Agencies from "./animations/agency-wrapper"

const Advertise = () => {

    const [load, setLoad] = useState(false)

    const ref = useRef();
    const visible = useIntersection(ref, '0px');

    useEffect(() => visible ? setLoad(true) : "")

    const [umDetails, setUmDetails] = useState(false)
    const [mecDetails, setMecDetails] = useState(false)
    const [draftDetails, setDraftDetails] = useState(false)

    return (
        <div className='advertise-outer-div'>
            <div className='advertise-inner-div'>
                <div className='advertise-left-div'>
                    <h1 className='advertise-time' ref={ref}>JUN 2020 - OCT 2016</h1>
                    <img className='advertise-line' src={line} />
                    <AdvertiseHeaders visible={visible}/>
                </div>
                <div className="advertise-right-div">
                    <h1 className="advertise-cta">CLICK FOR MORE DETAILS</h1>
                    <Agencies visible={visible} />
                    {/* <div className="agency-wrapper">
                        <div className={ umDetails ? "um-wrapper-active" : "um-wrapper-inactive"}
                            onClick={() => setUmDetails(true)}>
                            <div className="agency-details-wrapper">
                                <h2 className="agency-name">Universal McCann</h2>
                                <p className="agency-time">JUL 2013 - OCT 2016</p>
                                <h1 className="agency-details-header">POSITIONS HELD</h1>
                                <ul>
                                    <li className="agency-role-wrapper">
                                        <BsFillSquareFill className="bullet-point" />
                                        <h1>VP, Group Partner, <span>Coca-Cola</span></h1>
                                    </li>
                                    <li className="agency-role-wrapper">
                                        <BsFillSquareFill className="bullet-point" />
                                        <h1>Partner, <span>Coca-Cola & KraftHeinz</span></h1>
                                    </li>
                                    <li className="agency-role-wrapper">
                                        <BsFillSquareFill className="bullet-point" />
                                        <h1>Manager, <span>US Postal Service</span></h1>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="agency-logo-div">
                            <img className="um-logo" src={um} />
                        </div>
                        <AiFillCloseCircle 
                            onClick={() => setUmDetails(false)}
                            className={umDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
                    </div>
                    <div className="agency-wrapper">
                        <div className={ mecDetails ? "mec-wrapper-active" : "mec-wrapper-inactive"}
                            onClick={() => setMecDetails(true)}>
                            <div className="agency-details-wrapper">
                                <h2 className="agency-name">MEC Global</h2>
                                <p className="agency-time">AUG 2011 - JUN 2013</p>
                                <h1 className="agency-details-header">POSITIONS HELD</h1>
                                <ul>
                                    <li className="agency-role-wrapper">
                                        <BsFillSquareFill className="bullet-point" />
                                        <h1>Sr. Associate to Manager <span>Fisher Price, Lee Jeans, Gallo Wines</span></h1>
                                    </li>                                   
                                </ul>
                            </div>
                        </div>
                        <div className="agency-logo-div">
                            <img className="um-logo" src={mec} />
                        </div>
                        <AiFillCloseCircle 
                            onClick={() => setMecDetails(false)}
                            className={ mecDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
                    </div>
                    <div className="agency-wrapper">
                        <div className={ draftDetails ? "draft-wrapper-active" : "draft-wrapper-inactive"}
                            onClick={() => setDraftDetails(true)}>
                            <div className="agency-details-wrapper">
                                <h2 className="agency-name">DraftFCB</h2>
                                <p className="agency-time">JUN 2010 - JUL 2011</p>
                                <h1 className="agency-details-header">POSITIONS HELD</h1>
                                <ul>
                                    <li className="agency-role-wrapper">
                                        <BsFillSquareFill className="bullet-point" />
                                        <h1>Associate <span>Merck</span></h1>
                                    </li>                                   
                                </ul>
                            </div>
                        </div>
                        <div className="agency-logo-div">
                            <img className="um-logo" src={draft} />
                        </div>
                        <AiFillCloseCircle 
                            onClick={() => setDraftDetails(false)}
                            className={ draftDetails ? "agency-close-button-active" : "agency-close-button-inactive"}/>
                    </div> */}
                </div>
                <div className="advertise-brands-wrapper">
                        <h1 className="advertise-brands-header">BRANDS</h1>
                       <Logos visible={visible} />
                </div>
            </div>        
        </div>
    )
}


export default Advertise
