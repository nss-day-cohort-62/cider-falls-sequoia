import { Guests } from "./Guests.js"
import { ParkAreasDisplay } from "./ParkAreas.js"

const mainContainer = document.querySelector("#mainContainer")



const ciderContent = `
<article class="parkAreaContainer">
${ParkAreasDisplay()}
</article>

<article class="guestListContainer">
<h2>Guest List</h2>
${Guests()}
</article>
`








mainContainer.innerHTML = ciderContent