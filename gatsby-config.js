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
            /*
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
            */
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
            },
        ]
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-49696901-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      }
    },
  ],
}
