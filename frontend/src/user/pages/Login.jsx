
const Login = () => {
    return (
        <div className="max-w-screen max-h-screen flex justify-center items-center mt-24">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body">
                    {/* <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album" /> */}

                    {/* left side  */}
                    <div className='w-96 h-96'>
                        <div className="w-full h-14 flex justify-center items-center">
                            <label className="text-3xl font-bold text-primary">Lakbay Cavite</label>
                        </div>

                        {/* login credentials */}
                        <div className="w-full h-52 mt-14 space-y-1">
                            {/* email */}
                            <div className="w-full h-12 mt-14">
                                <label className="input input-bordered flex items-center gap-2">
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
                                    <input type="text" className="grow" placeholder="Email" />
                                </label>
                            </div>
                            {/* password */}
                            <div className="w-full h-12">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input type="password" className="grow" placeholder="Password" />
                                </label>
                            </div>
                            {/* login button */}
                            <div className="w-full h-12 flex items-center justify-center">
                                <button className="btn-sm btn btn-block btn-outline btn-success text-white">Log in</button>
                            </div>
                            <div className="w-full h-12 flex items-start justify-center">
                                <a className="link link-hover text-sm">Forgot password?</a>
                            </div>


                        </div>


                        <div className="w-full h-16 flex justify-center items-center text-center">
                            <p className="text-sm"> Don't have an account? <a className="link link-hover text-primary font-bold">Sign up</a></p>
                        </div>
                    </div>

                </div>
                <div className="bg-green-400 card-body rounded-r-xl w-96">
                    {/* <h2 className="card-title">Welcome to Login!</h2> */}
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}
                    <div className="w-full h-full flex items-center justify-center">
                    <p className="text-center text-2xl text-white font-bold">Welcome to Login, SAMPLE USER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login