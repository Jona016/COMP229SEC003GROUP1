<<<<<<< HEAD
=======
// import { API_SERVER } from "./const"

// const signin = async (user) => {
//     try {
//         let response = await fetch(`${API_SERVER}api/users/login/`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             credentials: 'include',
//             body: JSON.stringify(user)
//         })
//         return await response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }
// const signout = async () => {
//     try {
//         let response = await fetch('/auth/signout/', { method: 'GET' })
//         return await response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }
// export { signin, signout }


>>>>>>> 1995e192eb9903137c5f2022bf1b53663c49e2b4
import { API_SERVER } from "./const"

const signin = async (user) => {
    try {
<<<<<<< HEAD
        let response = await fetch(`${API_SERVER}api/users/login`, {
=======
        let response = await fetch(`${API_SERVER}/api/users/login`, {
>>>>>>> 1995e192eb9903137c5f2022bf1b53663c49e2b4
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const signout = async () => {
    try {
<<<<<<< HEAD
        let response = await fetch(`${API_SERVER}api/users`, { method: 'GET' })
=======
        let response = await fetch(`${API_SERVER}/api/users`, { method: 'GET' })
>>>>>>> 1995e192eb9903137c5f2022bf1b53663c49e2b4
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
export { signin, signout }