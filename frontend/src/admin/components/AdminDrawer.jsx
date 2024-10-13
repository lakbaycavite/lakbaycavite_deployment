import { useNavigate, Link } from "react-router-dom";

import { FaUserFriends } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsFillPostcardFill } from "react-icons/bs";
import { MdEvent } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";


const AdminDrawer = ({ children }) => {

    const navigate = useNavigate()

    return (
        <div className="drawer lg:drawer-open max-h-none">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            {/* Page content here */}
            <div className="drawer-content">
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-primary text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <Link to='/home' className="btn btn-ghost text-3xl font-bold text-gray-200 hover:bg-secondary hover:text-black">Lakbay Cavite</Link>
                    <br />
                    <br />
                    <label className="text-md text-gray-400">Main</label>
                    <li><a className="text-lg text-white hover:bg-secondary hover:text-black" onClick={() => navigate('/admin/post')}><MdDashboard /> Dashboard</a></li>
                    <li><a className="text-lg text-white hover:bg-secondary hover:text-black" onClick={() => navigate('/admin/user')}><FaUserFriends /> Users</a></li>
                    <li><a className="text-lg text-white hover:bg-secondary hover:text-black" onClick={() => navigate('/admin/post')}><BsFillPostcardFill /> Posts</a></li>
                    <li><a className="text-lg text-white hover:bg-secondary hover:text-black" onClick={() => navigate('/admin/event')}><MdEvent /> Events</a></li>
                    <br />
                    {/* <br />
                    <label className="text-md text-gray-400">Pages</label>
                    <li><a className="text-lg text-white hover:bg-secondary hover:text-black"><IoHome /> Home</a></li>
                    <li><a className="text-lg text-white hover:bg-secondary hover:text-black"><GiMagnifyingGlass /> Placefinder</a></li>
                    <li><a className="text-lg text-white hover:bg-secondary hover:text-black"><FaMap /> Maps</a></li>
                    <li><a className="text-lg text-white hover:bg-secondary hover:text-black"><RiCommunityFill /> Community</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default AdminDrawer