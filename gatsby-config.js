module.exports = {
    siteMetadata: {
        title: 'gh-graph',
        description: 'View all public data for any GitHub profile',
        siteUrl: 'https://gh-graph.vjba.dev',
        repoUrl: 'https://github.com/vjba/gh-graph',
        repoReleasesUrl: 'https://github.com/vjba/gh-graph/releases/tag/'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
                name: 'gh-graph',
                short_name: 'gh_graph',
                background_color: '#fff'
            }
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true
            }
        }
    ]
}
