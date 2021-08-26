import React from "react"

import { BrowserRouter, Switch,Route } from "react-router-dom"
import Home from './Home'
import WorkExp from "./WorkExp"
import EduQual from "./EduQual"
import Achieve from "./Achieve"
import Skills from "./Skills"
import "./Home.css"

export const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Home/>
        <Switch>
        <Route path ="/workExp" component={WorkExp}/>
        <Route path ="/eduQual" component={EduQual}/>
        <Route path ="/achieve" component ={Achieve}/>
        <Route path="/skills" component={Skills}/>
        </Switch>
        </BrowserRouter>
        </>
    )
}