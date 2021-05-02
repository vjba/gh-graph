import { Link } from 'gatsby'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { version } from '../../package.json'

const Footer = () => {
    const query = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    repoReleasesUrl
                }
            }
        }
    `)

    return (
        <div className='row justify-content-center mt-5 text-center'>
            <div className='col-md-3'>
                <Link to={query.site.siteMetadata.repoReleasesUrl + version}>
                    {' '}
                    gh-graph {version}
                </Link>
            </div>
            <div className='row justify-content-center my-3 text-center'>
                <div className='col-md-3'>
                    &copy; vjba {new Date().getFullYear()}
                </div>
            </div>
        </div>
    )
}

export default Footer
