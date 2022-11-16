import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import LearnSection from './components/LearnSection'
import Modal from './components/Modal'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './pages/Layout'
import Home from './pages/Home'
import Search from './components/Search'


import route from './routes/route'
export function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}
