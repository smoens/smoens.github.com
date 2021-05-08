/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: "Sarah Moens",
      author: "Sarah Moens"
  },
  plugins: [
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    //`gatsby-plugin-feed-mdx`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [ `.mdx`, `.md` ],
          //'gatsby-remark-relative-images',
          gatsbyRemarkPlugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            },
            {
              resolve: `gatsby-remark-table-of-contents`,
              options: {
                exclude: "Table of Contents",
                tight: true,
                ordered: false,
                fromHeading: 1,
                toHeading: 6,
                className: "table-of-contents"
              },
            },
            {
              resolve: `gatsby-transformer-markdown-references`,
              options: {
                types: ["Mdx"], // or ["MarkdownRemark"] (or both)
              },
            },
            `gatsby-remark-autolink-headers`,
            
            {
              resolve: `gatsby-remark-double-brackets-link`,
              options: {
                titleToURLPath: `${__dirname}/resolve-url.js`,
                stripBrackets: true,
              }
            }
            
        ]
      }
    }
  ],
}
