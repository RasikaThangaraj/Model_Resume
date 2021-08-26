import React from 'react'
import achieve from "./achieve.jpg"
import * as TiIcons from "react-icons/ti"
import "./achieve.css"


export default function Achieve() {
    return (
        <div className="achieve-container">
           <div className="img"></div>
                <div className="list">
                <ul className="u-list">
                    <li>Academic Achievements</li>
                <TiIcons.TiTick/><span>Secured <strong>BEC Vantage C</strong>- English Proficency</span>
                <li>Work Achievements</li>
                <TiIcons.TiTick/><span>Organised a <strong>YOGA Event with 520 people</strong> of Madurai On Yoga day-<b> Sale-Growth- 125%</b></span>
                <br/><br/>
                <TiIcons.TiTick/><span>Trained New Team members and gave one of them as my replacement</span> 
                <br/><br/>
                <TiIcons.TiTick/><span>Promoted to CRM-mainatined<b> User Satisfaction rate to 98% consistent</b></span> 
                <br/><br/>
                <TiIcons.TiTick/><span><b>Best Performer Award </b>- HCL - consistenty in maintining productivity</span> 
                </ul>
            </div>
        </div>
    )
}
