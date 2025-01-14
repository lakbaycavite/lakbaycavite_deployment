
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-20 shadow">
                        <li><a>Menu</a></li>
                        <li>
                            <a>Menu</a>
                            <ul className="p-3">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a href='home' className="btn btn-ghost text-2xl font-bold text-primary">Lakbay Cavite</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Menu</a></li>
                    <li><a>Map</a></li>
                    <li><a>Community</a></li>
                    <li>
                        <details>
                            <summary>More</summary>
                            <ul className="p-2">
                                <li><a>About</a></li>
                                <li><a>Contacts</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='/login' className="text-body btn text-secondary">Sign in</a>
            </div>
        </div>
    )
}

export default Navbar