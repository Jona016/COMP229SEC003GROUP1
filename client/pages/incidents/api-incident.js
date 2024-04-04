const create = async (params, credentials, incident) => {
    try {
        let response = await fetch(`${API_SERVER}api/incidents/by/` + params.userId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: incident
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}

const list = async (signal) => {
    try {
        let response = await fetch(`${API_SERVER}api/incidents`, {
            method: 'GET',
            signal: signal
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}

const listByUser = async (params, credentials, signal) => {
    try {
        let response = await fetch(`${API_SERVER}api/incidents/by/` + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}

const read = async (params, signal) => {
    try {
<<<<<<< HEAD
        let response = await fetch(`${API_SERVER}api/incidents/` + params.incidentId, {
=======
        let response = await fetch(`${API_SERVER}api/incident/` + params.incidentId, {
>>>>>>> 1995e192eb9903137c5f2022bf1b53663c49e2b4
            method: 'GET',
            signal: signal,
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}

const update = async (params, credentials, incident) => {
    try {
        let response = await fetch(`${API_SERVER}api/incidents/` + params.incidentId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: incident
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}

const remove = async (params, credentials) => {
    try {
        let response = await fetch(`${API_SERVER}api/incidents/` + params.incidentId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}

<<<<<<< HEAD
export { create, list, listByUser, read, update, remove }
=======
export { create, list, listByUser, read, update, remove }






// const create = async (params, credentials, incident) => {
//     try {
//         let response = await fetch('/api/incidents/by/' + params.userId, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': 'Bearer ' + credentials.t
//             },
//             body: incident
//         })
//         return response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

// const list = async (signal) => {
//     try {
//         let response = await fetch('/api/incidents', {
//             method: 'GET',
//             signal: signal
//         })
//         return response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

// const listByUser = async (params, credentials, signal) => {
//     try {
//         let response = await fetch('/api/incidents/by/' + params.userId, {
//             method: 'GET',
//             signal: signal,
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': 'Bearer ' + credentials.t
//             }
//         })
//         return response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

// const read = async (params, signal) => {
//     try {
//         let response = await fetch('/api/incident/' + params.incidentId, {
//             method: 'GET',
//             signal: signal,
//         })
//         return response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

// const update = async (params, credentials, incident) => {
//     try {
//         let response = await fetch('/api/incidents/' + params.incidentId, {
//             method: 'PUT',
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': 'Bearer ' + credentials.t
//             },
//             body: incident
//         })
//         return response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

// const remove = async (params, credentials) => {
//     try {
//         let response = await fetch('/api/incidents/' + params.incidentId, {
//             method: 'DELETE',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + credentials.t
//             }
//         })
//         return response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

// export { create, list, listByUser, read, update, remove }



>>>>>>> 1995e192eb9903137c5f2022bf1b53663c49e2b4
