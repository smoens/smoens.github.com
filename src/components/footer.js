import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as footerStyles from "./footer.module.scss"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
            }
        }
        }
    `
    )


    return (
        <footer className={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.author} with <a href="https://www.gatsbyjs.com/">Gatsby</a><br/>
            Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </p>
        </footer>
    )
}

export default Footer