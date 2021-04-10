import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Miauw.</h1>
      <p>I'm Froes, you can contact me <Link to="/contact">here</Link></p>
    </Layout>
  )
}

export default IndexPage
