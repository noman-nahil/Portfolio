import React from 'react'
import Home from './Home';
import Skill from './Skill';
import { Route, Redirect, Switch } from 'react-router-dom';
import Edu from './Edu';
import Projects from './Projects';
import About from './About';
import Certificates from './Certificates';
const Section = () => {
    return (
        <>
            <Home />
            <About />
            <Edu />
            <Skill />
            <Projects />
            <Certificates />
        </>
    )
}
export default Section;