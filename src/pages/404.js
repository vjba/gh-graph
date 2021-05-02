import * as React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => {
    return (
        <main>
            <h1>Oops</h1>
            <p className='font-monospace'>
                <Link to={'/'}>Go to root?</Link>
            </p>
        </main>
    )
}

export default NotFoundPage
