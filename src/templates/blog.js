import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Blog = ( props ) => {
    return (
        <Layout>
            <Head title={props.data.mdx.frontmatter.title} />
            <h1>{props.data.mdx.frontmatter.title}</h1>
            <p>{props.data.mdx.frontmatter.date}</p>
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </Layout>
    )
}


export const query = graphql`
    query (  
        $slug: String!
    ) {
    mdx (
        fields: {
                slug: {
                    eq: $slug
        }
        }
    ) {
        frontmatter {
        title
        date
        }
        body
    }
    }
`

export default Blog