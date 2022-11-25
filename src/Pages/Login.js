import "@fontsource/poppins";
import React from "react";
import "./tes.css";


const Login = () => {
  {
    return (
      <div className="login" id="login">
        <div className='container mx-auto  max-w-screen-3xl'>
          <div class="flex">
            <div className="flex-1 p-9">
              <img src="fotoo.png" className="foto-login" />
            </div>
            <div class="flex-1 p-9 relative">
              <div class="box-border h-[100%] w-5/6 p-16 bg-white absolute right-0 rounded-[20px] shadow-[-4px_4px_15px_rgba(0,0,0,0.09)]">
                <h2 className="bg-inherit text-[25px] leading-[38px] font-bold text-[#075B61] text-center mb-4">REGISTER</h2>
                <div className="bg-inherit gap-4 mb-8">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Nama Lengkap</label>
                  </div>
                  <div className="bg-inherit">
                    <input type='text' className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61] opacity-[30%] w-full h-[49px] px-4 text-black" />
                  </div>
                </div>
                <div className="bg-inherit gap-4 mb-8">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Jenis Kelamin</label>
                  </div>
                  <div className="bg-inherit">
                    <select type='select' className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61] opacity-[30%] w-full h-[49px] px-4 text-[#075B61] " >
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
                    <input type='text' className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61] opacity-[30%] w-full h-[49px] px-4 text-[#075B61]" />
                  </div>
                </div>
                <div className="bg-inherit gap-4 mb-8">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Nomor Telepon</label>
                  </div>
                  <div className="bg-inherit">
                    <input type='text' className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61] opacity-[30%] w-full h-[49px] px-4 text-[#075B61]" />
                  </div>
                </div>
                <div className="bg-inherit gap-4 mb-8">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Kata Sandi</label>
                  </div>
                  <div className="bg-inherit">
                    <input type='text' className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61] opacity-[30%] w-full h-[49px] px-4 text-[#075B61]" />
                  </div>
                </div>
                <div className="bg-inherit gap-4 mb-12">
                  <div className="bg-inherit not-italic font-medium text-[#075B61] text-base">
                    <label htmlFor="nama" className="bg-inherit ">Konfirmasi Kata Sandi</label>
                  </div>
                  <div className="bg-inherit">
                    <input type='text' className="bg-inherit rounded-lg border-solid border-[1px] border-[#075B61] opacity-[30%] w-full h-[49px] px-4 text-[#075B61]" />
                  </div>
                </div>
                <div className="bg-inherit grid justify-items-end">
                  <button className="bg-[#075B61] w-[156px] h-[54px] rounded-[10px] text-white">Daftar</button>
                </div>
                <p className="bg-inherit mt-8 text-center text-[#075B61]">Sudah punya akun? Klik <a href="#" className="bg-inherit font-bold">Disini!</a></p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Login;
