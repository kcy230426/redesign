import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules';




const Contents = (props) => {


    const d1 = props.dbd1
    const d2 = props.dbd2
    const d3 = props.dbd3

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      const [flixData, setFlixData] = useState(d3.flix1);
      const [isAnimating, setAnimating] = useState(false);

    
      const handleThumbnailClick = (newData) => {
        setAnimating(true);
        setTimeout(() => {
            setFlixData(newData);
            setAnimating(false);
          }, 300);
      };

    

    return(
        <div id="contents">
            <Swiper id="mainbox" spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 8000, disableOnInteraction: false,}} modules={[Autoplay, Pagination]}  loop={true} >
                    {Object.keys(d1).map((category) => (
                        <SwiperSlide key={category}>
                            <React.Fragment>
                                {d1[category].map((item) => (
                                    <div key={item.id} className={`d1 d-flex justify-content-center d1_${item.id}`}>
                                        <div key={`${item.id}_bgimg`} className="bgimg"><img key={`${item.id}_img`} src={item.bgimg} alt={item.bgimgalt} /></div>
                                        <ul key={`${item.id}_box`} className="box">
                                            <li key={`${item.id}_st`} className={`d-flex align-items-center ${item.stclass}`}>
                                                <span key={`${item.id}_line`} className='line'></span>
                                                {item.subtitle}
                                            </li>
                                            <li key={`${item.id}_tc`} className={item.tclass}>{item.title}</li>
                                            <li key={`${item.id}_btn`}><button key={`${item.id}_click`}>Click 〉〉</button></li>
                                        </ul>
                                    </div>
                                ))}
                            </React.Fragment>
                        </SwiperSlide>
                    ))}
            </Swiper>
                       
            
            <div className="d2">
                <div className="bgimg">
                {Object.keys(d2.nwf1).map((key) => (
                    <img key={`${d2.nwf1[key].id}_img`} src={d2.nwf1[key].bgimg} alt={d2.nwf1[key].bgimgalt} />
                ))}
                </div>
                       {Object.keys(d2.nwf1).map((key) => (
                        <ul key={`${d2.nwf1[key].id}_box`} className="box">
                            <li key={`${d2.nwf1[key].id}_st`} className={d2.nwf1[key].stclass}>{d2.nwf1[key].subtitle}<span key={`${d2.nwf1[key].id}_line`} className="line"></span></li>
                            <li key={`${d2.nwf1[key].id}_t1`} className={d2.nwf1[key].t1class}>{d2.nwf1[key].title1}</li>
                            <li key={`${d2.nwf1[key].id}_t2`} className={d2.nwf1[key].t2class}>{d2.nwf1[key].title2}</li>
                            <li key={`${d2.nwf1[key].id}_c1`} className={d2.nwf1[key].c1class}>{d2.nwf1[key].c1}</li>
                            <li key={`${d2.nwf1[key].id}_c2`} className={d2.nwf1[key].c2class}>{d2.nwf1[key].c2}</li>
                            <li key={`${d2.nwf1[key].id}_c3`} className={d2.nwf1[key].c3class}>{d2.nwf1[key].c3}</li>
                            <li key={`${d2.nwf1[key].id}_c4`} className={d2.nwf1[key].c4class}>{d2.nwf1[key].c4}</li>
                            <li key={`${d2.nwf1[key].id}_btn`}><Link to="/nwf" key={`${d2.nwf1[key].id}_link`} className="nwfbtn">{d2.nwf1[key].button}</Link></li>
                        </ul>
                    ))}
            </div>
            <div className="d3 ">
                <div className="txtani1">
                    NIKE FLIX STYLING
                </div>
                <div className="txtani2">
                    NIKE FLIX STYLING
                </div>
                <div className={`bgimg `}>
                             {Object.keys(flixData).map((key)=>(
                                    <div key={`${flixData[key].id}_titlebox`} className="titlebox">
                                        <h3 key={`${flixData[key].id}_t1`}>{flixData[key].title1}</h3>
                                        <h2 key={`${flixData[key].id}_t2`}>{flixData[key].title2}</h2>
                                    </div>
                                ))}
                    
                    <div className={`box thumbnail-container ${isAnimating ? 'fade-in' : ''}`}>
                        <div className={"imgbox"}>
                                {Object.keys(flixData).map((key)=>(
                                    <div key={`${flixData[key].id}_color`} className={flixData[key].color}>
                                    <img key={`${flixData[key].id}_img`} src={flixData[key].img} alt="이미지" />
                                    </div>
                                ))}
                        </div>
                        <div className="info">
                                 {Object.keys(flixData).map((key)=>(
                                     <ul className="txt" key={`{${flixData[key].id}_txt`}>
                                        <li key={`${flixData[key].id}_t3`} className={flixData[key].tclass}>{flixData[key].title3}</li>
                                        <li key={`${flixData[key].id}_c1`} className={`${flixData[key].cclass}_c1`}>{flixData[key].c1}</li>
                                        <li key={`${flixData[key].id}_c2`} className={`${flixData[key].cclass}_c2`}>{flixData[key].c2}</li>
                                        <li key={`${flixData[key].id}_c3`} className={`${flixData[key].cclass}_c3`}>{flixData[key].c3}</li>
                                    </ul>
                                ))}

                            <ul className="thumb">
                                {Object.keys(flixData).map((key)=>(
                                     <div className="first" key={`{${flixData[key].id}_first`}>
                                     <li key={`${flixData[key].id}_tb1`} onClick={() => handleThumbnailClick(d3.flix1)}><img key={`${flixData[key].id}_img1`} src={flixData[key].thumb1} alt={flixData[key].tb1} /></li>
                                     <li key={`${flixData[key].id}_tb2`} onClick={() => handleThumbnailClick(d3.flix2)}><img key={`${flixData[key].id}_img2`} src={flixData[key].thumb2} alt={flixData[key].tb2} /></li>
                                     <li key={`${flixData[key].id}_tb3`} onClick={() => handleThumbnailClick(d3.flix3)}><img key={`${flixData[key].id}_img3`} src={flixData[key].thumb3} alt={flixData[key].tb3} /></li>
                                     <li key={`${flixData[key].id}_tb4`} onClick={() => handleThumbnailClick(d3.flix4)}><img key={`${flixData[key].id}_img4`} src={flixData[key].thumb4} alt={flixData[key].tb4} /></li>
                                 </div>
                                ))}
                                {Object.keys(flixData).map((key)=>(
                                     <div className="second" key={`{${flixData[key].id}_second`}>
                                        {/* 형제끼리 key값이 동일해도 안 된다!! */}
                                     <li key={`${flixData[key].id}_tb5`} onClick={() => handleThumbnailClick(d3.flix5)}><img key={`${flixData[key].id}_img5`} src={flixData[key].thumb5} alt={flixData[key].tb5} /></li>
                                     <li key={`${flixData[key].id}_tb6`} onClick={() => handleThumbnailClick(d3.flix6)}><img key={`${flixData[key].id}_img6`}  src={flixData[key].thumb6} alt={flixData[key].tb6} /></li>
                                 </div>
                                ))}
                               
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contents;
