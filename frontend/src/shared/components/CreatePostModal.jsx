import { FaImage } from "react-icons/fa6";
import { CgAttachment } from "react-icons/cg";
import { MdEmojiEmotions } from "react-icons/md";
import { usePostsContext } from "../../hooks/usePostsContext";

import axios from 'axios'
import { useState, useEffect, useRef } from "react"

const CreatePostModal = ({ Pvisible, onClose, onSuccess }) => {

    const { dispatch } = usePostsContext()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [user, setUser] = useState('')
    const [attachments, setAttachments] = useState('')
    const [comments, setComments] = useState([])

    const modalRef = useRef(null);

    useEffect(() => {
        if (!modalRef.current) {
            return;
        }
        Pvisible ? modalRef.current.showModal() : modalRef.current.close();
    }, [Pvisible]);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }

    const handleESC = (event) => {
        event.preventDefault();
        handleClose();
    }

    const handleSuccess = () => {
        onSuccess(true)
    }

    const handlePost = async (e) => {
        // e.preventDefault()

        const post = {
            title,
            content,
            user,
            attachments,
        }

        await axios.post("http://localhost:4000/admin/post", post)
            .then((response) => {
                console.log(response.data);
                handleClose()
                handleSuccess()
                setTitle('')
                setContent('')

                dispatch({ type: 'CREATE_POST', payload: response.data })
            })
            .catch((err) => {
                console.log(post);
                console.log(err)
            })


    }

    return (
        <>
            <dialog ref={modalRef} id="my_modal_1" className="modal " onCancel={handleESC} >
                <div className="modal-box relative max-w-none w-[50rem] flex justify-center items-center bg-base-300">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* <p className="">Press ESC key or click on ✕ button to close</p> */}
                    <div className="w-full h-full">
                        {/* Header */}
                        <div className="w-full h-12 flex justify-center items-center">
                            <h3 className="font-bold text-lg">Create Post</h3>
                        </div>
                        {/* text input */}
                        <div className="w-full h-16 rounded-md flex justify-center items-center mt-5">
                            <input type="text" placeholder="Type your title here..." value={title} className="input w-full input-md" onChange={(e) => setTitle(e.target.value)} />

                        </div>
                        <div className="w-full h-72 rounded-lg flex flex-col bg-white">
                            <div className="w-full h-5/6 rounded-xl">
                                <textarea className="textarea w-full h-full" placeholder="Ask your inquiries here..." value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                            </div>
                            <div className="w-full h-1/6 rounded-lg flex flex-row justify-between">
                                <div className="w-28 h-full flex items-center justify-evenly rounded-lg">
                                    <button className="btn btn-ghost btn-sm" value={attachments} onClick={(e) => setAttachments('test')}>
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
                            <div className="w-[16rem] h-full flex justify-between">
                                <button onClick={handleClose} className="btn btn-sm w-28"> Cancel </button>
                                <button className="btn btn-sm btn-success text-white w-28" onClick={() => { handlePost() }}> Post </button>
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop" onClick={handleClose}>
                    <button>close</button>
                </form>
            </dialog>

        </>
    )
}

export default CreatePostModal