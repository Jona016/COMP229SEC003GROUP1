import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Users from './pages/user/Users'
import Signup from './pages/user/Signup'
import { Container } from '@material-ui/core'
import PrivateRoute from './lib/PrivateRoute'
import UserLayout from './components/UserLayout'
import Login from './pages/user/Login'
import NewIncident from './pages/incidents/NewIncident'
import IncidentList from './pages/incidents/IncidentList'
import DeleteIncident from './pages/incidents/DeleteIncident'
import EditIncident from './pages/incidents/EditIncident'
import DeleteUser from './pages/user/DeleteUser'
import EditProfile from './pages/user/EditProfile'


const MainRouter = () => {
    return (
    <div>
        <Layout/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/users" element={<Users/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/incidents/new' element = {<NewIncident/>}/>
                <Route path='/incidents' element = {<IncidentList/>}/>
                <Route path='/incidents/delete' element = {<DeleteIncident/>}/>
                <Route path='/incidents/edit' element = {<EditIncident/>}/>
                <Route path='/users/delete' element = {<DeleteUser/>}/>
                <Route path='/users/edit' element = {<EditProfile/>}/>

            </Routes>
        <Footer/>
    </div>
    )
}
// const HomeLayout= ({ children }) => {
//     return (
//         <div>
//             <Layout />
//             <Container>
//             <Route path="/user/:id" element = {<UsersLayout><Users/></UsersLayout>}/>
//             </Container>
//         </div>
//     );
// };

const UsersLayout= ({ children }) => {
    return (
        <div>
            <UserLayout/>
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default MainRouter

