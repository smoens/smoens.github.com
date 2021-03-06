import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Head from "../components/head"
import Me from "../images/about-me.jpg"      
import * as contactStyles from "./about.module.scss"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <img src={Me} alt="Sarah Moens on a mountaintop in Canada"/>
            <p>Hello there! I'm Sarah Moens.</p>
            <p>You will mostly find me talking about data integration, data engineering, data warehousing, data visualisation, human or machine learning, hiking, soccer, or some new tools or features I recently stumbled upon. Always open and happy to learn about new things!</p>

            <ul className={contactStyles.contact}>
                <li><StaticImage src="../images/twitter.png" alt="Twitter icon"/><a href="https://www.twitter.com/s_moens" target="_blank">s_moens</a></li>
                <li><StaticImage src="../images/github.png" alt="Github icon"/><a href="https://www.github.com/smoens" target="_blank">smoens</a></li>
                <li><StaticImage src="../images/linkedin.png" alt="LinkedIn icon"/><a href="https://www.linkedin.com/in/moenssarah" target="_blank">sarahmoens</a></li>
            </ul>
        </Layout>
    )
}

export default AboutPage