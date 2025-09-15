import React from 'react'
import LogoHeader from '../../assets/icons/AnanaHeader.svg'
import { ChevronDown, Search } from 'lucide-react'
import iconYou from '../../assets/images/DiscoverYOU.svg'
import Dropmenman from '../../assets/images/Dropmenu_nam.jpg'
import Dropmen_meal from '../../assets/images/Desktop_Dropdown_Women_1-2.jpg'
import OutletSales from '../../assets/images/Dropmenu-Promotion.jpg'
import DropmenuAccessory from '../../assets/images/Dropmenu-ThoitrangPhukien.jpg'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    // h-28 sửa thành h-auto sẽ tự động điều chỉnh chiều cao
    <div className='w-full h-auto flex flex-col md:flex-row items-center'>
      <div className='hidden md:flex justify-between w-full mt-3 px-2.5'>
        <Link to={"/"} className='mt-9 ml-[181px]'>
          <img src={LogoHeader} alt="" width={122} />
        </Link>
        <div className='flex items-center justify-between px-5 pt-5 mt-[-10px]'>
          <div className='flex divide-solid'>
            <div className='group flex items-center gap-1 px-5 relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-0.5 before:h-full before:bg-[#ccc]'>
              <a href="" className='font-[Bebas_Neue ,sans-serif] font-bold'>SẢN PHẨM</a>
              <div className='opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-[55px] left-[100px] before:content-[""] before:absolute before:right-[12px] before:top-[-30px] before:border-[20px_15px] before:border-solid before:border-transparent before:border-b-gray-700'></div>
              <ChevronDown />
              <div className=' md:fixed md:bg-gray-700 md:w-full md:h-[465px] fixed bg-gray-700 w-full h-[465px] top-[150px] left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                <div className='grid grid-cols-4 gap-12 p-4 px-80 pt-7'>
                  <div>
                    <img src={Dropmenman} alt="" />
                    <div className='text-white  text-center font-bold text-lg mt-4'>CHO NAM</div>
                  </div>
                  <div>
                    <img src={Dropmen_meal} alt="" /> 
                    <div className='text-white text-center font-bold text-lg mt-4'>CHO NỮ</div>
                  </div>
                  <div>
                    <img src={OutletSales} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>OUTLET SALE</div>
                  </div>
                  <div>
                    <img src={DropmenuAccessory} alt="" />
                    <div className='text-white text-center font-bold text-lg mt-4'>THỜI TRANG VÀ PHỤ KIỆN</div>
                  </div>
                </div>
                <div className='text-center pt-5'>
                  <p className='text-[#ccc]'>MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span className='text-white font-bold'>DỨA</span> !</p>
                </div>
              </div>
            </div>
            <div className='group flex items-center gap-1 px-5 relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-0.5 before:h-full before:bg-[#ccc]'>
              <a href="" className='font-[Bebas_Neue ,sans-serif] font-bold'>NAM</a>
              <div className='opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-[55px] left-[100px] before:content-[""] before:absolute before:right-[39px] before:top-[-30px] before:border-[20px_15px] before:border-solid before:border-transparent before:border-b-gray-700'></div>
              <ChevronDown />
              {/* nam */}
              <div className='fixed bg-gray-700 w-full h-[465px] top-[150px] left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                <div className='fixed bg-gray-700 w-full h-[550px] top-[150px] left-0 right-0 z-50 '>
                  <div className='flex justify-evenly pt-8 px-56'>
                    <div className='px-9 space-y-2 text-sm text-white'>
                      <h1 className='font-bold text-base'>NỔI BẬT</h1>
                      <ul className='space-y-1 text-[#ccc] mt-7'>
                        <li>Best Seller</li>
                        <li>New Arrival</li>
                        <li>Sale off</li>
                      </ul>
                      <ul className='text-[#ccc] mt-9 space-y-1'>
                        <li className='font-bold'>bộ sản phẩm</li>
                        <li>Recycled Material</li>
                        <li>Day Slide</li>
                        <li>Denim</li>
                        <li>Track 6 OG</li>
                        <li>Patta Polka Dots</li>
                      </ul>
                      <ul className='mt-7'>
                        <li className='text-white font-semibold'>Collaboration</li>
                      </ul>
                    </div>
                    <div className='px-9 space-y-2 text-sm text-white'>
                      <h1 className='font-bold text-base'>GIÀY</h1>
                      <ul className='space-y-1 text-[#ccc] mt-9'>
                        <li className='font-bold'>Dòng sản phẩm</li>
                        <li>Basas</li>
                        <li>Vintas</li>
                        <li>Urbas</li>
                        <li>Pattas</li>
                        <li>Creas</li>
                        <li>Track 6</li>
                      </ul>
                      <ul className='text-[#ccc] mt-7 space-y-1'>
                        <li className='font-bold'>Style</li>
                        <li>Hight Top</li>
                        <li>Low Top</li>
                        <li>Slip On</li>
                      </ul>
                      <ul className='mt-7'>
                        <li className='font-bold'>Tất cả giày</li>
                      </ul>
                    </div>
                    <div className='px-9 space-y-2 text-sm text-white'>
                      <h1 className='font-bold text-base'>THỜI TRANG VÀ PHỤ KIỆN</h1>
                      <ul className='space-y-1 text-[#ccc] mt-9'>
                        <li className='font-bold'>Nửa trên</li>
                        <li>Basic Tee</li>
                        <li>Graphic tee</li>
                        <li>Sweatshirt</li>
                        <li>Hoodie</li>
                      </ul>
                      <ul className='text-[#ccc] mt-7 space-y-1'>
                        <li className='font-bold'>Phụ kiện</li>
                        <li>Nón</li>
                        <li>Dây Giày</li>
                        <li>Vở</li>
                        <li>Túi Tote</li>
                      </ul>
                      <ul className='mt-7'>
                        <li className='font-bold'>Xem Tất Cả</li>
                      </ul>
                    </div>
                  </div>
                  <div className='text-center pt-16'>
                    <p className='text-[#ccc]'>MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span className='text-white font-bold'>DỨA</span> !</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='group flex items-center gap-1 px-5 relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-0.5 before:h-full before:bg-[#ccc]'>
              <a href="" className='font-[Bebas_Neue ,sans-serif] font-bold'>NỮ</a>
              <div className='opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-[55px] left-[100px] before:content-[""] before:absolute before:right-[50px] before:top-[-30px] before:border-[20px_15px] before:border-solid before:border-transparent before:border-b-gray-700'></div>
              <ChevronDown />
              {/* nữ */}
              <div className='fixed bg-gray-700 w-full h-[465px] top-[150px] left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                <div className='fixed bg-gray-700 w-full h-[550px] top-[150px] left-0 right-0 z-50 '>
                  <div className='flex justify-evenly pt-8 px-56'>
                    <div className='px-9 space-y-2 text-sm text-white'>
                      <h1 className='font-bold text-base'>NỔI BẬT</h1>
                      <ul className='space-y-1 text-[#ccc] mt-7'>
                        <li>Best Seller</li>
                        <li>New Arrival</li>
                        <li>Sale off</li>
                      </ul>
                      <ul className='text-[#ccc] mt-9 space-y-1'>
                        <li className='font-bold'>bộ sản phẩm</li>
                        <li>Recycled Material</li>
                        <li>Day Slide</li>
                        <li>Denim</li>
                        <li>Track 6 OG</li>
                        <li>Patta Polka Dots</li>
                      </ul>
                      <ul className='mt-7'>
                        <li className='text-white font-semibold'>Collaboration</li>
                      </ul>
                    </div>
                    <div className='px-9 space-y-2 text-sm text-white'>
                      <h1 className='font-bold text-base'>GIÀY</h1>
                      <ul className='space-y-1 text-[#ccc] mt-9'>
                        <li className='font-bold'>Dòng sản phẩm</li>
                        <li>Basas</li>
                        <li>Vintas</li>
                        <li>Urbas</li>
                        <li>Pattas</li>
                        <li>Creas</li>
                        <li>Track 6</li>
                      </ul>
                      <ul className='text-[#ccc] mt-7 space-y-1'>
                        <li className='font-bold'>Style</li>
                        <li>Hight Top</li>
                        <li>Low Top</li>
                        <li>Slip On</li>
                      </ul>
                    </div>
                    <div className='px-9 space-y-2 text-sm text-white'>
                      <h1 className='font-bold text-base'>THỜI TRANG VÀ PHỤ KIỆN</h1>
                      <ul className='space-y-1 text-[#ccc] mt-9'>
                        <li className='font-bold'>Nửa trên</li>
                        <li>Basic Tee</li>
                        <li>Graphic tee</li>
                        <li>Sweatshirt</li>
                        <li>Hoodie</li>
                      </ul>
                      <ul className='text-[#ccc] mt-7 space-y-1'>
                        <li className='font-bold'>Phụ kiện</li>
                        <li>Nón</li>
                        <li>Dây Giày</li>
                        <li>Vở</li>
                        <li>Túi Tote</li>
                      </ul>
                      <ul className='mt-7'>
                        <li className='font-bold'>Xem Tất Cả</li>
                      </ul>
                    </div>
                  </div>
                  <div className='text-center pt-16'>
                    <p className='text-[#ccc]'>MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span className='text-white font-bold'>DỨA</span> !</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center px-5 relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-0.5 before:h-full before:bg-[#ccc]'>
              <a href="" className='font-[Bebas_Neue ,sans-serif] font-bold'>SALE OFF</a>
            </div>
          </div>
          <div className='ml-8'>
            <img src={iconYou} alt="" className='mt-[-25px]' />
          </div>
        </div>
        {/* <div className='mt-[22px] mr-[53px] mb-[40px] ml-[22px] relative'> */}
        <div className='mt-4 mx-4 md:mt-[22px] md:mr-[53px] md:mb-[40px] md:ml-[22px] relative'>
          <input type="text" placeholder='Tìm Kiếm ' className='pt-[6px] pb-[6px] pl-[34px] pr-[12px] border border-gray-400 outline-none focus:border-[rgba(102,175,233,0.6)]' />
          <Search className='absolute top-2 left-2 w-5 h-6' />
        </div>
      </div>
    </div>
  )
}

export default Navigation