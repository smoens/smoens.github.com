import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1><Link to="/contact">Froes Peeters</Link></h1>
            <p>I am the world's greatest cat.</p>
        </Layout>
    )
}

export default AboutPage