import IMAGES from "../../images/images"

const Register = () => {
    return (
        <div className="max-w-screen max-h-screen flex justify-center items-center">
            {/* left */}
            <div className="w-1/3 h-screen">
                <img className="w-full h-screen object-cover" src={IMAGES.registerBG} />
            </div>
            {/* right */}
            <div className="w-full h-screen p-10">
                {/* contents */}
                <div className="w-full h-full flex flex-row">
                    <div className="w-2/3 h-full">
                        <div className="w-full h-1/4">
                            <div className="w-full h-1/3 flex justify-start items-center">
                                <a href='/home' className="btn btn-ghost text-2xl font-bold text-primary">Lakbay Cavite</a>
                            </div>
                            <div className="w-full h-1/3 flex justify-start items-end">
                                <h3 className="text-2xl">Account Creation</h3>
                            </div>
                            <div className="w-full h-1/3 flex justify-start items-center">
                                <h3 className="font-bold">Already have an account? <a href='/login' className='link link-hover font-bold text-primary'>Login!</a></h3>
                            </div>
                        </div>

                        {/* text inputs */}
                        <div className="w-full h-3/4">
                            <div className="w-full h-3/5 flex flex-row">
                                {/* left input container */}
                                <div className="w-1/2 h-2/3">
                                    {/* email */}
                                    <div className="w-full h-24">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text font-bold text-xs">Email Address</span>
                                                <span className="label-text-alt">This is required field.</span>
                                            </div>
                                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-sm" />
                                            <div className="label">
                                                <span className="label-text-alt">Email Address must not be empty.</span>
                                            </div>
                                        </label>
                                    </div>
                                    {/* username */}
                                    <div className="w-full h-24">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text font-bold text-xs">Username</span>
                                                <span className="label-text-alt">This is required field.</span>
                                            </div>
                                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-sm" />
                                            <div className="label">
                                                <span className="label-text-alt">No special characters and between 1-20 long.</span>
                                            </div>
                                        </label>
                                    </div>
                                    {/* password */}
                                    <div className="w-full h-24">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text font-bold text-xs">Password</span>
                                                <span className="label-text-alt">This is required field.</span>
                                            </div>
                                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-sm" />
                                            <div className="label">
                                                <span className="label-text-alt">Password must be at least 8 characters.</span>
                                            </div>
                                        </label>
                                    </div>

                                </div>

                                {/* right input container */}
                                <div className="w-1/2 h-2/3">
                                    {/* First Name */}
                                    <div className="w-full h-24">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text font-bold text-xs">First Name</span>
                                                <span className="label-text-alt">This is required field.</span>
                                            </div>
                                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-sm" />
                                            <div className="label">
                                                <span className="label-text-alt">No special characters and between 1-20 long.</span>
                                            </div>
                                        </label>
                                    </div>
                                    {/* Last Name */}
                                    <div className="w-full h-24">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text font-bold text-xs">Last Name</span>
                                                <span className="label-text-alt">This is required field.</span>
                                            </div>
                                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-sm" />
                                            <div className="label">
                                                <span className="label-text-alt">No special characters and between 1-20 long.</span>
                                            </div>
                                        </label>
                                    </div>
                                    {/* confirm password */}
                                    <div className="w-full h-24">
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text font-bold text-xs">Confirm Password</span>
                                                <span className="label-text-alt">This is required field.</span>
                                            </div>
                                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-sm" />
                                            <div className="label">
                                                <span className="label-text-alt">Password mismatch.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* button */}
                            <div className="w-full h-2/5">
                                <div className="w-full h-1/4 flex justify-center items-center">
                                    <button className="btn btn-success btn-sm w-32 text-white">Register</button>
                                </div>
                                <div className="divider text-sm">Or with google account</div>
                                <div className="w-full h-1/2 flex justify-center items-start">
                                    <button className="btn flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200">
                                        <svg className="h-6 w-6 mr-2" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                        <span>Continue with Google</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register