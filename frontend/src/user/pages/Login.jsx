import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate()

    // credential states
    const [userInput, setUserInput] = useState('')
    const [password, setPassword] = useState('')

    // validators
    const [errorMessageUser, setErrorMessageUser] = useState('')
    const [errorMessagePass, setErrorMessagePass] = useState('')

    const validateInputUser = (value) => {
        if (!value) {
            setErrorMessageUser('Input invalid.');
            return false;
        } else if (value.length == 40) {
            setErrorMessageUser('Input invalid.');
            return false;
        } else {
            setErrorMessageUser('');
            return true;
        }
    };
    const validateInputPass = (value) => {
        if (!value) {
            setErrorMessagePass('Input invalid.');
            return false;
        } else if (value.length == 20) {
            setErrorMessagePass('Input invalid.');
            return false;
        } else {
            setErrorMessagePass('');
            return true;
        }
    };

    const [IsOpenEye, setIsOpenEye] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleToggle = () => {
        setIsOpenEye(!IsOpenEye)
    }

    const loginToggle = () => {
        setIsError(!isError)

    }

    const handleUserChange = (e) => {
        const value = e.target.value;
        if (value.length <= 40) {
            setUserInput(value);
            validateInputUser(value);
        }
    };

    const handlePassChange = (e) => {
        const value = e.target.value;
        if (value.length <= 20) {
            setPassword(value)
            validateInputPass(value);
        }
    };


    return (
        <div className="max-w-screen max-h-screen flex justify-center items-center mt-24">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body">
                    {/* <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album" /> */}

                    {/* left side  */}
                    <div className='w-96 h-96'>
                        <div className="w-full h-6 flex justify-center items-center">
                            <label className="text-3xl font-bold text-primary">Lakbay Cavite</label>
                        </div>

                        {/* error message container */}
                        <div className={`w-full h-14 mt-2 mb-4 transition duration-150 ${isError ? 'opacity-100' : 'opacity-0'}`}>
                            {isError && (
                                <div role="alert" className="alert alert-error">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 stroke-current"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h3 className="font-bold text-xs">Login Failed!</h3>
                                        <div className="text-xs">Please provide a valid Email and Password</div>
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* login credentials */}
                        <div className="w-full h-48 space-y-2">
                            {/* email */}
                            <div className="w-full h-12">
                                <label className={`input input-bordered flex hover:shadow items-center gap-2 ${errorMessageUser && 'input-error'}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="text" className="grow input" value={userInput} placeholder="Email" onChange={handleUserChange} />
                                    {errorMessageUser && <p className='text-error text-sm'>{errorMessageUser}</p>}

                                </label>
                            </div>
                            {/* password */}
                            <div className="w-full h-12">
                                <label className={`input input-bordered flex hover:shadow items-center gap-2 ${errorMessagePass && 'input-error'}`}>
                                    {
                                        (IsOpenEye === false) ? <FaRegEye className='cursor-pointer' onClick={handleToggle} /> : <FaRegEyeSlash className='cursor-pointer' onClick={handleToggle} />
                                    }
                                    <input type={IsOpenEye ? 'password' : 'text'} className='grow input' value={password} placeholder="Password" onChange={handlePassChange} />
                                    {errorMessagePass && <p className='text-error text-sm'>{errorMessagePass}</p>}
                                </label>

                            </div>
                            {/* login button */}
                            <div className="w-full h-12 flex items-center justify-center">
                                <button className={`btn-sm btn btn-block btn-outline btn-success text-white ${(!userInput || !password || errorMessagePass || errorMessageUser) ? 'btn-disabled' : ''}`} onClick={loginToggle} >Login</button>
                            </div>
                            {/* Forgot Password */}
                            <div className="w-full h-12 flex items-start justify-center">
                                <a className="link link-hover text-sm">Forgot password?</a>
                            </div>


                        </div>

                        <div className="w-full h-8 flex justify-center items-center">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="px-3 text-gray-500 text-sm">or</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>

                        <div className="w-full h-16 flex justify-center items-center text-center">
                            <button className="btn flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200">
                                <svg className="h-6 w-6 mr-2" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                <span>Continue with Google</span>
                            </button>
                        </div>
                    </div>

                </div>
                {/* right side of the card */}
                <div className="bg-secondary card-body rounded-r-xl w-96">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <div className="w-full h-[8rem] space-y-1">
                            <div className="w-full h-1/3 flex items-end">
                                <p className="text-center text-2xl text-white font-bold">Welcome to Login</p>
                            </div>
                            <div className="w-full h-1/3  flex items-center justify-center ">
                                <p className="text-sm text-center text-white"> Don't have an account? Sign up now!</p>

                            </div>
                            <div className="w-full h-1/3 flex justify-center items-start">
                                <button onClick={() => navigate('/register')} className={`btn w-48 btn-outline border-white rounded-full text-white`}>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login