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


const MainRouter = () => {
    return (<div>

        <Layout/>
        <Container>
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/users" element={<Users/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/incidents/new' element = {<NewIncident/>}/>
                <Route path='/incidents' element = {<IncidentList/>}/>
            </Routes>

            {/* <Routes>
            
                <Route exact path="/user/:id" element={
                    <PrivateRoute>
                        <User/>
                    </PrivateRoute>
                } />
            </Routes> */}
        </Container>
        <Footer/>
    </div>
    )
}
export default MainRouter

