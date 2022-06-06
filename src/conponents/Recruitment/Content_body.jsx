import React, { useRef } from 'react'
import img1 from "../../assets/images/tuyendung.png"
import Model from './Model'
const Content_body = () => {
  const btn = useRef();
  const handleFrom = ()=>{
     btn.current.classList.toggle('active')
  }
  return (
    <>
   <div className="container Content_body" ref={btn}> 
      
     <div className="detail-left">
        leftNhững kỹ năng, dự án làm việc hoặc thành tích nào khiến bạn trở thành một ứng cử viên nặng
        Những kỹ năng, dự án làm việc hoặc thành tích nào khiến bạn trở thành một ứng cử viên nặng
        Những kỹ năng, dự án làm việc hoặc thành tích nào khiến bạn trở thành một ứng cử viên nặng
     </div>
     <div className="detail-right">
        <div>
          <button onClick={handleFrom} className='detail-right__btn '>Nộp đơn ứng tuyển</button>
          <div className="detail-right__image">
            <img src={img1} />
          </div>

        </div>
     </div>
     <Model handleFrom = {handleFrom}/>
   </div>

  

   </>

  )}

export default Content_body