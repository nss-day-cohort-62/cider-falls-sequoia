const database ={
    guests: [
        { id: 1, firstName: "Jack", lastName: "Janoso", parkAreaId: 3},
        { id: 2, firstName: "Jill", lastName: "Booth", parkAreaId: 2},
        { id: 3, firstName: "Neil", lastName: "Peart", parkAreaId: 1},
        { id: 4, firstName: "Joe", lastName: "FaBeets", parkAreaId: 4},
        { id: 5, firstName: "John", lastName: "Bonham", parkAreaId: 6},
        { id: 6, firstName: "Amy", lastName: "Lee", parkAreaId: 5},
    ],
    parkAreas: [
        { id: 1, section: "Lodge", amenities: "Hotel and Restaurant", direction: "Northwest"},
        { id: 2, section: "Lost Wolf Hiking Trail", amenities: "", direction: "North" },
        { id: 3, section: "Chamfort River", amenities: "", direction: "Northeast" },
        { id: 4, section: "Gander River", amenities: "", direction: "Southwest" },
        { id: 5, section: "Campground", amenities: "Office Park and Children Play Areas", direction: "South" },  
        { id: 6, section: "Pine Bluffs Trail", amenities: "Food Vendors", direction: "Southeast" },
    ],
    services: [
        { id: 1, type: "rafting"},
        { id: 2, type: "canoeing"},
        { id: 3, type: "fishing"},
        { id: 4, type: "hiking"},
        { id: 5, type: "picnicking"},
        { id: 6, type: "rock climbing"},
        { id: 7, type: "lodging"},
        { id: 8, type: "parking"},
        { id: 9, type: "information"},
        { id: 10, type: "zip lines"}
    ],
    parkAreaServices: [
        {id: 1, parkAreaId: 1, serviceId: 7},
        {id: 2, parkAreaId: 1, serviceId: 8},
        {id: 3, parkAreaId: 1, serviceId: 9},
        {id: 4, parkAreaId: 1, serviceId: 5},
        {id: 5, parkAreaId: 2, serviceId: 4},
        {id: 6, parkAreaId: 2, serviceId: 5},
        {id: 7, parkAreaId: 2, serviceId: 6},
        {id: 8, parkAreaId: 3, serviceId: 1},
        {id: 9, parkAreaId: 3, serviceId: 2},
        {id: 10, parkAreaId: 3, serviceId: 3},
        {id: 11, parkAreaId: 4, serviceId: 3},
        {id: 12, parkAreaId: 4, serviceId: 4},
        {id: 13, parkAreaId: 5, serviceId: 9},
        {id: 14, parkAreaId: 5, serviceId: 7},
        {id: 15, parkAreaId: 5, serviceId: 8},
        {id: 16, parkAreaId: 6, serviceId: 4},
        {id: 17, parkAreaId: 6, serviceId: 5},
        {id: 18, parkAreaId: 6, serviceId: 10}

    ]
}

// this is a change on freya's branch

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getParkAreaServices = () => {
    return database.parkAreaServices.map(parkService => ({...parkService}))
}