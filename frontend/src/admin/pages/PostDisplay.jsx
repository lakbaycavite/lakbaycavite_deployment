import { FaImage } from "react-icons/fa6";
import { CgAttachment } from "react-icons/cg";
import { MdEmojiEmotions } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

import axios from 'axios'
import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { usePostsContext } from "../../hooks/usePostsContext";

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";


const PostDisplay = ({ onSuccess }) => {

    const { id } = useParams()
    const { dispatch } = usePostsContext()

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [user, setUser] = useState('')
    const [attachments, setAttachments] = useState('')
    const [comments, setComments] = useState([])
    const [userId, setUserId] = useState('')

    const [success, setSuccess] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleBack = () => {
        navigate('/admin/post')
    }

    const handleDeletePopup = () => {
        setDeleted(true)
        setLoading(true)
        setTimeout(() => {
            setDeleted(false)
            navigate('/admin/post')
        }, 1000)
    }

    useEffect(() => {
        axios.get('http://localhost:4000/admin/post/' + id)
            .then((res) => {
                console.log(res.data)
                setTitle(res.data.title)
                setContent(res.data.content)
                // setUser(res.data.user)
                // setAttachments(res.data.attachments)
                // setComments(res.data.comments)
                setUserId(res.data._id)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleDelete = (id) => {
        setOpenModal(false)
        axios.delete("http://localhost:4000/admin/post/delete/" + id)
            .then((response) => {
                console.log(response);
                dispatch({ type: 'DELETE_POST', payload: response.data })
                handleDeletePopup()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleConfirmModal = () => {
        setOpenModal(true)
    }

    return (
        <>
            <div className={`toast toast-top toast-end transition duration-300 ${success ? 'opacity-100' : 'opacity-0'}`}>
                <div className="alert alert-success">
                    <FaRegCheckCircle style={{ color: 'white' }} />
                    <span className='text-white'> Post updated successfully.</span>
                </div>
            </div>
            <div className={`toast toast-top toast-end transition duration-300 ${deleted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="alert alert-error">
                    <FaRegCheckCircle style={{ color: 'white' }} />
                    <span className='text-white'> Post deleted successfully.</span>
                </div>
            </div>

            <div className="hero min-h-screen flex justify-center items-center">
                <div className="w-[50rem] h-[45rem] bg-base-300 p-10 flex flex-col justify-between rounded-xl">
                    {/* avatar */}
                    <div className="w-full h-1/5 flex flex-row">
                        <div className="w-[10rem] h-full flex justify-center items-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        {/* profile deets */}
                        <div className="w-full h-full flex justify-center items-center">
                            {/* deets */}
                            <div className="w-3/5 h-24 flex flex-col justify-center items-start">
                                <div>
                                    <p className="text-gray-500">User: <label className="text-primary">Alex Gonzaga</label></p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Created: <label className="text-primary">December 1, 2024</label></p>                                </div>
                            </div>

                            <div className="w-2/5 h-24 flex justify-center items-center">
                                <button className={`btn btn-error text-white w-32 ${loading ? 'btn-disabled' : ''}`} onClick={() => { handleConfirmModal() }}>
                                    {loading ? (<span className="loading loading-spinner loading-md"></span>) : 'Delete'}
                                </button>
                            </div>


                        </div>
                    </div>

                    {/* post */}
                    <div className="w-full h-4/5">

                        {/* text input */}
                        <div className="w-full h-16 rounded-md flex justify-center items-center mt-5">
                            <input type="text" placeholder="Type your title here..." className="input w-full input-md" value={title || ''} onChange={(e) => setTitle(e.target.value)} />
                            {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                        </div>
                        <div className="w-full h-72 rounded-lg flex flex-col bg-white">
                            <div className="w-full h-5/6 rounded-xl">
                                <textarea className="textarea w-full h-full" placeholder="Ask your inquiries here..." value={content || ''} onChange={(e) => setContent(e.target.value)} ></textarea>
                            </div>
                            <div className="w-full h-1/6 rounded-lg flex flex-row justify-between">
                                <div className="w-28 h-full flex items-center justify-evenly rounded-lg">
                                    <button className="btn btn-ghost btn-sm">
                                        <FaImage size={20} />
                                    </button>
                                    <button className="btn btn-ghost btn-sm">
                                        <CgAttachment size={20} />
                                    </button>
                                </div>
                                <div className="w-16 h-full flex items-center justify-center rounded-lg">
                                    <button className="btn btn-ghost btn-sm">
                                        <MdEmojiEmotions size={25} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* attachments */}
                        <div className="w-full h-16 bg-white mt-5 rounded-md flex justify-center items-center">

                        </div>
                        {/* buttons */}
                        <div className="w-full h-8 mt-5 rounded-md flex justify-end">
                            <div className="w-[16rem] h-full flex justify-end">
                                <button className={`btn btn-sm w-28`} onClick={() => { handleBack() }}> Back </button>
                                {/* <button className={`btn btn-sm btn-success text-white w-28 ${isNotEditable ? `btn-disabled` : ``}`} onClick={() => { handleUpdate(userId) }}> Update </button> */}
                            </div>
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
                            <Button color="failure" onClick={() => handleDelete(id)}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PostDisplay