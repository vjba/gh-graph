import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = props => {
    const query = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    description
                    repoUrl
                    siteUrl
                    title
                }
            }
        }
    `)

    return (
        <Helmet>
            <html lang='en' />
            <meta charSet='utf-8' />
            <meta
                name='description'
                content={query.site.siteMetadata.description}
            />
            <title>gh-graph by vjba | {props.userName}</title>
            <link rel='canonical' href={query.site.siteMetadata.siteUrl} />
        </Helmet>
    )
}

export default Seo
