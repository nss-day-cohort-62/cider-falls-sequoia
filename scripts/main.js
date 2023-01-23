import { Guests } from "./Guests.js"
import { ParkAreasDisplay } from "./ParkAreas.js"
import { Services } from "./Services.js"

const mainContainer = document.querySelector("#mainContainer")



const ciderContent = `
<article class="servicesContainer">
<h2>Services</h2>
${Services()}
</article>

<div class="parkAndGuests">

<article class="parkAreaContainer">
${ParkAreasDisplay()}
</article>

<article class="guestListContainer">
<h2>Guest List</h2>
${Guests()}
</article>

</div>

`








mainContainer.innerHTML = ciderContent