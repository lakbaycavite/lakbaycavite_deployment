import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { MdSystemUpdateAlt } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from 'react-router-dom'
import moment from 'moment';

import { usePostsContext } from '../../hooks/usePostsContext'

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";


const PostItem = (props) => {

    const [openModal, setOpenModal] = useState(false);

    const { dispatch } = usePostsContext()

    const navigate = useNavigate();
    const { openUpdate } = props

    const handleDelete = (id) => {

        axios.delete("http://localhost:4000/admin/post/delete/" + id)
            .then((response) => {
                console.log(response);
                dispatch({ type: 'DELETE_POST', payload: response.data })
            })
            .catch((err) => {
                console.log(err);
            })
        setOpenModal(false)
    }


    const mongoDate = props.created
    const formattedDate = moment(mongoDate).format('MMMM Do, YYYY');

    const handleView = (id) => {
        navigate('/post/display/' + id)
    }

    return (
        <React.Fragment key={props.index}>
            <th>{props.index + 1}</th>
            <td><p className='truncate w-60'>{props.title}</p></td>
            <td><p className='truncate w-40'>{props.content}</p></td>
            <td>{props.profileName}</td>
            <td>{formattedDate}</td>
            {/* <td><MdSystemUpdateAlt /> | <RiDeleteBin6Line /></td> */}
            {/* <td>
                <div className="space-x-2 flex flex-row">
                    <div className='tooltip tooltip-info' data-tip='Open Post'>
                        <button className="btn btn-ghost btn-xs" onClick={() => handleView(props.pid)}><MdSystemUpdateAlt /></button>

                    </div>
                    <div className='tooltip tooltip-error' data-tip='Delete Post'>
                        <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(props.pid)}><RiDeleteBin6Line /></button>

                    </div>
                </div>
            </td> */}
            <td>
                <div className="space-x-2 flex flex-row">
                    <div className='tooltip tooltip-info' data-tip='Open Post'>
                        <button className="btn btn-ghost btn-xs" onClick={() => handleView(props.pid)}><MdSystemUpdateAlt /></button>

                    </div>
                    <div className='tooltip tooltip-error' data-tip='Delete Post'>
                        <button className="btn btn-ghost btn-xs" onClick={() => setOpenModal(true)}><RiDeleteBin6Line /></button>

                    </div>
                </div>
            </td>

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this post?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => handleDelete(props.pid)}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default PostItem