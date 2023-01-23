import { getServices, getParkAreas, getParkAreaServices } from "./database.js";

const services = getServices()
const parkAreas = getParkAreas()
const serviceAreas = getParkAreaServices()





export const Services = () => {
    let servicesHTML = "<div class='services'>"

    const listItems = services.map(service => {
        return `<h4 id="serviceList--${service.id}"> ${service.type}</h4>`
    })

    servicesHTML += listItems.join("")
    servicesHTML += "</div>"
    return servicesHTML
}












// helper function matching service objects to the serviceAreas array
const findService = (services, serviceArea) => {
    let matchedService = ""

    for (const service of services) {
        if (service.id === serviceArea.serviceId) {
            matchedService = service
        }
    }
    return matchedService
}


const findParkArea = (parkAreas, serviceArea) => {
    let matchedPark = ""

    for (const parkArea of parkAreas) {
        if (parkArea.id === serviceArea.parkAreaId) {
            matchedPark = parkArea
        }
    }
    return matchedPark
}

export const matchedServiceAreas = (parkArea) => {
    let html = "<ul>"
    for (const serviceArea of serviceAreas) {
        const park = findParkArea(parkAreas, serviceArea)
        const service = findService(services, serviceArea)
        if (park.id === parkArea.id)
        html += `<li id="serviceArea--${serviceArea.id}">${service.type}</li>`
    }
    html += "</ul>"

    return html
}

/*
function that will return the html object, will iterate through the ServiceAreas
array of objects and return html that accesses both the parkAreas, and Services.

Creating two helper functions:
1. match the service to the serviceAreaId and return the service object
2. match the parkArea to the parkAreaId and return the parkArea object
*/


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let parkString = ""
        if (itemClicked.id.startsWith ("serviceList")){
            const [, serviceId] = itemClicked.id.split("--") 
            for (const serviceArea of serviceAreas){
                const park = findParkArea(parkAreas, serviceArea)
                if (serviceArea.serviceId === parseInt(serviceId)){
                    parkString += `\n${park.section}`

                }
                
            }
            window.alert(`This service is available in ${parkString}`)
        }
        
    }
)