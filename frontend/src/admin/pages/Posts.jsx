import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { usePostsContext } from '../../hooks/usePostsContext'

import { HiMiniMagnifyingGlass } from "react-icons/hi2"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { MdSystemUpdateAlt } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"
import { FaRegCheckCircle } from "react-icons/fa";

import AdminDrawer from "../components/AdminDrawer"
import AdminNavbar from "../components/AdminNavbar"
import CreatePostModal from "../../shared/components/CreatePostModal"
import UpdatePostModal from '../../shared/components/UpdatePostModal'
import PostItem from "./PostItem"

const Posts = () => {

    const navigate = useNavigate();

    const { posts, dispatch } = usePostsContext()
    // const [allPosts, setAllPosts] = useState([])

    const [visible, setVisible] = useState(false)
    const [success, setSuccess] = useState(false)

    const [updateVisible, setUpdateVisible] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const [tempId, setTempId] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(1)
    const [total, setTotal] = useState(0)
    const [inputPage, setInputPage] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:4000/admin/post?page=${currentPage}&limit=${limit}`)
            .then((response) => {
                console.log(response.data)
                dispatch({ type: 'SET_POSTS', payload: response.data.posts || [] })
                setTotalPages(response.data.pages)
                setTotal(response.data.total)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [currentPage, limit])

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage); // Update the page number
        }
    };

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

    const fetchId = (id) => {
        setTempId(id)
    }

    const handleView = (id) => {
        navigate('/post/display/' + id)
    }



    return (

        <>

            <AdminDrawer>
                <AdminNavbar />

                <div className={`toast toast-top toast-end transition duration-300 ${success ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="alert alert-success">
                        <FaRegCheckCircle style={{ color: 'white' }} />
                        <span className='text-white'> Post created successfully.</span>
                    </div>
                </div>
                <div className={`toast toast-top toast-end transition duration-300 ${deleted ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="alert alert-error">
                        <FaRegCheckCircle style={{ color: 'white' }} />
                        <span className='text-white'> Post deleted successfully.</span>
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
                                <button onClick={() => setVisible(true)} className="btn btn-sm text-xs w-20 bg-secondary text-white"> Post </button>
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
                                            <th></th>
                                            <th className='w-1/4'>Title</th>
                                            <th className='w-1/4'>Content</th>
                                            <th className='w-1/5'>Sender</th>
                                            <th className='w-1/6'>Date Created</th>
                                            <th className=''>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {posts && posts.map((item, index) => (
                                            // <tr onClick={() => { handleView(item._id) }} className="hover" key={index}>
                                            <tr className="hover" key={index}>

                                                <PostItem
                                                    index={index}
                                                    key={index}
                                                    // profile name to be updated to user
                                                    pid={item._id}
                                                    title={item.title}
                                                    content={item.content}
                                                    profileName={item.profileName}
                                                    attachments={item.attachments}
                                                    created={item.createdAt}
                                                    openUpdate={openUpdate}
                                                    fetchId={fetchId}
                                                    onDelete={onDelete}
                                                />
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <CreatePostModal Pvisible={visible} onClose={onClose} onSuccess={onSuccess} />
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
            </AdminDrawer>
        </>
    )
}

export default Posts