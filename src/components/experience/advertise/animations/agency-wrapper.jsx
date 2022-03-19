import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";
import { BiArrowBack } from "react-icons/bi"
import AgencySlideInner from "./agency-slide-inner";
import umImg from "../../../../images/splash/advertise.jpeg"
import mecImg from "../../../../images/advertise/jeans.jpg"
import draftImg from "../../../../images/advertise/pharma.jpg"

const AgencyWrapper = ( { visible }) => {

    const agencyDetails = [
        { 
            agency: 'UNIVERSAL MCCANN',
            timing: 'JUL 2013 - OCT 2016',
            positions: ['VP Group Partner', 'Partner', 'Manager' ],
            brands: ['Coca-Cola', 'Coca-Cola & Kraft Heinz', 'USPS']
        },
        { 
            agency: 'MEC GLOBAL',
            timing: 'AUG 2011 - JUN 2013',
            positions: ['Sr. Associate to Manager'],
            brands: ['Lee Jeans, Fisher Price, & Gallo Wines']
        },
        { 
            agency: 'DRAFTFCB',
            timing: 'JUN 2010 - JUN 2011',
            positions: ['Associate' ],
            brands: ['Merck NuvaRing']
        }
    ]

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        // y: visible ? 0 : 100,
        config: {
            mass: 1,
            tension: 100,
            friction: 80,
            easing: easings.easeOutElastic
        }
    })

    const [um, setUm] = useState(false)
    const [mec, setMec] = useState(false)
    const [draft, setDraft] = useState(false)

    const handleUm = (e) => {
       e.preventDefault()
       !um && (!mec && !draft) ? setUm(true) : setUm(false)
    }

    const handleMec = (e) => {
       e.preventDefault()
       !mec && (!um && !draft) ? setMec(true) : setMec(false)
    }

    const handleDraft = (e) => {
       e.preventDefault()
       !draft && (!mec && !um) ? setDraft(true) : setDraft(false)
    }

    console.log("um, mec, draft", um, mec, draft)
 
    return (
        <a.div style={animate} className="agency-outer-wrapper">
            <a.div style={animate} className={ um ? "agency-slide-wrapper-active" : "agency-slide-wrapper-inactive"}
                onClick={handleUm}>
                <div className="agency-slide-inner-div">
                    <div className="agency-slider-inner-left">
                        <img className="agency-img" src={umImg} />
                    </div>
                    <div className="agency-slide-inner-mid">
                        <h1 className="agency-name">
                            UNIVERSAL MCCANN
                            { um ? "" : <span><BiArrowBack /></span> }
                        </h1>
                    </div>
                    <AgencySlideInner 
                        timing={agencyDetails[0].timing} 
                        clicked={um}
                    />
                 </div>
            </a.div>
            <a.div style={animate} className={ mec ? "agency-slide-wrapper-active" : "agency-slide-wrapper-inactive"}
                onClick={handleMec}>
                <div className="agency-slide-inner-div">
                    <div className="agency-slider-inner-left">
                        <img className="agency-img" src={mecImg} />
                    </div>
                    <div className="agency-slide-inner-mid">
                        <h1 className="agency-name">
                            MEC GLOBAL
                            { mec ? "" : <span><BiArrowBack /></span> }
                        </h1>
                    </div>
                    <AgencySlideInner 
                        timing={agencyDetails[1].timing} 
                        clicked={mec}
                    />
                 </div>
            </a.div>
            <a.div style={animate} className={ draft ? "agency-slide-wrapper-active" : "agency-slide-wrapper-inactive"}
                onClick={handleDraft}>
                <div className="agency-slide-inner-div">
                    <div className="agency-slider-inner-left">
                        <img className="draft-img" src={draftImg} />
                    </div>
                    <div className="agency-slide-inner-mid">
                        <h1 className="agency-name">
                            DRAFTFCB
                            { draft ? "" : <span><BiArrowBack /></span> }
                        </h1>
                    </div>
                    <AgencySlideInner 
                        timing={agencyDetails[2].timing} 
                        clicked={draft}
                    />
                 </div>
            </a.div>
        </a.div>

    )

}

export default AgencyWrapper