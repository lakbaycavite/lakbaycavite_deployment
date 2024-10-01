import AdminDrawer from "../components/AdminDrawer"
import AdminNavbar from "../components/AdminNavbar"

const Events = () => {
    return (
        <>
            <AdminDrawer >
                <AdminNavbar />

                <div className="bg-red-200">
                    This is events
                </div>
            </AdminDrawer>
        </>
    )
}

export default Events