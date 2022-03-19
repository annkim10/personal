import { useState, useRef, useEffect} from "react"
import { config, easings, useSpring, useTrail, animated as a } from "react-spring";


import AgencySlide from "./agency-slide";



const Agencies = ( { visible }) => {

    const agencyDetails = [
        { 
            name: 'UNIVERSAL MCCANN',
            timing: 'JUL 2013 - OCT 2016',
            position1: 'VP Group Partner', 
            brand1: 'Coca-Cola',
            position2: 'Partner',
            brand2: 'Coca-Cola & Kraft Heinz',
            position3: 'Manager',
            brand3: 'USPS'
        },
        { 
            name: 'MEC GLOBAL',
            timing: 'AUG 2011 - JUN 2013',
            position1: 'Sr. Associate to Manager', 
            brand1: 'Lee Jeans, Fisher Price, & Gallo Wines',
        },
        { 
            name: 'DRAFTFCB',
            timing: 'JUN 2010 - JUN 2011',
            position1: 'Associate', 
            brand1: 'Merck NuvaRing',
        },
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
 
    return (
        <a.div style={animate} className="agency-outer-wrapper">

            {agencyDetails.map((agency, idx) => {
                return (
                    <AgencySlide 
                        visible={true}
                        name={agency.name} 
                        timing={agency.timing}
                        
                    />
                )
            })}

            {/* <AgencySlide 
                visible={true}
                name={'UNIVERSAL MCCANN'} 

            />
            <AgencySlide 
                visible={true} 
                name={'MEC GLOBAL'} 
            />
            <AgencySlide 
                visible={true}
                name={'DRAFTFCB'}  
            /> */}
        </a.div>

    )

}

export default Agencies