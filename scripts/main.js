import { Guests } from "./Guests.js"

const mainContainer = document.querySelector("#container")



const ciderContent = `
<article class="guest">
<h2>Guest List</h2>
${Guests()}
</article>
<article class="parkArea">
</article>
`








mainContainer.innerHTML = ciderContent