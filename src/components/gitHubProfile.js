import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'gatsby'

const GitHubProfile = props => {
    return (
        <>
            <div className='row' id='profile-card'>
                <div className='col-md-12'>
                    <div className='card shadow mb-5'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img
                                    src={props.profileData.avatar_url}
                                    alt='GitHub Avatar'
                                />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h5 className='card-title fw-bolder'>
                                        {props.profileData.login}
                                    </h5>
                                    <p className='card-text'>
                                        {props.profileData.bio}
                                    </p>
                                    <p className='card-text'>
                                        Followers: {props.profileData.followers}
                                    </p>
                                    <p className='card-text'>
                                        Following: {props.profileData.following}
                                    </p>
                                    <p className='card-text'>
                                        Repos: {props.profileData.public_repos}
                                    </p>
                                    <p className='card-text'>
                                        Gists: {props.profileData.public_gists}
                                    </p>
                                    <p className='card-text'>
                                        Created:{' '}
                                        {new Date(
                                            props.profileData.created_at
                                        ).toDateString()}
                                    </p>
                                    <p>
                                        Updated:{' '}
                                        {new Date(
                                            props.profileData.updated_at
                                        ).toDateString()}
                                    </p>
                                    <p className='card-text'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card shadow'>
                <div className='card-header'>
                    <div className='row justify-content-between my-2'>
                        <div className='col-sm-3'>
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            {' profile for '}
                            {props.profileData.login}
                        </div>
                        <div className='col-sm-3 text-nowrap'>
                            <Link to={props.profileData.url}>
                                view raw JSON{' '}
                                <FontAwesomeIcon
                                    icon={faLink}></FontAwesomeIcon>
                            </Link>
                        </div>
                        <div className='col-sm-3 text-nowrap'>
                            <Link to={props.profileData.html_url}>
                                view HTML{' '}
                                <FontAwesomeIcon
                                    icon={faLink}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='table-responsive-md'>
                    <table className='table  table-hover'>
                        <tbody>
                            {Object.keys(props.profileData).map((key, i) => (
                                <tr>
                                    <td key={i} className='fw-bolder'>
                                        {key}
                                    </td>
                                    <td>{props.profileData[key]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default GitHubProfile
