import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Users from './pages/user/Users'
import Signup from './pages/user/Signup'

const MainRouter = () => {
    return (<div>
        <Layout/>
        <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={Users}/>
            <Route exact path='/signup' element={Signup}/>
        </Routes>
    </div>
    )
}
export default MainRouter

