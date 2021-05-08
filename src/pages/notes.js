import React from "react"
import { graphql, Link } from "gatsby"

import * as notesStyles from "./blog.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"

const NotesPage = ({ data }) => {
    const notes = data.allMdx.edges
    return (
        <Layout>
            <Head title='Notes'/>
            <h2>Notes</h2>
            <ol className={notesStyles.posts}>
                {notes.map(note => {
                    return (
                        <li className={notesStyles.post}>
                            <Link to={`/notes/${note.node.fields.slug}`}>
                            <h2>{note.node.frontmatter.title}</h2>
                            <p>{note.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export const query = graphql`
    query NotesPageQuery {
        allMdx(filter: {fileAbsolutePath: {regex: "/notes/"}}) {
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

export default NotesPage