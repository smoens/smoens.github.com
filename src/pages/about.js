import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Me from "../images/about-me.jpg"      

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <img src={Me} alt="Sarah Moens on a mountaintop in Canada"/>
            <p>Hello there! I'm Sarah Moens.</p>
            <p>You'll mostly find me talking about data integration, data warehousing, data visualisation, human or machine learning, hiking, or some new tools or features I recently stumbled upon.</p>
        </Layout>
    )
}

export default AboutPage