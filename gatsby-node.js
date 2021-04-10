const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath != null) {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve("./src/templates/blog.js")
    const res = await graphql(`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {ne: null}}) {
            edges {
                node {
                    fileAbsolutePath
                    fields {
                      slug
                    }
                }
            }
            }
        }
    `)
    
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `${edge.node.fileAbsolutePath.includes('/notes/') ? `/notes/${edge.node.fields.slug}` : `/blog/${edge.node.fields.slug}`}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}