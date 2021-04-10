import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import * as layoutStyles from "../components/layout.module.scss"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h2>Contact</h2>
            <ul className={layoutStyles.contactMe}>
                <li><a href="https://www.twitter.com/s_moens">Twitter</a></li>
                <li><a href="https://www.github.com/smoens">Github</a></li>
                <li><a href="https://www.linkedin.com/in/moenssarah">LinkedIn</a></li>
            </ul>
        </Layout>
    )
}

export default ContactPage