import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const UserNameForm = props => {
    const handleChange = event => {
        props.onChange(event.target.value)
    }

    return (
        <div className='card'>
            <form>
                <div className='input-group shadow'>
                    <div className='input-group-text' id='ghAddon'>
                        Username
                    </div>
                    <input
                        type='text'
                        id='userNameInput'
                        placeholder='vjba'
                        className='form-control'
                        value={props.userName}
                        onChange={handleChange}
                        aria-describedby='userNameHelp'
                        required
                        pattern='.{3,39}'
                    />
                    <button
                        className='btn btn-primary'
                        onClick={props.onSubmit}>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{' '}
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserNameForm
