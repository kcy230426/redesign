import './../scss/my.scss';
import React, { useState, useEffect } from 'react';
import style from './../scss/Hd.module.css';
import logo from './../asset/logo.png';
import { Link } from 'react-router-dom';




const Header = (props) => {


  const nav = props.dbnav;
  const nr = props.dbnr;
  const men = props.dbm;
  const women = props.dbwm
  const kids = props.dbk
  const sale = props.dbs
  const menus = props.ms


  // 데이터를 보여줄지 여부를 제어하기 위한 상태 변수

  const [showNr, setShowNr] = useState(false);

  const [showMen, setShowMen] = useState(false);

  const [showWomen, setShowWomen] = useState(false);

  const [showKids, setShowKids] = useState(false);

  const [showSale, setShowSale] = useState(false);

  const [isSnkrHovered, setIsSnkrHovered] = useState(false);

  const [isMemberHovered, setIsMemberHovered] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const searchClick =()=>{
    const board = document.getElementsByClassName("board")
    if (board.length > 0) {
      board[0].style.display = "block";
    }
  }

  const buttonClick =()=>{
    const board = document.getElementsByClassName("board")
    if (board.length > 0) {
      board[0].style.display = "none";
    }
  }


  // 이하 특정 항목에 마우스를 올렸을 때 이벤트 핸들러

  const handleMouseEnterNr = () => {
    setShowNr(true);
    document.getElementById("gnb").style.setProperty("--before-height", "700px");
    document.getElementById("gnb").style.setProperty("--before-opacity", "1");

  };

  const handleMouseEnterMen = () => {
    setShowMen(true);
    document.getElementById("gnb").style.setProperty("--before-height", "700px");
    document.getElementById("gnb").style.setProperty("--before-opacity", "1");

  };

  const handleMouseEnterWomen = () => {
    setShowWomen(true);
    document.getElementById("gnb").style.setProperty("--before-height", "700px");
    document.getElementById("gnb").style.setProperty("--before-opacity", "1");

  };

  const handleMouseEnterKids = () => {
    setShowKids(true);
    document.getElementById("gnb").style.setProperty("--before-height", "700px");
    document.getElementById("gnb").style.setProperty("--before-opacity", "1");

  };

  const handleMouseEnterSale = () => {
    setShowSale(true);
    document.getElementById("gnb").style.setProperty("--before-height", "700px");
    document.getElementById("gnb").style.setProperty("--before-opacity", "1");

  };

  // 공통 이벤트 핸들러: 마우스가 어떤 메뉴에서 나갈 때 모든 메뉴를 숨김
  
  const handleMouseLeave = () => {
    document.getElementById("gnb").style.setProperty("--before-height", "0");
    document.getElementById("gnb").style.setProperty("--before-opacity", "0");
    setShowNr(false);
    setShowMen(false);
    setShowWomen(false); 
    setShowKids(false); 
    setShowSale(false); 
    setIsSnkrHovered(false);
    setIsMemberHovered(false);
  };


const handleSnkrMouseEnter = () => {
  setIsSnkrHovered(true);
  document.getElementById("gnb").style.setProperty("--before-height", "0");
  };


  const handleMemberMouseEnter = () => {
    setIsMemberHovered(true);
    document.getElementById("gnb").style.setProperty("--before-height", "0");
  };





  return (
    <div id="wrap">
          <header id="header" className={`${isScrolled ? 'scroll' : ''}`}>
      <div id={style.hd} className='d-flex justify-content-between align-items-center'>
        <div className='logo'><Link to="/redesign"><img src={logo} alt="로고" /></Link></div>
        <ul id="gnb" className="d-flex justify-content-between align-items-center">
          {nav.gnb.map((x, i) => (
            <li
              key={x.id}
              className={`${x.cls} ${isSnkrHovered ? '' : ''}${isMemberHovered ? 'hovered' : ''}`}
              onMouseEnter={x.titlename === "New Releases" ? handleMouseEnterNr : x.titlename === "Men" ? handleMouseEnterMen : x.titlename === "Women" ? handleMouseEnterWomen : x.titlename === "Kids" ? handleMouseEnterKids : x.titlename === "Sale" ? handleMouseEnterSale : x.titlename === "SNKRS" ? handleSnkrMouseEnter : x.titlename === "Member Days 미리보기" ? handleMemberMouseEnter : null}
              onMouseLeave={handleMouseLeave}
            >
              <a key={x.id} href={'#' + x.href} className="d1a">{x.titlename}</a>
              {x.titlename === "New Releases" && showNr && (
                <ul id="d2ul" className='d-flex'>
                    {['nf', 'si', 'mnew', 'wnew', 'knew'].map((category) => (
                        <li key={category} className={`nr ${category}`}>
                          {Object.keys(nr[category]).map((key) => (
                            <a key={nr[category][key].id} href={`#${nr[category][key].href}`} className={`d2a ${nr[category][key].cls}`}>
                              {nr[category][key].titlename}
                            </a>
                          ))}
                        </li>
                    ))}
                </ul>
              )}
              {x.titlename === "Men" && showMen && (
                  <ul id="d2ul" className='d-flex'>
                      {['nf', 'shoes', 'clothes', 'goods', 'shop', 'guide', 'uniform'].map((category) => (
                          <li key={category} className={`men${category}`}>
                            {Object.keys(men[category]).map((key) => (
                              <a key={men[category][key].id} href={`#${men[category][key].href}`} className={`d2a ${men[category][key].cls}`}>
                                {men[category][key].titlename}
                              </a>
                              ))}
                              </li>
                       ))}
                   </ul>
                )}
              {x.titlename === "Women" && showWomen && (
                  <ul id="d2ul" className='d-flex'>
                    {['nf', 'shoes', 'clothes', 'goods', 'shop'].map((category) => (
                      <li key={category} className={`women${category}`}>
                        {Object.keys(women[category]).map((key) => (
                          <a key={women[category][key].id} href={`#${women[category][key].href}`} className={`d2a ${women[category][key].cls}`}>
                            {women[category][key].titlename}
                          </a>
                          ))}
                          </li>
                      ))}
                  </ul>
                )}
               {x.titlename === "Kids" && showKids && (
                  <ul id="d2ul" className='d-flex'>
                  {['nf', 'shoes', 'clothes', 'goods', 'shop', 'sizeshoes', 'sizeclothes'].map((category) => (
                    <li key={category} className={`kids${category}`}>
                      {Object.keys(kids[category]).map((key) => (
                        <a key={kids[category][key].id} href={`#${kids[category][key].href}`} className={`d2a ${kids[category][key].cls}`}>
                          {kids[category][key].titlename}
                        </a>
                        ))}
                        </li>
                    ))}
                  </ul>
              )}
                {x.titlename === "Sale" && showSale && (
                  <ul id="d2ul" className='d-flex'>
                  {['sl', 'ms', 'ws', 'ks'].map((category) => (
                    <li key={category} className={`sale${category}`}>
                      {Object.keys(sale[category]).map((key) => (
                        <a key={sale[category][key].id} href={`#${sale[category][key].href}`} className={`d2a ${sale[category][key].cls}`}>
                            {sale[category][key].titlename}
                        </a>
                        ))}
                        </li>
                    ))}
                  </ul>
              )}
            </li>
          ))}
        </ul>
        <ul id="menus" className='d-flex'>
        {['cart', 'login', 'search'].map((category) => (
                    <li key={category} className={`menus ${category}`}>
                     {Object.keys(menus[category]).map((key) => (
                        <a key={menus[category][key].id} href={'#' + menus[category][key].href} className={`d2a ${menus[category][key].cls}`} onClick={searchClick}>{menus[category][key].titlename}</a>
                      
                    ))}
                    </li>
                    ))}
        </ul>
      </div>

      {/* Seaarch 팝업 */}
      <div className="board">
        <div id="searchbox">
            <div className="closebtn"><button onClick={buttonClick}>X</button></div>
              <ul className="first">
                  <li className='d-flex'>
                    <select name="search" id="search">
                          <option value="all">전체</option>
                          <option value="shoes">신발</option>
                          <option value="clothes">의류</option>
                          <option value="ect">잡화</option>
                          <option value="goods">용품</option>
                    </select>
                    <input type="textarea" maxLength={25} placeholder='내용을 입력해주세요.' className='textbox'/>
                    <input type="submit" value="클릭" aria-label="클릭"/>
                  </li>
                </ul>
              <ul className="second">
                <li className='popular'>인기검색어 </li>
                <span>#AIR #AIR FORCE #JORDAN 052 #NIKE 099</span>
              </ul>

          </div>
      </div>
      
    </header>
    </div>
  );
};

export default Header;
