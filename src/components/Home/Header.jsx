import logo from '../../assets/images/Logo-2.png'
import {Link, useLocation} from "react-router-dom";
import { useEffect ,useRef} from 'react';
import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light.css';



const mainNav = [
  {
    display:"Trang Chủ",
    path:"/"
  },
  {
    display: "Về chúng tôi",
    path:"/Introduce",
    children:[
      {
        display:"Tổng quan về Seoulspa.vn",
        path: "/gioi-thieu/"
      },
      {
        display:"Cơ sở vật chất",
        path: "/gioi-thieu/"
      },
      {
        display:"Trang thiết bị",
        path: "/gioi-thieu/"
      },
      {
        display:"Đội ngũ chuyên gia",
        path: "/gioi-thieu/"
      },

    ]

    
  },
  {
    display: "Dịch vụ",
    path:"/Service"
  },
  {
    display: "Kết quả điều trị",
    path:"/Treatment_results"
  },
  {
    display: "Đào tạo spa",
    path:"/k"
  },
  {
    display: "Tip làm đẹp",
    path:"/tip"
  },
  {
    display: "Tuyển Dụng",
    path:"/tuyen-dung"
  },
 
]
const Header = () => {

  const {pathname} = useLocation()
  const activeNav = mainNav.findIndex(e => e.path === pathname)

  const headerRef = useRef(null)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('shrink')
      }else{
        headerRef.current.classList.remove('shrink')
      }
    })
    return () => {
        window.removeEventListener("scroll",null)
    };
  }, []);

  const menuLeft = useRef(null)
  const handleMenu = ()=>menuLeft.current.classList.toggle('active')
  
  

  return (
    <div className="header" ref={headerRef}>
      <div className="header__top hide-for-mobile ">
        <div className="contact">
          <div className='time'>
            08:30 - 19:30, THứ 2 - CN (kể cả ngày lễ, Tết)
          </div>
          <div className='phone'>
            Hotline: 19006947
          </div>
        </div>
        {/* <div className="shopping">
          <span>0d</span>
          <ion-icon name="card-outline"></ion-icon>
        </div> */}
            
          </div>
        <div className="container">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="header__menu">
              <div className="header__menu__mb--toggle hide-for-desktop" onClick={handleMenu}>
                <ion-icon name="grid-outline"></ion-icon>
              </div>
                {/* header menu left begin */}
               <div className="header__menu__left " ref={menuLeft} >
                <div className="header__menu__left--close hide-for-desktop" onClick={handleMenu}>
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
                  {
                    mainNav.map((item, index)=>(
                        <div
                              key={index} 
                              className={`header__menu__left--item ${index === activeNav ? 'active' : ''}` }
                              onClick = {handleMenu}
                        >
                          <div className="area">
                          <Tippy 
                          
                          >

                            <Link to={item.path} >
                              <span>{item.display}</span>
                            </Link>
                          </Tippy>
                          </div>
                        </div>
                    ))
                  }
               </div>
                {/* header right begin */}
                <div className="header__menu__right">
                    <div className="header__menu__right--item">
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    
               </div>
               {/* kết thúc header right */}
            </div>
        </div>
    </div>
  )
}

export default Header