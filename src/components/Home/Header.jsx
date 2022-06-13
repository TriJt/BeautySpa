import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFillDiamondFill } from "react-icons/bs";
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import { IoIosCall, IoIosClose, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import navigator from "../../assets/fake_data/navigators";
import Search from "./Search";

export default function Header() {
  const headerRef = useRef(null);
  const [isNavShow, setIsNavShow] = useState(false);



  useEffect(() => {
    const stickyHeader = () => {
      ['scroll', 'resize'].forEach(item => {
        window.addEventListener(item, () => {
          let scrollY;
          if (window.innerWidth > 1023) // is desktop ?
            scrollY = window.scrollY <= 75 ? window.scrollY : 75;
          else scrollY = 0
          headerRef.current.style.transform = `translateY(${-1 * scrollY}px)`;
        })
      })
    }

    stickyHeader()
    return () => {
      ['scroll', 'resize'].forEach(item => {
        window.removeEventListener(item, null);
      })
    }
  })


  return (
    <header id="header" className="header" ref={headerRef}>

      <div className="header__wrapper">
        <div className="header__bar hide-for-mobile">
          <p>
            SEOUL SPA - THẨM MỸ VIỆN HÀNG ĐẦU VIỆT NAM VỚI 45 CHI NHÁNH TRÊN TOÀN
            QUỐC
          </p>
        </div>
        <div className="header__main">
          <div className="container">
            <Search />
            <div className="hamberger hide-for-desktop"
              onClick={() => setIsNavShow(true)}>
              <HiMenu />
            </div>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="buttons">
              <a className="hide-for-mobile" href="">
                <HiShoppingCart />
              </a>
              <a className="hide-for-mobile" href="tel:19006947">
                <IoIosCall />
                <span>Hotline: 1900 6947</span>
              </a>
              <a href="" className="hide-for-desktop">
                <BiSearch />
              </a>
            </div>
          </div>
        </div>
        <ul className="header__nav hide-for-mobile">

          {navigator.map((navItem, navIndex) => (
            <li key={navIndex} className="header__nav--item">
              {!navItem.children && !navItem.groups && <Link to={navItem.base}>{navItem.display}</Link>}

              {navItem.children && <>
                <Link to={navItem.base} className='disable-link'>{navItem.display}</Link>
                <ul className="hover__box">
                  {navItem.children.map((child, childIndex) => (
                    <li key={childIndex} className='hover__link'>
                      <BsFillDiamondFill />
                      <Link to={`${navItem.base}/${child.path}`}>{child.display}</Link>
                    </li>
                  ))}
                </ul>
              </>}

              {navItem.groups && <>
                <Link to={navItem.base} className='disable-link'>{navItem.display}</Link>
                <ul className="hover__box">
                  {navItem.groups.map((group, groupIndex) => (
                    <li key={groupIndex} className="hover__group">
                      <ul>
                        {group.map((member, memberIndex) => {
                          return memberIndex == 0
                            ? <li key={memberIndex} className='hover__link'>
                              <BsFillDiamondFill />
                              <Link to={`${navItem.base}/${member.path}`}>{member.display}</Link></li>
                            : <li key={memberIndex}><Link to={`${navItem.base}/${member.path}`}>{member.display}</Link></li>
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
              </>

              }

            </li>
          ))}
        </ul>
      </div>

      <nav id='nav' className={`nav hide-for-desktop ${isNavShow && 'isShow'}`}>
        <div className="nav__wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="nav__list">
            <li className="nav__list--search">
              <Search hideForMobile={false} />
            </li>
            <li className="nav__list--title">
              <h3>Danh mục</h3>
            </li>

            {navigator.map((navItem, navIndex) => (
              <li key={navIndex}
                onClick={e => e.target.classList.toggle('active')}>
                {!navItem.children && !navItem.groups && <Link to={navItem.base}>{navItem.display}</Link>}

                {navItem.children && <>
                  <Link to={navItem.base} className='disable-link'>
                    {navItem.display}
                    <IoIosArrowDown />
                  </Link>
                  <ul className='drop-down'>
                    {navItem.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link to={`${navItem.base}/${child.path}`}>
                          {child.display}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>}

                {navItem.groups && <>
                  <Link to={navItem.base} className='disable-link'>
                    {navItem.display}
                    <IoIosArrowDown />
                  </Link>
                  <ul className='drop-down'>
                    {navItem.groups.map((group, groupIndex) => (
                      <li key={groupIndex}>
                        <ul className="drop-down-group">
                          {group.map((member, memberIndex) => {
                            return (
                              memberIndex == 0
                                ? <li key={memberIndex} className='title'>
                                  <Link to={`${navItem.base}/${member.path}`}>
                                    {member.display}
                                  </Link>
                                </li>
                                : <li key={memberIndex}>
                                  <Link to={`${navItem.base}/${member.path}`}>
                                    {member.display}
                                  </Link>
                                </li>
                            )
                          })}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>}

              </li>
            ))}
          </ul>
        </div>
        <div className="nav__close"
          onClick={() => setIsNavShow(false)}>
          <IoIosClose />
        </div>
      </nav>

    </header>
  );
}

