import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({...props}) => {
    console.log('HEADER', {props})
    return (
        <header className="p-l white-bg d-flex">
            <Link to="/" className="text-b no-hover">
                {'./Nadadouro'}
            </Link>
            <Link to="/login" className="m-ls">{'Login'}</Link>
        </header>
    )
}

export default Header