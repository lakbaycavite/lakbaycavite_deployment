import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useEventsContext } from '../../hooks/useEventsContext'
import moment from 'moment';

import { HiMiniMagnifyingGlass } from "react-icons/hi2"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri"
import { FaRegCheckCircle } from "react-icons/fa";

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import AdminDrawer from "../components/AdminDrawer"
import AdminNavbar from "../components/AdminNavbar"
import UpdatePostModal from '../../shared/components/UpdatePostModal'
import CreateEvent from '../../shared/components/CreateEvent'
import { useNavigate } from 'react-router-dom';




const Events = () => {

    const navigate = useNavigate()

    const { events, dispatch } = useEventsContext()
    const [openModal, setOpenModal] = useState(false);
    const [visible, setVisible] = useState(false)

    const [success, setSuccess] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const [updateVisible, setUpdateVisible] = useState(false)
    const [tempId, setTempId] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(1)
    const [total, setTotal] = useState(0)
    const [inputPage, setInputPage] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:4000/admin/event?page=${currentPage}&limit=${limit}`)
            .then((response) => {
                console.log(response.data)
                // setAllPosts(response.data)
                dispatch({ type: 'SET_EVENTS', payload: response.data.events || [] })
                setTotalPages(response.data.pages)
                setTotal(response.data.total)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [currentPage, limit])

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    const onClose = () => {
        setVisible(false)
    }

    const onSuccess = () => {
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000)
    }

    const onDelete = () => {
        setDeleted(true)
        setTimeout(() => {
            setDeleted(false)
        }, 3000)
    }

    const onCloseUpdate = () => {
        setUpdateVisible(false)
    }

    const openUpdate = () => {
        setUpdateVisible(true)
    }

    const handleDelete = (id) => {

        axios.delete("http://localhost:4000/admin/event/delete/" + id)
            .then((response) => {
                console.log(response);
                onDelete()
                dispatch({ type: 'DELETE_EVENT', payload: response.data })
            })
            .catch((err) => {
                console.log(err);
            })
        setOpenModal(false)

    }

    const handleConfirmModal = (id) => {
        setTempId(id)
        setOpenModal(true)

    }

    const handleView = (id) => {
        navigate('/event/display/' + id)
    }

    return (
        <>
            <AdminDrawer>
                <AdminNavbar />

                <div className={`toast toast-top toast-end transition duration-300 ${success ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="alert alert-success">
                        <FaRegCheckCircle style={{ color: 'white' }} />
                        <span className='text-white'> Event created successfully.</span>
                    </div>
                </div>
                <div className={`toast toast-top toast-end transition duration-300 ${deleted ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="alert alert-error">
                        <FaRegCheckCircle style={{ color: 'white' }} />
                        <span className='text-white'> Event deleted successfully.</span>
                    </div>
                </div>

                <div className="flex flex-col max-h-none p-10">
                    <div className="h-full w-full ">
                        {/* pagination and filter */}
                        <div className="w-full h-12 mb-5 flex justify-between items-center">

                            <div className="w-[24rem] h-12 flex justify-between items-center">
                                <label className="input input-bordered flex items-center gap-2 w-64 input-sm">
                                    <input type="text" className="grow input w-full max-w-xs input-sm" placeholder="Search" />
                                    <HiMiniMagnifyingGlass />
                                </label>
                                <button onClick={() => setVisible(true)} className="btn btn-sm text-xs w-20 bg-secondary text-white"> Event </button>
                            </div>
                            <div className="w-[34rem] h-12 flex justify-between items-center">
                                <div className="join flex items-center justify-center">
                                    <button className="join-item btn btn-sm" onClick={() => handlePageChange(1)} disabled={currentPage === 1}><MdOutlineKeyboardDoubleArrowLeft /></button>
                                    <button className="join-item btn btn-sm" onClick={() => handlePageChange(currentPage - 1)}><MdOutlineKeyboardArrowLeft /></button>
                                    <button className="join-item btn btn-sm" onClick={() => handlePageChange(currentPage + 1)}><MdOutlineKeyboardArrowRight /></button>
                                    <button className="join-item btn btn-sm" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}><MdOutlineKeyboardDoubleArrowRight /></button>
                                </div>
                                <p className="text-xs">page <label className="font-bold">{currentPage} of {totalPages}</label> | Go to page:
                                    <input
                                        type="text"
                                        className="input input-bordered input-xs w-14"
                                        value={inputPage}
                                        onChange={(e) => setInputPage(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                const page = Number(inputPage); // Convert input to number
                                                if (page >= 1 && page <= totalPages) {
                                                    setCurrentPage(page); // Only update if valid
                                                }
                                            }
                                        }}
                                    />
                                </p>
                                <p className="text-xs">
                                    Show<select
                                        className="select select-ghost w-14 select-xs"
                                        value={limit}
                                        onChange={(e) => {
                                            setLimit(Number(e.target.value));  // Update limit
                                            setCurrentPage(1);  // Reset to page 1
                                        }}
                                    >
                                        <option value={10}>10</option>
                                        <option value={15}>15</option>
                                        <option value={20}>20</option>
                                        <option value={30}>30</option>
                                        <option value={50}>50</option>
                                    </select>
                                </p>
                                <p className="text-xs">
                                    Total: {total}
                                </p>
                            </div>
                        </div>

                        {/* data table */}
                        <div className="w-full h-full bg-white">



                            <div className="overflow-x-auto">
                                <table className="table table-xs">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th className=''></th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Event Type</th>
                                            <th>Date Created</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {events && events.map((item, index) => (
                                            <tr className='hover' key={index}>
                                                <th>{index + 1}</th>
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                <td>{item.eventType}</td>
                                                <td>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                                <td>
                                                    <div className='tooltip tooltip-info' data-tip='Open Event'>
                                                        <button className="btn btn-ghost btn-xs" onClick={() => handleView(item._id)}><FaRegEye /></button>
                                                    </div>
                                                    <div className='tooltip tooltip-error' data-tip='Delete Event'>
                                                        <button className="btn btn-ghost btn-xs" onClick={() => handleConfirmModal(item._id)}><RiDeleteBin6Line /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <CreateEvent visible={visible} onClose={onClose} onSuccess={onSuccess} />
                        <UpdatePostModal visible={updateVisible} onCloseUpdate={onCloseUpdate} onSuccess={onSuccess} openUpdate={openUpdate} tempId={tempId} />

                        {/* pagination and filter below */}
                        <div className="w-full h-12 mt-5 flex justify-end items-center">

                            <div className="w-[34rem] h-12 flex justify-between items-center">
                                <div className="join flex items-center justify-center">
                                    <button className="join-item btn btn-sm" onClick={() => handlePageChange(1)} disabled={currentPage === 1}><MdOutlineKeyboardDoubleArrowLeft /></button>
                                    <button className="join-item btn btn-sm" onClick={() => handlePageChange(currentPage - 1)}><MdOutlineKeyboardArrowLeft /></button>
                                    <button className="join-item btn btn-sm" onClick={() => handlePageChange(currentPage + 1)}><MdOutlineKeyboardArrowRight /></button>
                                    <button className="join-item btn btn-sm" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}><MdOutlineKeyboardDoubleArrowRight /></button>
                                </div>
                                <p className="text-xs">page <label className="font-bold">{currentPage} of {totalPages}</label> | Go to page:
                                    <input
                                        type="text"
                                        className="input input-bordered input-xs w-14"
                                        value={inputPage}
                                        onChange={(e) => setInputPage(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                const page = Number(inputPage); // Convert input to number
                                                if (page >= 1 && page <= totalPages) {
                                                    setCurrentPage(page); // Only update if valid
                                                }
                                            }
                                        }}
                                    />
                                </p>
                                <p className="text-xs">
                                    Show<select
                                        className="select select-ghost w-14 select-xs"
                                        value={limit}
                                        onChange={(e) => {
                                            setLimit(Number(e.target.value));  // Update limit
                                            setCurrentPage(1);  // Reset to page 1
                                        }}
                                    >
                                        <option value={10}>10</option>
                                        <option value={15}>15</option>
                                        <option value={20}>20</option>
                                        <option value={30}>30</option>
                                        <option value={50}>50</option>
                                    </select>
                                </p>
                                <p className="text-xs">
                                    Total: {total}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to delete this post?
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button color="failure" onClick={() => handleDelete(tempId)}>
                                    {"Yes, I'm sure"}
                                </Button>
                                <Button color="gray" onClick={() => setOpenModal(false)}>
                                    No, cancel
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </AdminDrawer>
        </>
    )
}

export default Events