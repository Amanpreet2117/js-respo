import React from 'react'
import Abt from "../component/abt"
import Team from "../component/team"
import Pagehdr from '../component/pagehdr'



function About() {
    return (
        <>
        <Pagehdr name="About" page="about"/>
        <Abt/>
        <Team/>
        
        </>
    )
}

export default About
