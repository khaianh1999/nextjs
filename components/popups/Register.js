import userServices from '@/services/axios';
import { useEffect, useState } from 'react';

function Register(props) {
    
    const [FullName, setFullName] = useState('');
    const [UserName, setUserName] = useState('');
    const [PassWord, setPassWord] = useState('');
    const [RePassWord, setRePassWord] = useState('');

    function showPopupLogin() {
        props.showPopupLogin();
    }
    function hiddenPopups() {
        props.hiddenPopups();
    }

    async function registerAccount(e) {
        e.preventDefault();
        const params = {
            "id": 3,
            "user_name": UserName,
            "full_name": FullName,
            "pass_word": PassWord
        }
        const res = await userServices.createAccount(params);
        // if(res?.data?.length){
        //     const userInfor = res.data.find(item => item.user_name == UserName && item.pass_word == PassWord)
        //     if(userInfor){
        //         alert('Đăng nhập thành công!');
        //     }else{
        //         alert('Đăng nhập thất bại!');
        //     } 
        // }
        console.log('res',res);
    }

    return (
        <>
        {props.showPopupRegister && (
            <div className="fixed inset-0 z-50 flex justify-center items-center">
                <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={(e) => hiddenPopups()}></div>
                <div className="bg-white rounded-lg p-6 relative z-50">
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <img src="https://i.pinimg.com/564x/bf/88/34/bf88345e23b8b4660fcebbd442436f71.jpg"/>
                        </div>
                        <form className="w-1/2">   
                            <h2 className="text-xl font-bold mb-4">Đăng ký</h2>
                            <div className="mb-1">
                                <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Tên đăng nhập</label>
                                <input onChange={(e) => setUserName(e.target.value)} value={UserName} type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Bonnie Green"/>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Tên Người dùng</label>
                                <input onChange={(e) => setFullName(e.target.value)} value={FullName} type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Bonnie Green"/>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Mật khẩu</label>
                                <input onChange={(e) => setPassWord(e.target.value)} value={PassWord} type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Bonnie Green"/>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Nhập lại mật khẩu</label>
                                <input onChange={(e) => setRePassWord(e.target.value)} value={RePassWord} type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Bonnie Green"/>
                            </div>
                            <div className="flex gap-3 mt-4">
                                <button className="rounded-lg bg-main-2 text-white py-2 px-6 cursor-pointer text-lg" onClick={(e) => registerAccount(e)}>Đăng ký</button>
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