import { useLocation } from "react-router-dom"

const AdminNavbar = () => {

    const getTitle = () => {
        const location = useLocation()
        if (location.pathname === '/admin/post') {
            return 'Posts';
        } else if (location.pathname === '/admin/event') {
            return 'Events';
        } else {
            return 'Default Title'; // Fallback title
        }

    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">{getTitle()}</a>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline text-secondary">Logout</a>
            </div>
        </div>
    )
}

export default AdminNavbar