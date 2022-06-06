import React from 'react'
import Helmet from '../conponents/Helmet'
import Service from '../conponents/Home/Service'
import img from '../assets/images/banner-da-dang-dich-vu-scaled.jpg'
const Category_Service = () => {
  return (
    <>
     <Helmet title=' dịch vụ '>
     <section >
          <div className='banner__image'>
            <img  src={img} alt="banner" />
          </div>
        </section>

      {/* begin DỊCH VỤ NỔI BẬT */}
      <div className="container">
        <section className='Service'>
          <Service />

        </section>
      </div>
      {/* end DỊCH VỤ NỔI BẬT */}
     </Helmet>
    </>
  )
}

export default Category_Service