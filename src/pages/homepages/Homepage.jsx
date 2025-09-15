import React from 'react';
import DaySlider from '../../assets/images/Dayslice.jpg'
import Black from '../../assets/images/AllinBlack.jpg'
import SaleOf from '../../assets/images/outletsales.jpg'
import ShoesMan from '../../assets/images/ShoesMan.jpg'
import ShoesWomen from '../../assets/images/ShoesFemale.jpg'
import ProductList from '../../assets/images/Products.jpg'
import ManFemale from '../../assets/images/PromoBanner.jpg'
const Homepage = () => {
  return (
    <div className='w-full '>
      <section className="md:mb-12 ">
        <div className='relative'>
          <img
            src={DaySlider}
            alt="Ananas Promotion Banner"
            className="w-full mt-4"
          />
          <div className='absolute top-[-25px] md:top-0 left-0 w-full h-[51px] bg-[#f1f1f1]'>
            <p className='text-center pt-3'>BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</p>
          </div>
        </div>
      </section>
      <section className=" md:py-16">
        {/*  */}
        <div className="max-w-[1200px] mx-auto flex  justify-between gap-6">
          <article className="flex flex-col flex-[1_1_48%] max-w-[48%]  p-4 sm:max-w-full">
            <img
              src={Black}
              alt="Black and Black style"
              className="w-full"
            />
            <div className="pt-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                BLACK & BLACK
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán.
              </p>
            </div>
          </article>
          <article className="flex flex-col w-[48%] p-4">
            <img
              src={SaleOf}
              alt="Black and Black style"
              className="w-full"
            />
            <div className="pt-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                BLACK & BLACK
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="py-16 hidden md:block">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            DANH MỤC MUA HÀNG
          </h2>
          <div className="flex  gap-2.5">
            <article className="relative w-[398px] h-[270px] text-white overflow-hidden">
              <img
                src={ShoesMan}
                alt="Giày Nam"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
                <h3 className="text-xl font-bold mb-2">GIÀY NAM</h3>
                <ul className="space-y-1 text-base">
                  <li><a href="#!" className="hover:underline">New Arrivals</a></li>
                  <li><a href="#!" className="hover:underline">Best Seller</a></li>
                  <li><a href="#!" className="hover:underline">Sale-off</a></li>
                </ul>
              </div>
            </article>
            <article className="relative w-[398px] h-[270px] text-white overflow-hidden">
              <img
                src={ShoesWomen}
                alt="Giày Nữ"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
                <h3 className="text-xl font-bold mb-2">GIÀY NỮ</h3>
                <ul className="space-y-1 text-base">
                  <li><a href="#!" className="hover:underline">New Arrivals</a></li>
                  <li><a href="#!" className="hover:underline">Best Seller</a></li>
                  <li><a href="#!" className="hover:underline">Sale-off</a></li>
                </ul>
              </div>
            </article>
            <article className="relative w-[398px] h-[270px] text-white overflow-hidden">
              <img
                src={ProductList}
                alt="Dòng Sản Phẩm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
                <h3 className="text-xl font-bold mb-2">DÒNG SẢN PHẨM</h3>
                <ul className="space-y-1 text-base">
                  <li><a href="#!" className="hover:underline">Basas</a></li>
                  <li><a href="#!" className="hover:underline">Vintas</a></li>
                  <li><a href="#!" className="hover:underline">Urbas</a></li>
                  <li><a href="#!" className="hover:underline">Pattas</a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section>
        <img
          src={ManFemale}
          alt="Promotional Banner"
          className="w-full"
        />
      </section>
    </div>
  );
};

export default Homepage;