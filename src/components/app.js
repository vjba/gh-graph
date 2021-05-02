import React, { useState } from 'react'
import UserNameForm from './userNameForm'
import GitHubProfile from './gitHubProfile'
import Seo from './seo'
import Footer from './footer'

const App = () => {
    const [userName, setUsername] = useState('vjba')
    const [profileData, setProfileData] = useState({
        login: 'vjba',
        id: 21375278,
        node_id: 'MDQ6VXNlcjIxMzc1Mjc4',
        avatar_url: 'https://avatars.githubusercontent.com/u/21375278?v=4',
        url: 'https://api.github.com/users/vjba',
        html_url: 'https://github.com/vjba',
        followers_url: 'https://api.github.com/users/vjba/followers',
        following_url:
            'https://api.github.com/users/vjba/following{/other_user}',
        gists_url: 'https://api.github.com/users/vjba/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/vjba/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/vjba/subscriptions',
        organizations_url: 'https://api.github.com/users/vjba/orgs',
        repos_url: 'https://api.github.com/users/vjba/repos',
        events_url: 'https://api.github.com/users/vjba/events{/privacy}',
        received_events_url:
            'https://api.github.com/users/vjba/received_events',
        type: 'User',
        blog: 'vjba.dev',
        bio: '👋',
        public_repos: 9,
        public_gists: 1,
        followers: 4,
        following: 3,
        created_at: '2016-09-01T01:55:44Z',
        updated_at: '2021-04-20T00:30:12Z'
    })

    const handleChange = newUserName => {
        setUsername(newUserName)
    }

    const handleClick = event => {
        event.preventDefault()
        console.debug(userName)
        gitHubRequest(userName)
    }

    const gitHubRequest = async userName => {
        const url = `https://api.github.com/users/${userName}`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            }
        })

        if (response.status >= 200 && response.status < 300) {
            setProfileData(await response.json())
        }
    }

    return (
        <>
            <Seo userName={userName}></Seo>
            <main className='container-fluid'>
                <h1 className='display-3 text-center mt-3'>gh-graph</h1>
                <div className='row justify-content-center mt-5 mx-md-5'>
                    <div className='col-md-8'>
                        <UserNameForm
                            userName={userName}
                            onChange={handleChange}
                            onSubmit={handleClick}
                        />
                    </div>
                </div>
                <div className='row justify-content-center my-5 mx-md-5'>
                    <div className='col-md-8'>
                        <GitHubProfile
                            userName={userName}
                            profileData={profileData}
                        />
                    </div>
                </div>
                <Footer></Footer>
            </main>
        </>
    )
}

export default App
