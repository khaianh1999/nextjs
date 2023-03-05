function Register(props) {
    function showPopupLogin() {
        props.showPopupLogin();
    }
    return (
        <>
        {props.showPopupRegister && (
            <div className="fixed inset-0 z-50 flex justify-center items-center">
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                <div className="bg-white rounded-lg p-6 relative z-50">
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <img src="https://i.pinimg.com/564x/bf/88/34/bf88345e23b8b4660fcebbd442436f71.jpg"/>
                        </div>
                        <form className="w-1/2">   
                            <h2 className="text-xl font-bold mb-4">Đăng ký</h2>
                            <div className="mb-6">
                                <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Tên đăng nhập</label>
                                <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Bonnie Green"/>
                                <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>
                            </div>
                            <div>
                                <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Mật khẩu</label>
                                <input type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Bonnie Green"/>
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Username already taken!</p>
                            </div>
                            <div className="flex gap-3 mt-4">
                                <button className="rounded-lg bg-main-2 text-white py-2 px-6 cursor-pointer text-lg">Đăng ký</button>
                                <button className="rounded-lg bg-green-700 text-white py-2 px-6 cursor-pointer text-lg" onClick={() => showPopupLogin()}>Đăng nhập</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            )}
        </>
    )
}
export default Register