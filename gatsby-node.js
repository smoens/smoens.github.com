const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'Mdx' && node.fileAbsolutePath != null) {
        const slug = path.basename(node.fileAbsolutePath, '.mdx')
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
            allMdx(filter: {fileAbsolutePath: {ne: null}}) {
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
    
    res.data.allMdx.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `${edge.node.fileAbsolutePath.includes('/notes/') ? `/notes/${edge.node.fields.slug}` : `/blog/${edge.node.fields.slug}`}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}