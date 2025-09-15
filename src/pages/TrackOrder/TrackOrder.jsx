import React from 'react'

const TrackOrder = () => {
  return (
     <div className='w-full h-auto'>
      <div className='w-4xl items-center'>
        <h1 className='font-bold'>TRA CỨU ĐƠN HÀNG</h1>
        <div>
          <input type="text" placeholder='Mã đơn hàng'/>
        </div>
        <div>
           <input type="text" placeholder='Email / Số điện thoại'/>
        </div>
        <div>
          <button>TRA CỨU ĐƠN HÀNG</button>
        </div>
      </div>
    </div>
  )
}

export default TrackOrder