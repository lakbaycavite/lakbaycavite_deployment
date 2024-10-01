import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavbarModifier = ({ children }) => {

    const location = useLocation()

    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        if (
            location.pathname === '/register' ||
            location.pathname === '/admin/post' ||
            location.pathname === '/admin/event' ||
            location.pathname === '/admin/posts'
        ) {
            setShowNavbar(false)
        }
        else{
            setShowNavbar(true)
        }
    }, [location])

   

        return (
            <div>{showNavbar && children}</div>
        )
}

export default NavbarModifier