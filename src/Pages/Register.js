import "@fontsource/poppins";
import React, { useState } from "react";
import "./tes.css";
import { Link } from "react-router-dom";


const Register = () => {
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
    <div className="register" id="register">
      <div className='container mx-auto  max-w-screen-3xl'>
        <div class="flex">
          <div className="flex-1 p-9">
            <img src="fotoo.png" className="foto-register" />
          </div>
          <div class="flex-1 p-9 relative">
            <div class="box-border h-[100%] w-5/6 p-16 bg-white absolute right-0 rounded-[20px] shadow-[-4px_4px_15px_rgba(0,0,0,0.09)]">
              <h2 className="bg-inherit text-[25px] leading-[38px] font-bold text-[#075B61] text-center mb-4">REGISTER</h2>
              <form onSubmit={handleSave} className='bg-inherit'>
                <div className="bg-inherit gap-4 mb-8">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Nama Lengkap</label>
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
                <div className="bg-inherit gap-4 mb-8">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Jenis Kelamin</label>
                  </div>
                  <div className="bg-inherit">
                    <select
                      name="jenis_kelamin"
                      value={jenisKelamin}
                      onChange={(e) => setJenisKelamin(e.target.value)}
                      type='select'
                      className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61]-500 w-full h-[49px] px-4 text-[#075B61] "
                    >
                      <option value='perempuan'>Perempuan</option>
                      <option value='laki-laki'>Laki-Laki</option>
                    </select>
                  </div>
                </div>
                <div className="bg-inherit gap-4 mb-8">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Email</label>
                  </div>
                  <div className="bg-inherit">
                    <input
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type='text'
                      className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61]-500 w-full h-[49px] px-4 text-[#075B61]" />
                  </div>
                </div>
                <div className="bg-inherit gap-4 mb-8">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Nomor Telepon</label>
                  </div>
                  <div className="bg-inherit">
                    <input
                      name="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type='number'
                      className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61]-500 w-full h-[49px] px-4 text-[#075B61]" />
                  </div>
                </div>
                <div className="bg-inherit gap-4 mb-8">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Kata Sandi</label>
                  </div>
                  <div className="bg-inherit">
                    <input
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type='text'
                      className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61]-500 w-full h-[49px] px-4 text-[#075B61]" />
                  </div>
                </div>
                <div className="bg-inherit gap-4 mb-12">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Konfirmasi Kata Sandi</label>
                  </div>
                  <div className="bg-inherit">
                    <input
                      name="confirm_password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type='text'
                      className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61]-500 w-full h-[49px] px-4 text-[#075B61]" />
                  </div>
                </div>
              
              <div className="bg-inherit grid justify-items-end">
                <button
                  type="submit"
                  className="bg-[#075B61] w-[156px] h-[54px] rounded-[10px] text-white"
                  
                >
                  Daftar
                </button>
              </div>
              </form>
              <p className="bg-inherit mt-8 text-center text-[#075B61] text-[13px]">Sudah punya akun? Klik <Link to="/Login" className="bg-inherit font-bold">Disini!</Link></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

};
export default Register;
