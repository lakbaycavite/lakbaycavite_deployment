import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import AdminDrawer from "../components/AdminDrawer"
import AdminNavbar from "../components/AdminNavbar"

import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { HiMiniMagnifyingGlass } from "react-icons/hi2"
import { FaRegCheckCircle } from "react-icons/fa";

import { useState } from "react"

const Users = () => {

    const [openModal, setOpenModal] = useState(false);

    const [success, setSuccess] = useState('')
    const [visible, setVisible] = useState('')

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
                        <div className="w-full h-full bg-white">

                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <th>Name</th>
                                            <th>Job</th>
                                            <th>Favorite Color</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                        <div className="text-sm opacity-50">United States</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                            </td>
                                            <td>Purple</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Brice Swyre</div>
                                                        <div className="text-sm opacity-50">China</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Carroll Group
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                            </td>
                                            <td>Red</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Marjy Ferencz</div>
                                                        <div className="text-sm opacity-50">Russia</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Rowe-Schoen
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                            </td>
                                            <td>Crimson</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Yancy Tear</div>
                                                        <div className="text-sm opacity-50">Brazil</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Wyman-Ledner
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                            </td>
                                            <td>Indigo</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>
                                        </tr>
                                    </tbody>
                                    {/* foot */}
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Job</th>
                                            <th>Favorite Color</th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>


                        </div>

                        {/* pagination and filter below */}
                        <div className="w-full h-12 mt-5 flex justify-end items-center">

                            <div className="w-[34rem] h-12 flex justify-between items-center">
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
                    </div>
                </div>

            </AdminDrawer>
        </>
    )
}

export default Users