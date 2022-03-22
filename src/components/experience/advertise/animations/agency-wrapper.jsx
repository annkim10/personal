import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";
import { BiArrowBack } from "react-icons/bi"
import AgencySlideInner from "./agency-slide-inner";
import umImg from "../../../../images/splash/advertise.jpeg"
import mecImg from "../../../../images/advertise/jeans.jpg"
import draftImg from "../../../../images/advertise/pharma.jpg"

const AgencyWrapper = ( { visible, mobile }) => {

    const agencyDetails = [
        { 
            agency: 'UNIVERSAL MCCANN',
            timing: 'JUL 2013 - OCT 2016',
            positions: [
                {title: 'VP Group Partner', brand:'Coca-Cola'},
                {title: 'Partner', brand:'Coca-Cola & Kraft Heinz'},
                {title: 'Manager', brand:'USPS'}
            ]
        },
        { 
            agency: 'MEC GLOBAL',
            timing: 'AUG 2011 - JUN 2013',
            positions: [
                {title: 'Sr. Associate to Manager', brand:'Lee Jeans, Fisher Price, & Gallo Wines'}
            ]
        },
        { 
            agency: 'DRAFTFCB',
            timing: 'JUN 2010 - JUN 2011',
            positions: [
                {title: 'Associate', brand:'Merck NuvaRing'}
            ]
        }
    ]

    const animate = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 800,
        config: {
            mass: 1,
            tension: 100,
            friction: 80,
            duration: 1000,
            easing: easings.easeInOutBack
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

    console.log(mobile)
 
    return (
        <a.div style={animate} className="agency-outer-wrapper">
            <div className={ um ? "agency-slide-wrapper-active" : "agency-slide-wrapper-inactive"}
                onClick={handleUm}>
                <div className="agency-slide-inner-div">
                    <div className={ um && mobile ? "agency-slider-inner-left-mobile" : "agency-slider-inner-left"} >
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
                        positions={agencyDetails[0].positions}
                    />
                 </div>
            </div>
            <div className={ mec ? "agency-slide-wrapper-active" : "agency-slide-wrapper-inactive"}
                onClick={handleMec}>
                <div className="agency-slide-inner-div">
                    <div className={ mec && mobile ? "agency-slider-inner-left-mobile" : "agency-slider-inner-left"}>
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
                        positions={agencyDetails[1].positions}
                    />
                 </div>
            </div>
            <div className={ draft ? "agency-slide-wrapper-active" : "agency-slide-wrapper-inactive"}
                onClick={handleDraft}>
                <div className="agency-slide-inner-div">
                    <div className={ draft && mobile ? "agency-slider-inner-left-mobile" : "agency-slider-inner-left"}>
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
                        positions={agencyDetails[2].positions}
                    />
                 </div>
            </div>
        </a.div>

    )

}

export default AgencyWrapper