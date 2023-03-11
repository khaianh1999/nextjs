import userServices from '@/services/axios';
import { useEffect, useState } from 'react';
import jwt from "jsonwebtoken";
const secretKey = "mysecretkey";
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';

function Login(props) {
    const [UserName, setUserName] = useState('');
    const [PassWord, setPassWord] = useState('');

    function showPopupRegister() {
        props.showPopupRegister();
    }
    function hiddenPopups() {
        props.hiddenPopups();
    }
    const verifyToken = (token) => {
        try {
            const decoded = jwt.verify(token, secretKey);
            return decoded;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    async function checkUser(e) {
        e.preventDefault();
        const res = await userServices.getListUser();
        if(res?.data?.length){
            const userInfor = res.data.find(item => item.user_name == UserName && item.pass_word == PassWord)
            if(userInfor){
                const payload = {
                    "id": userInfor?.id,
                    "user_name": userInfor?.user_name,
                    "full_name": userInfor?.full_name,
                }
                const options = {
                    expiresIn: "1h",
                };
                console.log('payload',payload);
                const token = jwt.sign(payload, secretKey, options);
                setCookie('token', token);
                console.log('tokenxxx',token);
                alert('Đăng nhập thành công!');
             
               if(1){
                const abc = getCookie('token');
                console.log('abcxx',abc);
                const xxx = verifyToken(abc);
                console.log('xxxxx',xxx);
               }
            }else{
                alert('Đăng nhập thất bại!');
            } 
        }
        console.log('res',res);
    }
    
    return (
        <>
        {props.showPopupLogin && (
            <div className="fixed inset-0 z-50 flex justify-center items-center">
                <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={(e) => hiddenPopups()}></div>
                <div className="bg-white rounded-lg p-6 relative z-50">
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <img src="https://i.pinimg.com/564x/bf/88/34/bf88345e23b8b4660fcebbd442436f71.jpg"/>
                        </div>
                        <form className="w-1/2">   
                            <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
                            <div className="mb-6">
                                <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Tên đăng nhập</label>
                                <input type="text" onChange={(e) => setUserName(e.target.value)} value={UserName} id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Bonnie Green"/>
                                <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>
                            </div>
                            <div>
                                <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Mật khẩu</label>
                                <input type="text" id="username-error" onChange={(e) => setPassWord(e.target.value)} value={PassWord} className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Bonnie Green"/>
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Username already taken!</p>
                            </div>
                            <div className="flex gap-3 mt-4">
                                <button className="rounded-lg bg-green-700 text-white py-2 px-6 cursor-pointer text-lg" onClick={(e) =>{ checkUser(e) }}>Đăng nhập</button>
                                <button className="rounded-lg bg-main-2 text-white py-2 px-6 cursor-pointer text-lg" onClick={() => showPopupRegister()}>Đăng ký</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        )}
        </>
    )
}
export default Login