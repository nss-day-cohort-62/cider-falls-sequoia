import { getGuests, getParkAreas } from "./database.js";
import { matchedServiceAreas } from "./Services.js";


const parkAreas = getParkAreas()
const guests = getGuests()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("park")){
            const [, parkId] = itemClicked.id.split("--") 
            for (const parkArea of parkAreas){
                if (parkArea.id === parseInt(parkId)){
                    const numberOfGuests = guestLocation(parkArea)
                    window.alert(`There are ${numberOfGuests} guests in ${parkArea.section}`)
                }
            }
        }
    }
)

export const guestLocation = (parkArea) => {
    const guestsInArea = []
        for (const guest of guests){
            if (guest.parkAreaId === parkArea.id){
                guestsInArea.push(guest)
            }
        }
        return guestsInArea.length
}


export const ParkAreasDisplay = () => {
    let html = `<div class="parkAreaContainer">`

    for (const parkArea of parkAreas) {
        const parkService = matchedServiceAreas(parkArea)
        html += `<div class="park_card">
        <h3 id="park--${parkArea.id}">${parkArea.section}</h3>
       ${parkService}
        </div>`
    }

    html += `</div>`
    return html
}