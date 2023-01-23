import { getParkAreas } from "./database.js";
import { matchedServiceAreas } from "./Services.js";

const parkAreas = getParkAreas()


export const ParkAreasDisplay = () => {
    let html = `<div class="parkAreaContainer">`

    for (const parkArea of parkAreas) {
        const parkService = matchedServiceAreas(parkArea)
        html += `<div class="park_card">
        <h3 id="${parkArea.id}">${parkArea.section}</h3>
       ${parkService}
        </div>`
    }

    html += `</div>`
    return html
}