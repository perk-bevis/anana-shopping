import { ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion";
const Responsivenavbar = ({ open }) => {
    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    // className='absolute top-20 left-0 w-full h-screen z-20 md:hidden'
                    className="fixed inset-0 top-20 z-50 bg-white overflow-y-auto md:hidden"
                >
                    <div className='text-xl font-semibold  bg-gray-700 text-white'>
                        <ul className='h-[calc(100vh - 20vw)]'>
                            <li className='p-7 flex justify-between relative before:absolute before:bottom-0 before:left-0 before:border-dashed before:border-1 before:w-full'>SẢN PHẨM
                                <ChevronRight />
                            </li>
                            <li className='p-7 flex justify-between relative before:absolute before:bottom-0 before:left-0 before:border-dashed before:border-1 before:w-full'>NAM
                                <ChevronRight />
                            </li>
                            <li className='p-7 flex justify-between relative before:absolute before:bottom-0 before:left-0 before:border-dashed before:border-1 before:w-full'>NỮ
                                <ChevronRight />
                            </li>
                            <li className='p-7 relative before:absolute before:bottom-0 before:left-0 before:border-dashed before:border-1 before:w-full'>SaleOf</li>
                            <li className='p-7 relative before:absolute before:left-0 before:bottom-0 before:border-1 before:w-full'>DiscoverYOU</li>
                            <li className='p-7'>Đăng nhập</li>
                            <li className='p-7'>Yêu thích</li>
                            <li className='p-7'>Tìm cửa hàng</li>
                            <li className='p-7 relative before:absolute before:left-0 before:bottom-0 before:border-1 before:w-full'>Tra cứu cửa hàng</li>
                            <li className='p-7 text-center italic text-[#808080]'>MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span className='text-white'>DỨA</span> !</li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Responsivenavbar