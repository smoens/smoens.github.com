import React from "react"
import { graphql, Link } from "gatsby"

import * as blogStyles from "./blog.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"

const BlogPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges
    return (
        <Layout>
            <Head title='Blog'/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {posts.map(post => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${post.node.fields.slug}`}>
                            <h2>{post.node.frontmatter.title}</h2>
                            <p>{post.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export const query = graphql`
    query BlogPageQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        date
                        title
                    }
                    fields {
                        slug
                    }        
                }
            }
        }
    }    
`

export default BlogPage