import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'

const MainRouter = () => {
    return (<div>
        <Layout/>
        <Routes>

            <Route exact path="/" element={<Home />} />

        </Routes>
    </div>
    )
}
export default MainRouter

