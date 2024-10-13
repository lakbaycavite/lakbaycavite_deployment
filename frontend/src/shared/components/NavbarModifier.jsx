import React, { useEffect, useState } from 'react'
import { useLocation, matchPath } from 'react-router-dom'

const NavbarModifier = ({ children }) => {

    const location = useLocation()

    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        if (
            location.pathname === '/register' ||
            location.pathname === '/admin/post' ||
            location.pathname === '/admin/event' ||
            location.pathname === '/admin/user' ||
            matchPath('/post/display/:id', location.pathname) ||
            matchPath('/event/display/:id', location.pathname)

        ) {
            setShowNavbar(false)
        }
        else {
            setShowNavbar(true)
        }
    }, [location])



    return (
        <div>{showNavbar && children}</div>
    )
}

export default NavbarModifier