import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    const [nama, setNama] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const resetValue = () => {
        setNama('');
        setJenisKelamin('');
        setEmail('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
    const handleSave = (e) => {
        e.preventDefault();
        const objData = {
            nama,
            jenisKelamin,
            email,
            phone,
            password,
            confirmPassword,
        }
        console.log(JSON.stringify(objData));
        resetValue();
    }
    return (
        <div>  <div className="login" id="login">
            <div className='container mx-auto  max-w-screen-3xl'>
                <div class="flex">
                    <div className="flex-1 p-9">
                        <img src="fotoo.png" className="foto-login" />
                    </div>
                    <div class="flex-1 p-9 relative">
                        <div class="box-border h-[100%] w-5/6 p-16 bg-white absolute right-0 rounded-[20px] shadow-[-4px_4px_15px_rgba(0,0,0,0.09)]">
                            <h2 className="bg-inherit text-[25px] leading-[38px] font-bold text-[#075B61] text-center mb-24">LOGIN</h2>
                            <form onSubmit={handleSave} className='bg-inherit'>
                                <div className="bg-inherit mb-8">
                                    <div className="bg-inherit not-italic font-bold text-[#075B61] ">
                                        <label htmlFor="nama" className="bg-inherit text-base">Nomor Telepon/Email</label>
                                    </div>
                                    <div className="bg-inherit">
                                        <input
                                            name="nama"
                                            value={nama}
                                            onChange={(e) => setNama(e.target.value)}
                                            type='text'
                                            className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61]-500 w-full h-[49px] px-4 text-black" />
                                    </div>
                                </div>
                                <div className="bg-inherit mb-8">
                                    <div className="bg-inherit not-italic font-bold text-[#075B61] ">
                                        <label htmlFor="nama" className="bg-inherit text-base">Kata Sandi</label>
                                    </div>
                                    <div className="bg-inherit">
                                        <input
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type='text'
                                            className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61]-500 w-full h-[49px] px-4 text-[#075B61]" />
                                    </div>
                                    <div className="bg-inherit not-italic font-light text-[#075B61] mt-4">
                                        <Link to='#' className="bg-inherit text-[13px]">Lupa Kata Sandi?</Link>
                                    </div>
                                </div>
                                <div className="bg-inherit">
                                    <button type="submit" className="bg-[#075B61] w-full h-[54px] rounded-[10px] text-white mt-8">
                                        Masuk
                                    </button>
                                </div>
                            </form>
                            <div className='bg-inherit relative border-solid border-[1px] border-[rgba(7,91,97,0.2)] mt-11 w-full h-0'>
                                <p className='absolute bg-white -top-3 ml-48 font-medium text-sm text-[#075B61] '>Atau masuk dengan</p>
                            </div>
                            <div className='bg-inherit flex justify-center'>
                                <div className='flex bg-inherit rounded-lg border-solid border-[1px] border-[#075B61]-400  w-[321px] h-[61px] mt-8 p-4'>
                                    <p className='bg-inherit text-justify font-medium'>Masuk dengan Google </p><img src='google.svg' className='bg-inherit ml-16 -mt-[5px]'/>
                                </div>
                            </div>
                            <div className='bg-inherit flex justify-center'>
                                <div className='flex bg-inherit rounded-lg border-solid border-[1px] border-[#075B61]-400 w-[321px] h-[61px] mt-8 p-4'>
                                    <p className='flex bg-inherit text-justify font-medium'>Masuk dengan Facebook<img src='Facebook.svg' className='bg-inherit ml-11 -mt-[5px]'/></p>
                                </div>
                            </div>
                           
                            <p className="bg-inherit mt-[84px] text-center text-[#075B61] text-[13px]">Belum punya akun? Klik <Link to="/" className="bg-inherit font-bold">Disini!</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div></div>
    )
}
