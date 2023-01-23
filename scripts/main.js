import { Guests } from "./Guests.js"
import { ParkAreasDisplay } from "./ParkAreas.js"

const mainContainer = document.querySelector("#container")



const ciderContent = `
<article class="guest">
<h2>Guest List</h2>
${Guests()}
</article>
<article class="parkArea">
${ParkAreasDisplay()}
</article>
`








mainContainer.innerHTML = ciderContent