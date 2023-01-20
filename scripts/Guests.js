import { getGuests } from "./database.js"

const guests = getGuests()

export const Guests = () => {
    let guestHTML = "<ul>"

    const listItems = guests.map(guest => {
        return `<li value="${guest.id}"> ${guest.firstName} ${guest.lastName}</li>`
    })

    guestHTML += listItems.join("")
    guestHTML += "</ul>"
    return guestHTML
}

