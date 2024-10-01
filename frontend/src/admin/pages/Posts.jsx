import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

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

    const [allPosts, setAllPosts] = useState([])
    const [visible, setVisible] = useState(false)
    const [success, setSuccess] = useState(false)

    const [updateVisible, setUpdateVisible] = useState(false)
    const [updateSuccess, setUpdateSuccess] = useState(false)

    const [tempId, setTempId] = useState('')

    useEffect(() => {
        axios.get('http://localhost:4000/admin/post/')
            .then((response) => {
                console.log(response.data)
                setAllPosts(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const onClose = () => {
        setVisible(false)
    }

    const onSuccess = () => {
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
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

                <div className="flex flex-col h-screen bg-red-200 p-10">
                    <div className="h-full w-full bg-red-300">
                        {/* pagination and filter */}
                        <div className="w-full h-12 bg-red-400 mb-5 flex justify-between items-center">

                            <div className="w-[24rem] h-12 bg-blue-100 flex justify-between items-center">
                                <label className="input input-bordered flex items-center gap-2 w-64 input-sm">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <HiMiniMagnifyingGlass />
                                </label>
                                <button onClick={() => setVisible(true)} className="btn btn-sm text-xs w-20 bg-secondary text-white"> Post </button>
                            </div>
                            <div className="w-[34rem] h-12 bg-blue-200 flex justify-between items-center">
                                <div className="join flex items-center justify-center">
                                    <button className="join-item btn btn-sm"><MdOutlineKeyboardDoubleArrowLeft /></button>
                                    <button className="join-item btn btn-sm"><MdOutlineKeyboardArrowLeft /></button>
                                    <button className="join-item btn btn-sm"><MdOutlineKeyboardArrowRight /></button>
                                    <button className="join-item btn btn-sm"><MdOutlineKeyboardDoubleArrowRight /></button>
                                </div>
                                <p className="text-xs">page <label className="font-bold">1 of 3</label> | Go to page: <input type="text" className="input input-bordered input-xs w-14" /> </p>
                                <p className="text-xs">
                                    Show <select className="select select-ghost w-14 select-xs">
                                        <option>10</option>
                                        <option>15</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>50</option>
                                    </select>
                                </p>
                                <p className="text-xs">
                                    Total: 130
                                </p>
                            </div>
                        </div>

                        {/* data table */}
                        <div className="w-full h-[40rem] bg-white">



                            <div className="overflow-x-auto">
                                <table className="table table-xs">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Title</th>
                                            <th>Content</th>
                                            <th>Sender</th>
                                            <th>Date Created</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {allPosts && allPosts.map((item, index) => (
                                            <tr className="hover">
                                                <PostItem
                                                    pid={item._id}
                                                    title={item.title}
                                                    content={item.content}
                                                    user={item.user}
                                                    attachments={item.attachments}
                                                    openUpdate={openUpdate}
                                                    fetchId={fetchId}
                                                    key={item._id} />
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <CreatePostModal visible={visible} onClose={onClose} onSuccess={onSuccess} />
                        <UpdatePostModal visible={updateVisible} onCloseUpdate={onCloseUpdate} onSuccess={onSuccess} openUpdate={openUpdate} tempId={tempId} />

                    </div>
                </div>
            </AdminDrawer>
        </>
    )
}

export default Posts