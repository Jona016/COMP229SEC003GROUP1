import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // Components imports
// import CreateBook from "./components/CreateIncident";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="home" />)

