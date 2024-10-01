import axios from 'axios'
import React from 'react'
import { MdSystemUpdateAlt } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"



const PostItem = (props) => {

    const { openUpdate } = props
    const { fetchId } = props

    const handleDelete = (id) => {
        const resp = window.confirm("Do you really want to delete?");
        if (resp) {
            axios.delete("http://localhost:4000/admin/post/delete/" + id)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
    
    const handleUpdate = () => {
        openUpdate()
        fetchId(props.pid)
    }

    return (
        <React.Fragment key={props.index}>
            <th>{props.index}</th>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.user}</td>
            <td>December 21, 2002</td>
            {/* <td><MdSystemUpdateAlt /> | <RiDeleteBin6Line /></td> */}
            <td>
                <div className="space-x-2">
                    <button className="btn btn-ghost btn-xs" onClick={handleUpdate}><MdSystemUpdateAlt /></button>
                    <button className="btn btn-ghost btn-xs"  onClick={() => handleDelete(props.pid)}><RiDeleteBin6Line /></button>
                </div>
            </td>
        </React.Fragment>
    )
}

export default PostItem