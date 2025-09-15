import React from 'react';
import StoreImage from '../../assets/images/shopAnana.svg'; 
import BoCongThuongLogo from '../../assets/icons/MinistryofIndustryandTrade.png';
import AnanasLogo from '../../assets/icons/Logo_Ananas_Footer.svg';
import DmcaLogo from '../../assets/icons/dmca_protected_sml_120n.png';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Footerresponsive from './Footerresponsive';

const Footer = () => {
  return (
    <footer className="bg-[#505050] text-gray-50 px-0 md:px-[5%] py-2 md:py-14">
      <div className='hidden md:flex flex-col lg:flex-row gap-2 md:gap-[107px] '>
        <div className="flex-shrink-0 w-full h-auto lg:w-auto text-center lg:text-left">
          <img src={StoreImage} alt="Ananas Store" width={280} height={280} className="mx-auto lg:mx-0 mb-5" />
          <a href="#" className="inline-block w-full text-center bg-[#f15e2c] text-white py-3 px-6 font-bold text-sm rounded-sm transition-colors duration-300 hover:bg-[#d95322]">TÌM CỬA HÀNG</a>
        </div>
        <div className='flex-grow'>
          <div className="grid grid-cols-4 gap-5 mb-5">

            <div className="w-full lg:w-auto text-center lg:text-left">
              <h1 className=" mb-5 text-white uppercase font-bold text-lg mt-4">Sản phẩm</h1>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Giày Nam</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Giày Nữ</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Thời trang & Phụ kiện</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Sale-off</a></li>
              </ul>
            </div>

            <div className="w-full lg:w-auto text-center lg:text-left">
              <h1 className=" mb-5 text-white uppercase font-bold text-lg mt-4">Về công ty</h1>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Dứa tuyển dụng</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Liên hệ nhượng quyền</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Về Ananas</a></li>
              </ul>
            </div>

            <div className="w-full lg:w-auto text-center lg:text-left">
              <h1 className="mb-5 text-white uppercase font-bold text-lg mt-4">Hỗ trợ</h1>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">FAQs</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Bảo mật thông tin</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Chính sách chung</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Tra cứu đơn hàng</a></li>
              </ul>
            </div>

            <div className="w-full lg:w-auto text-center lg:text-left">
              <h1 className="mb-5 text-white uppercase font-bold text-lg mt-4">Liên hệ</h1>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Email góp ý</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">Hotline</a></li>
                <li><a href="#" className="text-sm hover:text-[#f15e2c] transition-colors">1900 0014</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-1 border-t border-gray-600 pt-2">
            <div className="text-center w-full lg:w-1/4 lg:text-left flex-none">
              <h4 className="text-sm mb-4 font-bold text-white uppercase ">Ananas Social</h4>
              <div className="flex justify-center lg:justify-start space-x-4">

                <a href="#" className="text-white hover:text-[#f15e2c] text-xl transition-colors"><FaFacebookF /></a>
                <a href="#" className="text-white hover:text-[#f15e2c] text-xl transition-colors"><FaInstagram /></a>
                <a href="#" className="text-white hover:text-[#f15e2c] text-xl transition-colors"><FaYoutube /></a>
              </div>
            </div>

            <div className="text-center flex-1">
              <h4 className="text-sm mb-2 font-bold text-white w-full md:w-[50%] uppercase">Đăng ký nhận mail</h4>
              <form className="flex items-center bg-white max-w-xs w-full md:w-[50%]">
                <input type="email" placeholder="" className="border-none p-2.5 w-full text-gray-900 text-sm focus:outline-none flex-grow" />
                <button type="submit" className="bg-gray-800 border-none text-white py-2.5 px-4 cursor-pointer text-base h-10">
                  <FiArrowRight />
                </button>
              </form>
            </div>

            <div className="text-center lg:text-right flex-1">
              <img src={AnanasLogo} alt="Ananas Logo" width={340} height={68} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-9 border-t border-gray-600 pt-5 mt-8">
            <div className="flex items-center space-x-4">
              <a href="#">
                <img src={BoCongThuongLogo} alt="Đã Thông Báo Bộ Công Thương" />
              </a>
              <a href="#">
                <img src={DmcaLogo} alt="DMCA Protected" className="h-[25px]" />
              </a>
            </div>
            <div className="copyright">
              <p className="m-0 text-xs text-gray-400">Copyright © 2025 Ananas. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
       <Footerresponsive/>
    </footer>
  );
}

export default Footer